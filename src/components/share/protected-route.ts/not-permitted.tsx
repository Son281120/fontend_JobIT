import { Button, Result } from 'antd';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const NotPermitted = () => {
    const navigate = useNavigate();
    return (
        <>
            <Helmet>
                <title>Lỗi 403</title>
            </Helmet>
            <Result
                status="403"
                title="403"
                subTitle="Xin lỗi, bạn không được phép truy cập trang này."
                extra={<Button type="primary"
                    onClick={() => navigate('/')}
                >Trang chủ</Button>}
            />
        </>
    )
};

export default NotPermitted;