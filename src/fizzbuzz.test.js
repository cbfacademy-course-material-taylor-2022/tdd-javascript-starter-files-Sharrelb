import { fizzBuzz } from "./fizzbuzz";

describe('The fizzBuzz function should', () => {
   
    it.each`
    input | expected
    ${1} | ${1}
    ${2} | ${2}
    ${3} | ${'Fizz'}
    ${4} | ${4}
    ${5} | ${'Buzz'}
    ${6} | ${'Fizz'}
    ${7} | ${7}
    ${8} | ${8}
    ${9} | ${'Fizz'}
    ${10} | ${'Buzz'}
    ${11} | ${11}
    ${12} | ${'Fizz'}
    ${13} | ${13}
    ${14} | ${14}
    ${15} | ${'FizzBuzz'}
    `('return $expecyed wjem hobem $input ', ({input,expected}) => {
      const actual = fizzBuzz(input)
      expect(actual).toEqual(expected);
    })
    

});
   /* it ('return 1 when given 1', () => {

        expect(fizzBuzz(1)).toEqual(1);
        });
        

    it ('return 1 when given 3', () => {

    expect(fizzBuzz(3)).toEqual('Fizz');
    });
    
    it ('return Fizz when given 6 ', () => {
    
    expect(fizzBuzz(6)).toEqual('Fizz');
    });*/

