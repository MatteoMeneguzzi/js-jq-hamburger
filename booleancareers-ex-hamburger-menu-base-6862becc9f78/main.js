var burger = $(" .fa-bars");
var close = $(" .fa-times");
var menu = $(" .hamburger-menu");

burger.click(function () {
	menu.show("fast");
});

close.click(function () {
	menu.hide("fast");
});
