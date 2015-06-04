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
    console.log(src);
    equal(searchBox.placeholder, "search", "search box has the right placeholder");
    equal(src.indexOf("img/magnifying_glass.png") > -1, true, "search submit has the right value");
    
});


// test("check that the css loads up properly", function() {
//   var header = getComputedStyle(document.getElementById('logo'), null).textAlign;
//   equal(header, 'center', 'css is present');
// });


// test("test to make sure makeurl is working", function() {
//     var searchterm = "tennis";
//     var year = "1999";
//     var makeUrlTest = gapi.makeurl(searchterm, year);
//     equal(makeUrlTest, 'http://content.guardianapis.com/search?' + 'from-date=' + year + '-01-01' + '&to-date=' + year + '-12-31' +
//     '&order-by-relevance'+'&show-tags=keyword'+'&q=' + searchterm + '&api-key=2crhgqs3wjpe4vkh9x5j86yt' + "&show-fields=all" + "&show-most-viewed=true" );
// });

// test( "make sure runAjax() is working properly", function() {
//     var searchterm = "tennis";
//     document.getElementById('searchTermInput').value = "tennis";
//     var year = "1999";
//     document.getElementById('yearInput').value = year;
//     var testRequestUrl = gapi.runAjax();
//     equal(testRequestUrl, 'http://content.guardianapis.com/search?' + 'from-date=' + year + '-01-01' + '&to-date=' + year + '-12-31' +
//         '&order-by-relevance'+'&show-tags=keyword'+'&q=' + searchterm + '&api-key=2crhgqs3wjpe4vkh9x5j86yt' + "&show-fields=all" + "&show-most-viewed=true");
// });

// test("check that the guardian is returning content", function(assert) {
//   var done = assert.async();
//   document.getElementById('searchTermInput').value = "orange";
//   document.getElementById('yearInput').value = "2001";
//   $( "#go-button" ).trigger( "click" );
//       setTimeout(function() {
//         equal(document.getElementsByClassName('titles')[0].innerHTML, "Theatre review: Blue Orange");
//         done();
//       }, 1000);
// });

// test("content is diplayed in the second tab", function(assert){
//   var done = assert.async();
//   document.getElementById('searchTermInput').value = "orange";
//   document.getElementById('yearInput').value = "2001";
//   $( "#go-button" ).trigger( "click" );
//   // waits for the next page to load
//   setTimeout(function() {
//     $("#next-button").trigger( "click" );
//     setTimeout(function() {
//         var hello = document.getElementsByClassName('titles')[1].innerHTML;
//         equal(hello,'Nigel Slater: Orange squash');
//         done();
//       }, 200);
//   }, 200);
// });

// test("when go button is clicked placeholder stops cycling suggestions", function(assert) {
//   var placeholderTester = document.getElementById('searchTermInput').innerHTML;
//   equal(placeholderTester, "");
// });

// test("check that ajaxGetRequest get a response from the guardian api", function(assert) {
//   var done = assert.async();
//   var ajaxTestResponse  = gapi.ajaxGetRequest('http://content.guardianapis.com/search?' + 'from-date=' + "1999" + '-01-01' + '&to-date=' + "1999" + '-12-31' +
//       '&order-by-relevance'+'&show-tags=keyword'+'&q=' + "tennis" + '&api-key=2crhgqs3wjpe4vkh9x5j86yt' + "&show-fields=all" + "&show-most-viewed=true", function(){});
//   setTimeout(
//     function() {
//       equal(ajaxTestResponse.readyState, 4);
//       done();
//     }, 200
//   );
