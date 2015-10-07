var skipNav = function() {
	var content = document.getElementById("contentAnchor");
	content.focus();
	content.scrollIntoView();
	console.log(document.activeElement);
}