"use strict";
const main = arg => {
    var lines = arg.split('\n');
    var input = lines.shift().split(' ').map(function(n){return +n;});

    var maxV = 0;

    if(input[0] >= input[3]){
        console.log(input[3]);
        return;
    }

    maxV = input[0];
    input[3] -= input[0];
    
    if(input[1] >= input[3]){
        console.log(maxV);
        return;
    }

    input[3] -= input[1];

    maxV -= input[3];
    console.log(maxV);
    return;

}
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));