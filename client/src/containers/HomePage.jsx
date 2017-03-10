import React from "react";
import Home from "../components/Home.jsx";

class HomePage extends React.Component {
    // class constructor
    constructor(props) {
        super(props);

        this.state = {
            newsData: []
        };
    }

    // this method will be executed after initial rendering
    componentDidMount() {
        /*make an AJAX-request to the server to get a message available only to authorized users*/
        const xhr = new XMLHttpRequest();
        xhr.open("get", "/public/api/news");
        // xhr.setRequestHeader("Authorization", `bearer ${Auth.getToken()}`);  // only needed if auth is important for this request
        xhr.responseType = "json";
        xhr.addEventListener("load", () => {
            console.log("xhr status", xhr.status);
            console.log("xhr response", xhr.response);
            if (xhr.status === 200 ) {
                this.setState({
                    newsData: xhr.response 
                });
            }
        });
        xhr.send();
    }

    // rener the componentDidMount
    render() {
        return (
            <Home newsData={this.state.newsData} />
        );
    }
}

export default HomePage;