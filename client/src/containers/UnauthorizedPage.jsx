import React from "react";
import { Card, CardTitle, CardText } from "material-ui/Card";

const UnauthorizedPage = () => {
    return (
        <Card className="container">
            <CardTitle title="Unauthorized Access" subtitle="Unfortunately, you are not authorized to see this page." />
            <CardText> If you think you have reached this page in error, please reach out to our <a href="">Support</a></CardText>
        </Card>
    )
};

export default UnauthorizedPage;