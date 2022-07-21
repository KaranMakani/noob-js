@{%
const myLexer =  require ("./lexer");
%}

@lexer myLexer

assignment -> %indentifier "=" literal 

literal 
    -> %number
    | %string