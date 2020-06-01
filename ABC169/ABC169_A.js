"use strict";
const main = arg => {
    var input = arg.split('\n');
    var lines = input.shift().split(' ').map(function(n){return +n;});

    console.log(lines[0]*lines[1]);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));