import { fizzBuzz } from "./fizzbuzz";

describe('The fizzBuzz function should', () => {
   
    it ('return 1 when given 1', () => {

        expect(fizzBuzz(1)).toEqual(1);
        });
        

    it ('return 1 when given 3', () => {

    expect(fizzBuzz(3)).toEqual('Fizz');
    });
    
    it ('return 1 when given 6 ', () => {
    
    expect(fizzBuzz(6)).toEqual('Fizz');
    });




});