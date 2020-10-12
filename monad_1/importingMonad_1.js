const Identity = require("./monad_1");

const one = Identity.of(1);

const resultOfEmit = one.emit();

//console.log(resultOfEmit);//1

const testingChain = (a) => a + 1;

//console.log(chainedToTwo) //2
const mapFunction = (a) => a + 1;
const two = one.map(mapFunction);

//console.log(two.inspect()); //Identity(2)
//console.log(two.emit()); //2

const a = [1, 2, 3];
const IdA = Identity.of(a);
const chainedA = IdA.chain(testingChain);
const mapedA = IdA.map(mapFunction);
console.log("emit  = ", IdA.emit()); //[1,2,3]
console.log("chainedA = ", chainedA);//1,2,31
console.log("mapedA.emit() = ", mapedA.emit());//1,2,31
