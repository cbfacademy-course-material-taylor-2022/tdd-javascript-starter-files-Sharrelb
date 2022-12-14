import { fib } from "./fibonacci";

describe ('The function should return'() => {
    it,each`
   input |expected
   ${0} | ${0} 
   ${1} | ${1}
   ${2} | ${1}
   ${3} | ${2}
   ${4} | ${3}
   ${5} | ${5}
   ${6} | ${8}
   ${7} | ${13}
   ${8} | ${21}
   ${9} | ${34}
   ${10}| ${55}`

   `('return $expected when given $input ', ({input,expected}) => {
     const actual = fib (input)
    expect(actual).toEqual(expected);
  })
  

});
}
