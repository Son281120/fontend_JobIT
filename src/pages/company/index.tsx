import { Col, Row } from 'antd';
import styles from 'styles/client.module.scss';
import CompanyCard from '@/components/client/card/company.card';
import CarouselCard from '@/components/client/card/carousel.card';
import { Helmet } from 'react-helmet';

const ClientCompanyPage = (props: any) => {
    return (
        <>
            <Helmet>
                <title>Công ty tuyển dụng</title>
                <link rel="shortcut icon" href="faviconCompany.ico" type="image/x-icon" />
            </Helmet>
            <div className={styles["container"]} style={{ marginTop: 20 }}>
                <CarouselCard />
                <Row gutter={[20, 20]}>
                    <Col span={24}>
                        <CompanyCard
                            showPagination={true}
                        />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ClientCompanyPage;