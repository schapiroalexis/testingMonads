const Identity = (x) => ({
  emit: () => x,
  chain: (f) => f(x),
  map: (f) => Identity(f(x)),
  inspect: () => `Identity(${x})`,
});

// you might do type-checking here
const IdentityOf = (x) => Identity(x);

const exportIdentity = {
  of: IdentityOf,
};

module.exports = exportIdentity;
