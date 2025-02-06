const icecreamOrder = prompt(
  "What flavors of Froyo would you like to order? (Enter flavors separated by a comma)"
);

const orderArray = icecreamOrder.split(",");

const Flavors = {};

for (let i = 0; i < orderArray.length; i++) {
  let Flavor = orderArray[i];
  if (Flavors[Flavor]) {
    Flavors[Flavor] += 1;
  } else {
    Flavors[Flavor] = 1;
  }
}

console.log(Flavors);
