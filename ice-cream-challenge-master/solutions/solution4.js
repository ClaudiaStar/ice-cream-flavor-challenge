// Bonus solution: build on solution1 by adding minimal
// styling using CSS classes as jQuery selectors.

iceCreamFlavors.forEach(function(flavor) {
  let li = document.createElement("li");
  $("ul").append(li);

  li.innerHTML += flavor.charAt(0).toUpperCase() + flavor.slice(1);

  li.className = "ice-cream-flavor";

  $(".ice-cream-flavor").css({
    width: "fit-content",
    "background-color": "#fff6da",
    color: "#042f4b",
    "text-decoration": "cursive",
    "text-align": "center",
    margin: "20px",
    padding: "3px",
    "font-family": "monospace"
  });
});

$(".ice-cream-list").css({
  "list-style-type": "none"
});
