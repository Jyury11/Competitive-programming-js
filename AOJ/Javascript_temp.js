function main() {
  //ここで問題を解く
  //`input` に入力が改行で区切られた配列として入ってくるので頑張って

  console.log("AAA");
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