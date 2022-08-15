const inquirer = require('inquirer')
const pkg = require('../package.json')
const chalk = require('chalk')
const tauriPkg = require('../src-tauri/tauri.conf.json')
const fs = require("fs");
const shell = require("shelljs");
module.exports.make_version = async () => {
    const old = pkg.version;
    const oldArr = old.split(".");
    //小版本
    const small = oldArr[0] + "." + oldArr[1] + "." + (parseInt(oldArr[2]) + 1);
    const middle = oldArr[0] + "." + (parseInt(oldArr[1]) + 1) + "." + oldArr[2];
    const big = parseInt(oldArr[0]) + 1 + "." + oldArr[1] + "." + oldArr[2];
    const versions = [small, middle, big]
    const opt = ["小版本(" + small + ")", "中版本(" + middle + ")", "大版本(" + big + ")", "其它"];
    const question = [
        {
            type: "rawlist" /* 选择框 */,
            message: "请选择发布的版本？",
            name: "operation",
            choices: opt,
        }
    ];
    const answer = await inquirer.prompt(question);
    opt.forEach((element, index) => {
        if (element === answer.operation) {
            if (index === 3) {
                inquirer.prompt([{
                    type: "input",
                    message: "请输入版本号：",
                    name: "version",
                }]).then(v => {
                    deploy_version(v.version)
                })
            } else {
                deploy_version(versions[index])
            }
        }
    })
}

async function deploy_version(version) {
    try {
        pkg.version = version;
        tauriPkg.package.version = version
        chalk.red("开始修改版本号.....")
        fs.writeFileSync("./package.json", JSON.stringify(pkg, null, 4));
        fs.writeFileSync("./src-tauri/tauri.conf.json", JSON.stringify(tauriPkg, null, 4));
        //    修改完文件,开始打tag推送
        chalk.green("准备推送发版....")
        shell.exec("git add .");
        shell.exec("git commit -m '" + version + "'");
        shell.exec("git tag -a " + version + " -m '" + version + "'");
        shell.exec("git push origin master --tags");
        // await $`git add .`;
        // await $`git commit -m "tag: 发版${version}"`;
        // await $`git tag -a ${version} -m "发版${version}"`;
        // await $`git push origin master --tags`;
    } catch (e) {
        console.log("错误", e)
    }
}
