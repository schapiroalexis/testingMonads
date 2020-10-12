const log = (val) => console.log(val);

log("1) this");
log(this); //{}

this.name = "juan";
log("2) this.name =");
log(this.name); //juan

//arrow function is a function expression and it has access to the this of the sorriunding scope

/*
 * 
Does not have its own bindings to this or super, and should not be used as methods.
Does not have arguments, or new.target keywords.
Not suitable for call, apply and bind methods, which generally rely on establishing a scope.

 */
const test1 = (name) => {
  this.name = name;
};

test1("pepe");
log("3) this.name =");
log(this.name); //pepe

//log(this.street); //undefined
//log(this); //{name:pepe}

function test2(name) {
  this.name = name;
  log("---- >test2, this.name");
  log(this.name);
}

function test3(name) {
  const newName = "test3-" + name;
  test2.call(this, newName);
}

test2("pirulo");
log("4) this.name =");
log(this.name); //pepe

test3.call(this, "mengano");
log("5) this.name =");
log(this.name); //test3-mengano

function test4(name) {
  this.name = name;
  log("6) test4, this.name =");
  log(this.name); //jose
}
test4("jose");
