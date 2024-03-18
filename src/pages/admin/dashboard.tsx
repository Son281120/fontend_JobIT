import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchCompany } from "@/redux/slice/companySlide";
import { fetchJob } from "@/redux/slice/jobSlide";
import { fetchUser } from "@/redux/slice/userSlide";
import { Card, Col, Row, Statistic } from "antd";
import { useEffect } from "react";
import CountUp from 'react-countup';
import { Helmet } from "react-helmet";

const DashboardPage = () => {
    const dispatch = useAppDispatch();
    
    useEffect(() => {
    const query = "current=1&pageSize=10";
        dispatch(fetchUser({query}))
        dispatch(fetchCompany({query}))
        dispatch(fetchJob({query}))

    }, [])
    

    const formatter = (value: number | string) => {
        return (
            <CountUp end={Number(value)} separator="," />
        );
    };

    return (
        <>
            <Helmet>
                <title>Trang quản trị</title>
            </Helmet>
            <Row gutter={[20, 20]}>
                <Col span={24} md={8}>
                    <Card title="Company Card" bordered={false} >
                        <Statistic
                            title="Active Companies"
                            value={useAppSelector(state => state.company.meta.total)}
                            formatter={formatter}
                        />

                    </Card>
                </Col>
                <Col span={24} md={8}>
                    <Card title="User Card" bordered={false} >
                        <Statistic
                            title="Active Users"
                            value={useAppSelector(state => state.user.meta.total)}
                            formatter={formatter}
                        />
                    </Card>
                </Col>
                <Col span={24} md={8}>
                    <Card title="Job Card" bordered={false} >
                        <Statistic
                            title="Active Jobs"
                            value={useAppSelector(state => state.job.meta.total)}
                            formatter={formatter}
                        />
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default DashboardPage;