(function  () {
    "use strict";
    
    function getPosts(searchTerm, apiKey, cb) {

        var httpRequest = new XMLHttpRequest();
        var searchUrl   = "https://content.guardianapis.com/search?" +
                        "q=" + searchTerm + "&api-key=" + apiKey;

        httpRequest.onreadystatechange = function(){
            if (httpRequest.readyState === 4) {

                if (httpRequest.status === 200) {

                    var JSONresponse = JSON.parse(httpRequest.responseText).response.results;
                    
                    if ( JSONresponse.length > 0 ) {
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