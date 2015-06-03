var React 		= require("react");
var apiKey 		= process.env.API_KEY || require("../../creds.json").apiKey;
var Header 		= require("./header.jsx");
var SearchBox 	= require("./search-container.jsx");
var Content 	= require("./content.jsx");

var Container = React.createClass({
	getInitialState: function() {
		return {
			searchTerm: "",
			posts: null
		};
	},

	searchChange: function(e) {
		this.setState({
			searchTerm: e.target.value
		});

		this.submitSearch();
	},

	submitSearch: function(e) {
		if (e) {
			e.preventDefault();
		}

		require("../lib/get-content.js")(this.state.searchTerm, function(json) {

			this.setState({
				posts: json
			});

		}.bind(this));
	},
	
	render: function() {
		return (
			<div>
				<Header />
				<SearchBox searchTerm={ this.state.searchTerm } 
							handleChange={ this.searchChange }
							submitSearch={ this.submitSearch } />
				{( this.state.posts ? <Content posts={this.state.posts}/> : <p></p> )}	
			</div>
		);
	}
});

module.exports = Container;
