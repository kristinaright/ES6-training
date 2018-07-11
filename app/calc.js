module.exports.sum = (arr) => {
  return arr.reduce((previous, current) => previous + current, 0);
};

module.exports.getFinalPrice = (price, tax = 0.2) => price + price * tax;
module.exports.restArray = (...args) => args;
module.exports.getDog = (breed, name, age, weight) => {
  return {
    breed,
    name,
    age,
    weight,
    ['foodNorm' + breed]: '1000g',
  };
};