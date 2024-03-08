import { FacebookOutlined, GooglePlusOutlined, LinkedinOutlined, SendOutlined, TwitterOutlined, WhatsAppOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';


const JobFooter = () => {
    return (
        <footer style={{ background: '#222831', color: '#ffffff', marginTop: 50, padding: "30px 40px 0 40px"}}>
            <Row justify="center" style={{ paddingBottom: "30px" }}>
                <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
                    <h2 style={{ paddingBottom: 10 }}>
                        <span >Job</span>
                        <span style={{ color: "#FF0000" }}>IT</span>
                    </h2>
                    <p>Find your dream job with our advanced search engine.</p>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
                    <h2 style={{ paddingBottom: 10 }}>Contact us at:</h2>
                    <div style={{ display: 'flex', padding: "4px 0" }}>
                        <WhatsAppOutlined style={{ fontSize: '16px', color: '#ffffff', margin: '0 10px 0 0' }} />
                        <p>Ho Chi Minh: (+84) 977 460 519</p>
                    </div>
                    <div style={{ display: 'flex', padding: "4px 0" }}>
                        <WhatsAppOutlined style={{ fontSize: '16px', color: '#ffffff', margin: '0 10px 0 0' }} />
                        <p>Ha Noi: (+84) 983 131 351</p>
                    </div>
                    <div style={{ display: 'flex', padding: "4px 0" }}>
                        <GooglePlusOutlined style={{ fontSize: '16px', color: '#ffffff', margin: '0 10px 0 0' }} />
                        <p>Email: info@jobsearch.com</p>
                    </div>
                    <div style={{ display: 'flex', padding: "4px 0" }}>
                        <SendOutlined style={{ fontSize: '16px', color: '#ffffff', margin: '0 10px 0 0' }} />
                        <p>Submit contact information</p>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
                    <h2 style={{ paddingBottom: 12 }}>Follow Us</h2>
                    <p>Stay connected with us on social media:</p>
                    <div style={{ paddingTop: 10 }}>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FacebookOutlined style={{ fontSize: '24px', color: '#0866FF', margin: '0 10px' }} />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <LinkedinOutlined style={{ fontSize: '24px', color: '#319DFF', margin: '0 10px' }} />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <YoutubeOutlined style={{ fontSize: '24px', color: '#FF0000', margin: '0 10px' }} />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <TwitterOutlined style={{ fontSize: '24px', color: '#319DFF', margin: '0 10px' }} />
                        </a>
                    </div>
                </Col>
            </Row>
            <Row justify="center" style={{ borderTop: "1px solid #FFF" }}>
                <Col >
                    <div style={{ padding: '20px 0 8px 0' }}>
                        <span>Copyright © SONNX</span>
                    </div>
                </Col>
            </Row>
        </footer>
    );
};


export default JobFooter;