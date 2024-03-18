import { Button, Col, Form, Input, Modal, Row, Select, Table, Tabs, message, notification } from "antd";
import { isMobile } from "react-device-detect";
import type { TabsProps } from 'antd';
import { IResume } from "@/types/backend";
import { useState, useEffect } from 'react';
import { callCreateSubscriber, callFetchInfoUser, callFetchResumeByUser, callGetSubscriberSkills, callUpdateInfoUser, callUpdatePassword, callUpdateSubscriber } from "@/config/api";
import type { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';
import { MonitorOutlined } from "@ant-design/icons";
import { SKILLS_LIST } from "@/config/utils";
import { useAppSelector } from "@/redux/hooks";

interface IProps {
    open: boolean;
    onClose: (v: boolean) => void;
}

type UpdateUser = {
    name: string;
    email: string;
    password: string;
    age: number;
    gender: string;
    address: string;

}

const UserResume = (props: any) => {
    const [listCV, setListCV] = useState<IResume[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(false);

    useEffect(() => {
        const init = async () => {
            setIsFetching(true);
            const res = await callFetchResumeByUser();
            if (res && res.data) {
                setListCV(res.data as IResume[])
            }
            setIsFetching(false);
        }
        init();
    }, [])

    const columns: ColumnsType<IResume> = [
        {
            title: 'STT',
            key: 'index',
            width: 50,
            align: "center",
            render: (text, record, index) => {
                return (
                    <>
                        {(index + 1)}
                    </>)
            }
        },
        {
            title: 'Công Ty',
            dataIndex: ["companyId", "name"],

        },
        {
            title: 'Vị trí',
            dataIndex: ["jobId", "name"],

        },
        {
            title: 'Trạng thái',
            dataIndex: "status",
        },
        {
            title: 'Ngày rải CV',
            dataIndex: "createdAt",
            render(value, record, index) {
                return (
                    <>{dayjs(record.createdAt).format('DD-MM-YYYY HH:mm:ss')}</>
                )
            },
        },
        {
            title: '',
            dataIndex: "",
            render(value, record, index) {
                return (
                    <a
                        href={`${import.meta.env.VITE_BACKEND_URL}/images/resume/${record?.url}`}
                        target="_blank"
                    >Chi tiết</a>
                )
            },
        },
    ];

    return (
        <div>
            <Table<IResume>
                columns={columns}
                dataSource={listCV}
                loading={isFetching}
                pagination={false}
            />
        </div>
    )
}

const ChangePassword = () => {
    const [form] = Form.useForm();
    const id = useAppSelector(state => state.account.user._id);

    const onFinish = async (values: { password: string, newPassword: string }) => {

        const res = await callUpdatePassword(id, values);
        if (res.data) {
            message.success("Cập nhật thông tin thành công");
        } else {
            notification.error({
                message: 'Có lỗi xảy ra',
                description: res.message
            });
        }
    };

    return (
        <Form
            form={form}
            name="change-password"
            onFinish={onFinish}
            layout="vertical"
        >
            <Row gutter={16}>
                <Col lg={8} md={8} sm={24} xs={24}>
                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[{ required: true, message: 'Vui lòng nhập Password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
                <Col lg={8} md={8} sm={24} xs={24}>
                    <Form.Item
                        label="Mật khẩu mới"
                        name="newPassword"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu mới',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
                <Col lg={8} md={8} sm={24} xs={24}>
                    <Form.Item
                        label="Nhập lại mật khẩu"
                        name="confirmPassword"
                        dependencies={['newPassword']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập lại mật khẩu mới',
                            }, ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('newPassword') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Nhập lại sai mật khẩu mới!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Button type="primary" onClick={() => form.submit()}>Cập nhật</Button>
                </Col>
            </Row>
        </Form>
    )
}

const UserUpdateInfo = (props: any) => {
    const [form] = Form.useForm();
    const id = useAppSelector(state => state.account.user._id);
    useEffect(() => {
        const init = async () => {
            const res = await callFetchInfoUser(id);
            if (res && res.data) {
                form.setFieldsValue({
                    email: res.data.email,
                    name: res.data.name,
                    age: res.data.age,
                    gender: res.data.gender,
                    address: res.data.address,
                });
            }
        }
        init();
    }, [form])

    const onFinish = async (updateUser: UpdateUser) => {
        const { email, password, name, age, gender, address } = updateUser;

        const res = await callUpdateInfoUser(id, { email, password, name, age: +age, gender, address });
        if (res.data) {
            message.success("Cập nhật thông tin thành công");
        } else {
            notification.error({
                message: 'Có lỗi xảy ra',
                description: res.message
            });
        }
    };

    return (
        <Form
            form={form}
            onFinish={onFinish}
        >
            <Row gutter={16}>
                <Col lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Vui lòng không bỏ trống' },
                            { type: 'email', message: 'Vui lòng nhập email hợp lệ' }
                        ]}
                    >
                        <Input type="email" placeholder="Nhập email" disabled />
                    </Form.Item>
                </Col>
                <Col lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Vui lòng nhập Password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
                <Col lg={6} md={6} sm={24} xs={24}>
                    <Form.Item
                        label="Tên"
                        name="name"
                        rules={[{ required: true, message: 'Vui lòng nhập Tên!' }]}
                    >
                        <Input type="text" placeholder="Nhập tên hiển thị" />
                    </Form.Item>
                </Col>
                <Col lg={6} md={6} sm={24} xs={24}>
                    <Form.Item
                        label="Tuổi"
                        name="age"
                        rules={[{ required: true, message: 'Vui lòng nhập tuổi!' }]}
                    >
                        <Input type="number" placeholder="Nhập tuổi" />
                    </Form.Item>
                </Col>
                <Col lg={6} md={6} sm={24} xs={24}>
                    <Form.Item
                        label="Giới tính"
                        name="gender"
                        rules={[{ required: true, message: 'Vui lòng chọn Giới tính!' }]}
                    >
                        <Select placeholder="Nhập giới tính">
                            <Select.Option value="MALE">Nam</Select.Option>
                            <Select.Option value="FEMALE">Nữ</Select.Option>
                            <Select.Option value="ORTHER">Khác</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col lg={6} md={6} sm={24} xs={24}>
                    <Form.Item label="Địa chỉ" name="address" rules={[{ required: true, message: 'Vui lòng nhập Địa chỉ!' }]}>
                        <Input type="text" placeholder="Nhập địa chỉ" />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Button type="primary" onClick={() => form.submit()}>Cập nhật</Button>
                </Col>
            </Row>
        </Form>
    )
}

const JobByEmail = (props: any) => {
    const [form] = Form.useForm();
    const user = useAppSelector(state => state.account.user);

    useEffect(() => {
        const init = async () => {
            const res = await callGetSubscriberSkills();
            if (res && res.data) {
                form.setFieldsValue({
                    skills: res.data?.skills,
                    gmail: res.data?.gmail
                });
            }
        }
        init();
    }, [])

    const onFinish = async (values: any) => {
        const { skills, gmail } = values;
        const res = await callUpdateSubscriber({
            email: user.email,
            name: user.name,
            skills: skills ? skills : [],
            gmail: gmail
        });
        if (res.data) {
            message.success("Cập nhật thông tin thành công");
        } else {
            notification.error({
                message: 'Có lỗi xảy ra',
                description: res.message
            });
        }
    }

    return (
        <>
            <Form
                onFinish={onFinish}
                form={form}
            >
                <Row gutter={[20, 20]}>
                    <Col span={24}>
                        <Form.Item
                            label={"Kỹ năng"}
                            name={"skills"}
                            rules={[{ required: true, message: 'Vui lòng chọn ít nhất 1 skill!' }]}

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
                                options={SKILLS_LIST}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            label={"Tài khoản gmail"}
                            name={"gmail"}
                            rules={[{ required: true, message: 'Vui lòng nhập gmail!', type: "email" }]}
                        >
                            <Input type="email" placeholder="Nhập gmail!" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Button
                            type="primary"
                            onClick={() => form.submit()}
                        >
                            Cập nhật
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

const ManageAccount = (props: IProps) => {
    const { open, onClose } = props;

    const onChange = (key: string) => {
        // console.log(key);
    };

    const items: TabsProps['items'] = [
        {
            key: 'user-resume',
            label: `Rải CV`,
            children: <UserResume />,
        },
        {
            key: 'email-by-skills',
            label: `Nhận Jobs qua Email`,
            children: <JobByEmail />,
        },
        {
            key: 'user-update-info',
            label: `Cập nhật thông tin`,
            children: <UserUpdateInfo />,
        },
        {
            key: 'user-password',
            label: `Thay đổi mật khẩu`,
            children: <ChangePassword />,
        },
    ];


    return (
        <>
            <Modal
                title="Quản lý tài khoản"
                open={open}
                onCancel={() => onClose(false)}
                maskClosable={false}
                footer={null}
                destroyOnClose={true}
                width={isMobile ? "100%" : "1000px"}
            >

                <div style={{ minHeight: 400 }}>
                    <Tabs
                        defaultActiveKey="user-resume"
                        items={items}
                        onChange={onChange}
                    />
                </div>

            </Modal>
        </>
    )
}

export default ManageAccount;