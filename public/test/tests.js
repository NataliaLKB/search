var project = document.getElementsByTagName("iframe")[0].contentWindow.document;

test("check that the guardian logo is in the header", function() {

    var header = project.getElementsByTagName("header")[0];
    var image  = header.getElementsByTagName("img")[0];

    equal(image.src.indexOf("img/logo.png") > -1, true, "image src is correct");
    equal(image.clientWidth > 0, true, "image is displayed");
    equal(image.alt, "The Guardian", "has the correct alternative text");
});

test("There are two input boxes with correct initial placeholder or values", function() {

    var searchBox = project.getElementsByTagName("input")[0];
    var searchSubmit = project.getElementsByTagName("input")[1];
    var src = searchSubmit.src;

    equal(searchBox.placeholder, "search", "search box has the right placeholder");
    equal(src.indexOf("img/magnifying_glass.png") > -1, true, "search submit has the right value"); 
});

test("If you type in a search term", function( assert ) {

    var done = assert.async();

    var searchBox = project.getElementsByTagName("input")[0];
    var searchSubmit = project.getElementsByTagName("input")[1];

    searchBox.value = "xzlkeu";
    searchSubmit.click();

    setTimeout(function() {
        
        var searchError = project.getElementsByClassName("error");

        assert.equal(searchError.length > 0, true, 'search error appears');
        assert.equal(searchError[0].innerText, "Sorry, no results.", 'with correct message');
        done();
    }, 500);
});
