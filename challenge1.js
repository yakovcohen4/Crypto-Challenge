/**
 * Convert hex to base64
 *
 * http://cryptopals.com/sets/1/challenges/1/
 *
 **/

const input =
  '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d';

const solution =
  'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t';

const covertToHex = new Buffer(input, 'hex');

console.log(covertToHex.toString('base64'));

console.log(
  'converted matches solution: ' + (covertToHex.toString('base64') === solution)
);
