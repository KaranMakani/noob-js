const moo = require("moo");

/* 
Ws
number literls
string literls
left paran
right paran
assignment operators
identifire
new line

*/

let lexer = moo.compile({
    whitespace: /[ \t]+/,
    number: {
        match: /0|[1-9][0-9]*/,
        value: Number
    },
    string: /"(?:\\["\\]|[^\n"\\])*"/,
    left_paren: '(',
    right_paren: ')',
    assignment_op: "=",
    identifier: /[a-zA-Z_][a-zA-Z0-9]*/,
    newline: { match: /\n/, lineBreaks: true },
});


/*
plus 
minus 
multiply 
divide 
left bracket
right bracket
colon
if keyword
else keyword
for keyword
in keyword
class keyword
double quote
  */