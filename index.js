alert("hi man!");

const caculator = {
   result: 0,

   sum(a,b) {return a+b;},
   minues(a,b) {return a-b;},
   multiply(a,b) {return a*b;},
   partition(a,b) {return a/b;},

};
console.log(caculator.sum(20,5));
console.log(caculator.minues(20,5));
console.log(caculator.multiply(20,5));
console.log(caculator.partition(20,5));