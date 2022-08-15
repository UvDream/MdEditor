import {program} from 'commander'
import pkg from './package.json'
program.version(pkg.version)
program.command("new").description("创建新版本").action(() => {

    console.log("创建新版本")
})
program.parse(process.argv)
