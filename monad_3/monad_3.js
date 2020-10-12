Maybe = function (value) {
  var Nothing = {
    bind: function (fn) {
      return this;
    },
    isNothing: function () {
      return true;
    },
    val: function () {
      throw new Error("cannot call val() nothing");
    },
    maybe: function (def, fn) {
      return def;
    },
  };

  var Something = function (value) {
    return {
      bind: function (fn) {
        return Maybe(fn.call(this, value));
      },
      isNothing: function () {
        return false;
      },
      val: function () {
        return value;
      },
      maybe: function (def, fn) {
        return fn.call(this, value);
      },
    };
  };

  if (typeof value === "undefined" || value === null) {
    console.log("returning nothing");
    return Nothing;
  }

  console.log("returning Something. value = ", value);
  return Something(value);
};

let person1 = { a: { street: "caba" }, address: { state: "whatever" } };

const personsState = (personData) =>
  Maybe(personData)
    .bind(function (p) {
      return p["address"];
    })
    .bind(function (a) {
      return a["state"];
    })
    .maybe("State unknown!!", function (s) {
      console.log("S  === ");
      console.log(s);
      return s;
    });

//console.log(personsState(person1));

const persons = [{ name: "pirulo" }, { address: { state: "caba" } }];

const results = persons.map((personData) => personsState(personData));
console.log(results);
