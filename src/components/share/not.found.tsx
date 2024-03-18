import { useNavigate } from "react-router-dom";
import { Button, Result } from 'antd';
import { Helmet } from "react-helmet";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <>
            <Helmet>
                <title>
                    Lỗi 404
                </title>
            </Helmet>
            <Result
                status="404"
                title="404"
                subTitle="Xin lỗi, trang bạn truy cập không tồn tại."
                extra={<Button type="primary"
                    onClick={() => navigate('/')}
                >Trang chủ</Button>}
            />
        </>
    )
}

export default NotFound;