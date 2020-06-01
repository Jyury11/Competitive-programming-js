"use strict";
const main = arg => {
    var lines = arg.split('\n');

    if(lines[0] === 'ARC'){
        console.log("ABC");
    }else{
        console.log("ARC");
    }

}
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));