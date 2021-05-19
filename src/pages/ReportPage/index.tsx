import React from 'react';
import { Col, Row } from 'antd';
import { Table, Chart } from 'components';

const ReportPage: React.FC = (props: any) => {
    return (
        <Row>
            <Col xs={24} md={16}>
                <Table />
            </Col>
            <Col xs={24} md={8}>
                <Chart />
            </Col>
        </Row>
    )
}

export default ReportPage;