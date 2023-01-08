import { fizzBuzz } from "./fizzbuzz";

describe('The fizzBuzz function should', () => {
   
    it.each`
    input | expected
    ${1} | ${1}
    ${3} | ${'Fizz'}
    ${6} | ${'Fizz'}
    ${9} | ${'Fizz'}
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

