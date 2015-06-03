var React 		= require("react");
var apiKey 		= process.env.API_KEY || require("../../creds.json").apiKey;
var Header 		= require("./header.jsx");
var SearchBox 	= require("./search-container.jsx");
var Content 	= require("./content.jsx");

// TODO: put in lib/utils dir
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

var Container = React.createClass({
	getInitialState: function() {
		return {
			searchTerm: "",
			posts: null
		}
	},

	searchChange: function(e) {
		this.setState({
			searchTerm: e.target.value
		})

		this.submitSearch();
	},

	submitSearch: function(e) {
		if (e) {
			e.preventDefault();
		}

		getPosts(this.state.searchTerm, function(json) {

			this.setState({
				posts: json
			})

		}.bind(this));
	},
	
	render: function() {
		return (
			<div>
				<Header />
				<SearchBox searchTerm={ this.state.searchTerm } 
							handleChange={ this.searchChange }
							submitSearch={ this.submitSearch } />
				{( this.state.posts
					? <Content posts={this.state.posts}/>
					: <p></p>
				)}
				
			</div>
		);
	}
});

module.exports = Container;
