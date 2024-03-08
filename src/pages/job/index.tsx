import SearchClient from '@/components/client/search.client';
import { Col, Divider, Row } from 'antd';
import styles from 'styles/client.module.scss';
import JobCard from '@/components/client/card/job.card';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
interface SearchFilters {
    skills?: string[];
    location?: string[];
}

const ClientJobPage = (props: any) => {
    const [filters, setFilters] = useState<SearchFilters>();

    return (
        <>
            <Helmet>
                <title>Việc làm mới nhất</title>
                <link rel="shortcut icon" href="faviconJob.ico" type="image/x-icon" />
            </Helmet>

            <div className={styles["container"]} style={{ marginTop: 20 }}>
                <Row gutter={[20, 20]}>
                    <Col span={24}>
                        <SearchClient setFilters={setFilters} />
                    </Col>
                    <Divider />

                    <Col span={24}>
                        <JobCard
                            showPagination={true}
                            filters={filters}
                        />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ClientJobPage;