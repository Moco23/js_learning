//  js objects
var itOpermaPricing = {
  monitr: 200,
  ssd: 50,
  kuciste: 100,
  tipkovnica: 70,
};
// calling a objects items in the console
console.log(itOpermaPricing);

// calling a specific items in the console
console.log(itOpermaPricing["monitr"]);
console.log(itOpermaPricing["ssd"]);
console.log(itOpermaPricing["kuciste"]);
console.log(itOpermaPricing["tipkovnica"]);

// adding a new item to the object
itOpermaPricing["mis"] = 40;
// callling a new item in the object
console.log(itOpermaPricing);
// calling a specific items in the console
console.log(itOpermaPricing["monitr"]);
console.log(itOpermaPricing["ssd"]);
console.log(itOpermaPricing["kuciste"]);
console.log(itOpermaPricing["tipkovnica"]);
console.log(itOpermaPricing["mis"]);
