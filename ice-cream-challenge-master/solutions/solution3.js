// Solution 3 - use the map method on the
// IceCreamFlavors array to create
// a <li> for each ice cream flavor
// & append all to the IceCreamFlavors <ul>
// using its CSS class as HTML DOM selector

iceCreamFlavors.map(flavor => {
  let li = document.createElement("li");
  $(".ice-cream-list").append(li);
  li.innerHTML = flavor;
  li.className = "ice-cream-flavor";
});
