import { Card, Col, Row, Statistic } from "antd";
import CountUp from 'react-countup';
import { Helmet } from "react-helmet";

const DashboardPage = () => {
    const formatter = (value: number | string) => {
        return (
            <CountUp end={Number(value)} separator="," />
        );
    };

    return (
        <>
            <Helmet>
                <title>Trang quản trị</title>
                <link rel="shortcut icon" href="faviconAdmin.ico" type="image/x-icon" />
            </Helmet>
            <Row gutter={[20, 20]}>
                <Col span={24} md={8}>
                    <Card title="Company Card" bordered={false} >
                        <Statistic
                            title="Active Users"
                            value={112893}
                            formatter={formatter}
                        />

                    </Card>
                </Col>
                <Col span={24} md={8}>
                    <Card title="User Card" bordered={false} >
                        <Statistic
                            title="Active Users"
                            value={112893}
                            formatter={formatter}
                        />
                    </Card>
                </Col>
                <Col span={24} md={8}>
                    <Card title="Job Card" bordered={false} >
                        <Statistic
                            title="Active Users"
                            value={112893}
                            formatter={formatter}
                        />
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default DashboardPage;