// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const mylexer =  require ("./lexer.js");
var grammar = {
    Lexer: mylexer,
    ParserRules: [
    {"name": "assignment", "symbols": [(mylexer.has("indentifier") ? {type: "indentifier"} : indentifier), {"literal":"="}, "literal"]},
    {"name": "literal", "symbols": [(mylexer.has("number") ? {type: "number"} : number)]},
    {"name": "literal", "symbols": [(mylexer.has("string") ? {type: "string"} : string)]}
]
  , ParserStart: "assignment"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
