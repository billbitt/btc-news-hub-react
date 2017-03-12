import React, { PropTypes } from 'react';
import { Link } from "react-router";
import { Card, CardTitle, CardText } from "material-ui/Card";

const NewsItem = (props) => {
    {console.log("inside NewsItem")}
    {console.log(props)}
	{console.log("inside NewsItem again")}
    
    return (
        <Card className="container">
            <CardText>Title: {props.title}</CardText>
            <CardText>Link: {props.link}</CardText>
            <Link to="">Points: </Link>
            <Link to="">Comments</Link>
            <Link to="">Topic Tags</Link>
        </Card>
    )
}

NewsItem.propTypes = { 
	title: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};

export default NewsItem;
