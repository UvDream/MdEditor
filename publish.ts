import {program} from "commander";
// @ts-ignore
import pkg from "./package.json";
// @ts-ignore
import tauriPkg from "./src-tauri/tauri.conf.json";
import inquirer from "inquirer";
// @ts-ignore
import chalk from "chalk";
// @ts-ignore
import shell from "shelljs";
// @ts-ignore
import fs from "fs";

program.version(pkg.version);
const old = pkg.version;
const oldArr = old.split(".");
const small = oldArr[0] + "." + oldArr[1] + "." + (parseInt(oldArr[2]) + 1);
const middle = oldArr[0] + "." + (parseInt(oldArr[1]) + 1) + ".0";
const big = parseInt(oldArr[0]) + 1 + "." + oldArr[1] + ".0";
const versions = [small, middle, big];
const opt = [
    "小版本(" + small + ")",
    "中版本(" + middle + ")",
    "大版本(" + big + ")",
    "其它",
];
const question = [
    {
        type: "rawlist" /* 选择框 */,
        message: "请选择发布的版本？",
        name: "operation",
        choices: opt,
    },
];
inquirer.prompt(question).then((answer: any) => {
    opt.forEach((element, index) => {
        if (element === answer.operation) {
            if (index === 3) {
                inquirer
                    .prompt([
                        {
                            type: "input",
                            message: "请输入版本号：",
                            name: "version",
                        },
                    ])
                    .then((v) => {
                        deploy_version(v.version);
                    });
            } else {
                deploy_version(versions[index]);
            }
        }
    });
});

async function deploy_version(version: string) {
    try {
        pkg.version = version;
        tauriPkg.package.version = version;
        chalk.red("开始修改版本号.....");
        fs.writeFileSync("./package.json", JSON.stringify(pkg, null, 4));
        fs.writeFileSync(
            "./src-tauri/tauri.conf.json",
            JSON.stringify(tauriPkg, null, 4)
        );
        //    修改完文件,开始打tag推送
        chalk.green("准备推送发版....");
        shell.exec("git add .");
        shell.exec("git commit -m 'v" + version + "'");
        shell.exec("git tag -a " + "v" + version + " -m '" + version + "'");
        shell.exec("git push origin master --tags");
    } catch (e) {
        console.log("错误", e);
    }
}

program.parse(process.argv);
