const fs = require("fs").promises;
const lexer = require("./lexer.js");

async function main() {
    const code = (await fs.readFile("example1.noob")).toString();
    lexer.reset(code);
    let token;
    while (true) {
        token = lexer.next();
        if (token) {
            console.log(token.type, JSON.stringify(token.value));
        } else {
            break;
        }
    }
}

main().catch(err => console.log(err.stack));