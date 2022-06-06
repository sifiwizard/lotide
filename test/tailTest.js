const tail = require('../tail')

const assert = require('chai').assert;

describe('#tail' , () => {

  it('return last two when passed ["Hello", "Lighthouse", "Labs"]', () =>{
    const input = ["Hello", "Lighthouse", "Labs"];
    const expected = ["Lighthouse", "Labs"];
    const result = tail(input);
    assert.deepEqual(result, expected);
  });

  it('return length of two when passed ["Hello", "Lighthouse", "Labs"]', () =>{
    const input = ["Hello", "Lighthouse", "Labs"];
    const expected = 2;
    const result = tail(input).length;
    assert.equal(result, expected);
  });

  it('does not effect original array', () =>{
    const input =  ["Yo Yo", "Lighthouse", "Labs"];
    const expected = input;
    tail(input);
    assert.deepEqual(input, expected);
  });

});