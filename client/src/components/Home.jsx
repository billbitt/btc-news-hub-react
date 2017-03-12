import React, { PropTypes } from "react";
import { Card, CardTitle, CardText } from "material-ui/Card";
import NewsItem from "./NewsItem.jsx";

const Home = ({ newsData }) => {
    return (
        <Card className="container">
            <Card className="container">
                <CardTitle title="BTC News Hub" subtitle="A place for bitcoin news and discussion." />
            </Card>
            {newsData.map((item, index) => {
                return < NewsItem key={index} title={item.title} link={item.link} />
            })}

        </Card>
    );
}

Home.propTypes = {
    newsData: PropTypes.array.isRequired
};

export default Home;