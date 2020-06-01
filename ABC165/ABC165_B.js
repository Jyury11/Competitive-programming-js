"use strict";
const main = arg => {
    var lines = arg.split('\n');

    var money = 100;

    var year = 0;

    for(year = 0; money < Number(lines[0]); year++){
        money = money + parseInt(money * 0.01);
    }

    console.log(year);
}
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));