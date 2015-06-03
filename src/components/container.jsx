var React 		= require("react");
var Header 		= require("./header.jsx");
var SearchBox 	= require("./search-container.jsx");
var Content 	= require("./content.jsx");


var Container = React.createClass({
	getInitialState: function() {
		return {
			searchTerm: "",
			posts: []
		}
	},

	searchChange: function(e) {
		this.setState({
			searchTerm: e.target.value
		})
	},

	submitSearch: function(e) {
		e.preventDefault();
		console.log("submitting!");
	},
	
	render: function() {
		return (
			<div>
				<Header />
				<SearchBox searchTerm={ this.state.searchTerm } 
								handleChange={ this.searchChange }
								submitSearch={ this.submitSearch } />
				<Content posts={this.state.posts}/>
			</div>
		);
	}
});

module.exports = Container;