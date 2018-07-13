// ==UserScript==
// @name         Hide Create Community Button
// @description  Hide the Create a community Button!
// ==/UserScript==

if(typeof(dojo) != "undefined") {
	require(["dojo/domReady!"],  function(){
		//get ID with query("#id) and add style
	   dojo.query("#createPlaceButton").style("display","none");
        })
}
