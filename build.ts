import { expandGlob } from "https://deno.land/std@0.97.0/fs/mod.ts";

const reg = /import (\w) from "validator\/lib\/(\w).ts"/g;

for await (const file of expandGlob(Deno.cwd() + "/src/**/*.ts")) {
    // console.log(file);
    const data = Deno.readTextFileSync(file.path);
    if (reg.test(data)) {
        // console.log(data);
        console.log(data.match(reg));
        console.log(data.replaceAll(reg, `$1$2.ts'`));
        break;
        // Deno.writeTextFileSync(file.path, data.replaceAll(reg, `$1$2.ts'`));
    }
}