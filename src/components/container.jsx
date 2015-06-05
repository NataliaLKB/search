var React       = require("react");
var apiKey      = "jur6vm5nnb2b3ysxct53svbz";
var Header      = require("./header.jsx");
var SearchBox   = require("./search-container.jsx");
var Content     = require("./content.jsx");
var getPosts    = require("../lib/get-content.js");

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
        }, this.submitSearch);
    },

    submitSearch: function(e) {
        if (e) {
            e.preventDefault();
        }

        getPosts(this.state.searchTerm, apiKey, function (err, json) {

            if (err) {
                this.setState({
                    searchError: true
                });
            } else {
                this.setState({
                    posts: json,
                    searchError: false
                });
            }
        }.bind(this));
    },
    
    render: function() {
        return (
            <div>
                <Header />
                <SearchBox searchTerm={ this.state.searchTerm } 
                            handleChange={ this.searchChange }
                            submitSearch={ this.submitSearch } 
                            searchError={ this.state.searchError }/>
                {( this.state.posts ? 
                    <Content posts={this.state.posts}/> : 
                    <p></p> 
                )}
            </div>
        );
    }
});

module.exports = Container;
