(this["webpackJsonp@uiw/react-codesandbox"]=this["webpackJsonp@uiw/react-codesandbox"]||[]).push([[158],{214:function(a,e){!function(a){a.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:true|false)\b/,block:{pattern:/^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/},a.hooks.add("before-tokenize",(function(e){a.languages["markup-templating"].buildPlaceholders(e,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),a.hooks.add("after-tokenize",(function(e){a.languages["markup-templating"].tokenizePlaceholders(e,"handlebars")}))}(Prism)}}]);
//# sourceMappingURL=158.3421f6ce.chunk.js.map