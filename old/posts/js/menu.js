document.getElementById("menu").addEventListener("click", function( event ) {
	var nav = document.getElementsByTagName('NAV')[0];
	var display = nav.style.display;
	if (display == '')
		display = nav.currentStyle ? nav.currentStyle.display :
                          getComputedStyle(nav, null).display;
	nav.style.display = display == 'block' ? 'none' : 'block';
}, false);