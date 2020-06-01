var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=input.split("\n").map(Number);

let sumP = 0;

for(let i=0;i<Arr.length;i++){
    if(pNum(Arr[i]))sumP++;
}

console.log(sumP);

function pNum(x){
    
    if(x === 2){
        return true;
    }
    
    if( (x < 2) || ( (x % 2) === 0) ){
        return false;
    }
    
    let j = 3;
    
    while(j <= Math.sqrt(x)){
        if( (x % j) === 0){
            return false;
        }
        
        j += 2;
    }
    
    return true;
}
