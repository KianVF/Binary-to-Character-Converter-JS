function binaryAgent(str) {
  return str.split(' ').map(elem => elem.split('').reverse().map((x,i) => x === '1' ? 2 ** i : 0).reduce((s,n) => s+n,0)).map(e => String.fromCharCode(e)).join('');
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
