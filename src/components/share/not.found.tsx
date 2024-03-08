import { useNavigate } from "react-router-dom";
import { Button, Result } from 'antd';
import { Helmet } from "react-helmet";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <>
            <Helmet>
                <title>
                    Not Found
                </title>
                <link rel="shortcut icon" href="faviconNot.ico" type="image/x-icon" />
            </Helmet>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary"
                    onClick={() => navigate('/')}
                >Back Home</Button>}
            />
        </>
    )
}

export default NotFound;