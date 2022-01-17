$("h1").addClass("big-title margin-50");

$(document).keypress((event) => {
  $("h1").text(event.key);
});

$("button").on("click", function () {
  console.log("clicked");
  $("h1").animate({ backgroundColor: "#aaccff" });
});
