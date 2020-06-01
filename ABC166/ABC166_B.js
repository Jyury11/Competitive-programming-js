"use strict";
const main = arg => {
    var inputlines = arg.split('\n');
    var lines = inputlines[0].split(' ');

    var N = parseInt(lines.shift());
    var K = parseInt(lines.shift());

    var array = [];

    for(let i = 0; i < K; i++){
        var tmp = inputlines[2+(2*i)].split(' ').map(Number);

        for(let j = 0; j < tmp.length;j++){
            array.push(tmp[j]);
        }
    }

    const notHave = new Set(array);

    var cnt = 0;

    for(let i = 1; i <= N; i++){
        if(!notHave.has(i)){
            cnt++;
        }
    }

    console.log(cnt);

}
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));