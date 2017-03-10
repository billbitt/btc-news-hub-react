import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from "material-ui/Card";

const NewsItem = (props) => {
    {console.log("inside NewsItem")}
    {console.log(this.props)}
	{console.log("inside NewsItem again")}
    
    return (
        <Card className="container">
            <CardText>Title: {this.props.title}</CardText>
            <CardText>Link: {this.props.link}</CardText>

        </Card>
    )
}

NewsItem.propTypes = {
	title: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};

export default NewsItem;
