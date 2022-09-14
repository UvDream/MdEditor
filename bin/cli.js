#! /usr/bin/env node
const {program} = require("commander");
const {make_version} = require("./version");
//版本号
program
    .command("new")
    .description("是否创建新版本?")
    .action(() => {
        make_version();
    });

program.parse(process.argv);
