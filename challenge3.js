/**
 * Single-byte XOR cipher
 *
 * Bruteforce decryption of XOR'd ciphertext
 *
 * http://cryptopals.com/sets/1/challenges/3/
 */

var input =
  '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736';

var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var keys = alphabet.split('').concat(alphabet.toUpperCase().split(''));

// scores text based on the presence of alphabetical chars or spaces
function score(input) {
  return input
    .split('')
    .map(function (c) {
      if (keys.indexOf(c) > -1 || c === ' ') {
        return 1;
      } else {
        return 0;
      }
    })
    .reduce(function (a, b) {
      return a + b;
    });
}

var b = new Buffer(input, 'hex');

// computes single-charactor xor on the global buffer `b`
// this cheats, key s/b a buffer
// improved versions in challenges 4 and 5
function xor(c) {
  var key = c.charCodeAt();
  var results = [];
  for (var i = 0; i < b.length; i++) {
    results.push(b[i] ^ key);
  }

  return new Buffer(results).toString();
}

var candidates = keys
  .map(function (c) {
    var payload = xor(c);

    return { payload: payload, score: score(payload) };
  })
  .sort(function (a, b) {
    return b.score - a.score;
  });

console.log(JSON.stringify(candidates[0], null, 2));
