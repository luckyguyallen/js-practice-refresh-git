"use strict";
(function(){
	function myFunction(){
		var goat, 
		nameList = ["mike", "erin", "russell", "Isaiah"], 
		rst = document.getElementById("results");
		
		for( var i = 0; i < nameList.length; i++){
			console.log("refresh", nameList[i], "jjjjjj");
			goat = document.createElement("LI");
			var txt = document.createTextNode(nameList[i]);
			goat.appendChild(txt);
			rst.appendChild(goat);
			console.log("forloop");
		}
		console.log("working");
	}
	myFunction();
}());
