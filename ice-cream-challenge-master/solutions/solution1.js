// Solution 1 - use a forEach loop to create
// a <li> for each ice cream flavor
// & append all to the IceCreamFlavors <ul>

iceCreamFlavors.forEach(function(flavor) {
  let li = document.createElement("li");
  $("ul").append(li);

  li.innerHTML += flavor;

  li.className = "ice-cream-flavor";
});
