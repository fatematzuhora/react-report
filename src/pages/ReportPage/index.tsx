import React from 'react';
import { Col, Row } from 'antd';
import { Table, Chart } from 'components';
import reportPageStyle from './report.module.scss';

const ReportPage: React.FC = (props: any) => {
    return (
        <Row className={reportPageStyle.page}>
            <Col xs={24} md={16} className={reportPageStyle.gutter}>
                <Table />
            </Col>
            <Col xs={24} md={8} className={reportPageStyle.gutter}>
                <Chart />
            </Col>
        </Row>
    )
}

export default ReportPage;