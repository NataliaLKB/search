(function () {
	"use strict";
	
	function getPosts (searchTerm, cb) {

		var httpRequest = new XMLHttpRequest();
		var searchUrl 	= "http://content.guardianapis.com/search?" +
						"q=" + searchTerm + "&api-key=" + apiKey;

		httpRequest.onreadystatechange = function(){
	      	if (httpRequest.readyState === 4) {

	      	  	if (httpRequest.status === 200) {

	      	  	  	var JSONresponse = JSON.parse(httpRequest.responseText).response.results;
	      	  	  	cb(JSONresponse);
	      	  	} else {
	      	  		// TODO: better error handling here
	      	  	  	console.log('There was a problem with the request.');
	      	  	}
	      	}
	    };
	    httpRequest.open("GET", searchUrl, true);
	    httpRequest.send();
	}

	module.exports = getPosts;

})