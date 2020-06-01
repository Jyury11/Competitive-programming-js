"use strict";
const main = arg => {
    var lines = arg.split('\n');
    
    if(lines[0] == lines[1].slice(0,-1)){
        console.log('Yes');
    }else{
        console.log('No');
    }

}
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));