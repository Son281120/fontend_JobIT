import { Divider } from 'antd';
import styles from 'styles/client.module.scss';
import SearchClient from '@/components/client/search.client';
import JobCard from '@/components/client/card/job.card';
import CompanyCard from '@/components/client/card/company.card';
import CarouselCard from '@/components/client/card/carousel.card';
import { Helmet } from 'react-helmet';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Welcome JobIT</title>
            </Helmet>
    
                <div className={`${styles["container"]} ${styles["home-section"]}`}>
                    {/* <div className="search-content" style={{ marginTop: 20 }}>
                        <SearchClient />
                    </div> */}
                    <CarouselCard />
                    <Divider />
                    <CompanyCard />
                    <div style={{ margin: 50 }}></div>
                    <Divider />
                    <JobCard />
                </div>
        </>
    )
}

export default HomePage;