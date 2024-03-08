import { Button, Col, Form, Row, Select } from 'antd';
import { EnvironmentOutlined, MonitorOutlined } from '@ant-design/icons';
import { LOCATION_LIST, SKILLS_LIST } from '@/config/utils';
import { ProForm } from '@ant-design/pro-components';
import { Dispatch, SetStateAction } from 'react';

interface SearchFilters {
    skills?: string[];
    location?: string[];
}
interface IProps {
    setFilters: Dispatch<SetStateAction<SearchFilters | undefined>>;
}

const SearchClient = (props: IProps) => {
    const optionsSkills = SKILLS_LIST;
    const optionsLocations = LOCATION_LIST;
    const [form] = Form.useForm();
    const { setFilters } = props

    const onFinish = async (values: any) => {
        setFilters(values);
    }

    const handleReset = () => {
        form?.resetFields();
        setFilters({});
    }

    return (
        <ProForm
            form={form}
            onFinish={onFinish}
            submitter={
                {
                    render: () => <></>
                }
            }
        >
            <Row gutter={[20, 20]}>
                <Col span={24}><h2>Việc Làm IT Cho Developer "Chất"</h2></Col>
                <Col span={24} md={12}>
                    <ProForm.Item
                        name="skills"
                    >
                        <Select
                            mode="multiple"
                            allowClear
                            showArrow={false}
                            style={{ width: '100%' }}
                            placeholder={
                                <>
                                    <MonitorOutlined /> Tìm theo kỹ năng...
                                </>
                            }
                            optionLabelProp="label"
                            options={optionsSkills}
                        />
                    </ProForm.Item>
                </Col>
                <Col span={12} md={4}>
                    <ProForm.Item name="location">
                        <Select
                            mode="multiple"
                            allowClear
                            showArrow={false}
                            style={{ width: '100%' }}
                            placeholder={
                                <>
                                    <EnvironmentOutlined /> Địa điểm...
                                </>
                            }
                            optionLabelProp="label"
                            options={optionsLocations}
                        />
                    </ProForm.Item>
                </Col>
                <Col span={12} md={4} style={{display: "flex", justifyContent: "space-evenly"}}>
                    <Button type='primary' onClick={() => form.submit()}>Tìm kiếm</Button>
                    <Button type='default' onClick={() => handleReset()}>Làm lại</Button>
                </Col>
            </Row>
        </ProForm>
    )
}
export default SearchClient;