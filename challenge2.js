/**
 * Fixed XOR
 *
 * https://cryptopals.com/sets/1/challenges/2
 *
 **/

const input = '1c0111001f010100061a024b53535009181c';
const key = '686974207468652062756c6c277320657965';
const solution = '746865206b696420646f6e277420706c6179';

const covertInputToHex = new Buffer(input, 'hex');
const covertKeyToHex = new Buffer(key, 'hex');
const covertSolutionToHex = new Buffer(solution, 'hex');

console.log(covertInputToHex);
console.log(covertKeyToHex);
console.log(covertSolutionToHex);

console.log(covertInputToHex.toString());
console.log(covertKeyToHex.toString());
console.log(covertSolutionToHex.toString());

const arr = [];

for (let index = 0; index < covertInputToHex.length; index++) {
  console.log(covertInputToHex[index]);
  console.log(covertKeyToHex[index]);

  console.log(covertInputToHex[index] ^ covertKeyToHex[index]);
  arr.push(covertInputToHex[index] ^ covertKeyToHex[index]);
}

console.log(arr);

console.log(new Buffer(arr).toString() === covertSolutionToHex);
