var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=input.split("\n");
var A=Arr[1].split(" ").map(Number);
var N=Arr[0];
console.log(A.join(" "));

let v;
let j;


for(let i = 1; i < N; i++){
    
    let answer = [];
    
    v = A[i];
    j = i-1;
    
    while( (j>=0) && (A[j] > v)){
        A[j+1] = A[j];
        j--;
    }
    A[j+1] = v;
    
    console.log(A.join(" "));
}