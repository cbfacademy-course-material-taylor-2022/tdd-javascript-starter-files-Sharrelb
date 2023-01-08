import { fizzBuzz } from "./fizzbuzz";

describe('The fizzBuzz function should', () => {
    it ('return 1 when given 1', () => {
        const actual = fizzBuzz(1);
    
    expect(actual).toEqual(1);
    });


    it ('return Fizz when given 3', ()=>{
        const actual = fizzBuzz(3);

    expect(actual).toEqual('Fizz');
    });
});