// Solution 2 - use a for loop to create
// a <li> for each ice cream flavor
// & append all to the IceCreamFlavors <ul>

let numberOfFlavors = iceCreamFlavors.length;
let flavor;

for (i = 0; i < numberOfFlavors; i++) {
  flavor = document.createElement("li");

  flavor.innerHTML = iceCreamFlavors[i];

  flavor.className = "ice-cream-flavor";

  $("ul").append(flavor);
}
