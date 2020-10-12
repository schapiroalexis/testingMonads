const Nothing = {
	bind: function (fn) {
		return this;
	},
};

const Maybe = function (value) {
  const Nothing = {
    bind: function (fn) {
      return this;
    },
  };

  const Something = function (value) {
    return {
      bind: function (fn) {
        return Maybe(fn.call(this, value));
      },
    };
  };

  if (typeof value === "undefined" || value === null) return Nothing;

  return Something(value);
};

let person = {}
var state = Maybe(person).bind(function(p) { 
  return p["address"];
}).bind(function(a) {
  return a["state"];
});

if (state == Nothing) {
  console.log("State unknown");
}
else {
	console.log(state);
}