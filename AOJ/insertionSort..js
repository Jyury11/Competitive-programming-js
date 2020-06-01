"use strict";

function main() {
	let string = input;
  
    const N = parseInt(string[0].split('\n'));
    let ARRAY = [];
    ARRAY = string[1].split(' ').map( n => parseInt(n));

    
    let v;
    let j;

    
    for(let i = 1; i < N; i++){
        
        let answer = [];
        
        v = ARRAY[i];
        j = i-1;
        
        while( (j>=0) && (ARRAY[j] > v)){
            ARRAY[j+1] = ARRAY[j];
            j--;
        }
        ARRAY[j+1] = v;
        
        for(let k = 0; k < N; k++){
            answer += ARRAY[k];
            if((i !== N-1)||(k !== N-1)){
                answer += ' ';             
            }
           
        }
        
        console.log(answer);
    }
}

var
input = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
  input += chunk;
});
process.stdin.on('end', function() {
  input = input.split('\n');
  main();
});