(function  () {
    "use strict";
    
    function getPosts(searchTerm, apiKey, cb) {

        var httpRequest = new XMLHttpRequest();
        var searchUrl   = "https://content.guardianapis.com/search?" +
                        "q=" + searchTerm + "&api-key=" + apiKey;

        httpRequest.onreadystatechange = function(){
            if (httpRequest.readyState === 4) {

                if (httpRequest.status === 200 & searchTerm !== "") {

                    var JSONresponse = JSON.parse(httpRequest.responseText).response.results;
                    
                    if ( !!JSONresponse[0] ) {
                        cb(null, JSONresponse);
                    } else {
                        cb(true);
                    }
                    
                } else {
                    cb(true);
                }
            }
        };
        httpRequest.open("GET", searchUrl, true);
        httpRequest.send();
    }

    module.exports = getPosts;

}());