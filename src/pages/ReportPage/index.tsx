import React from 'react';
import { Col, Row } from 'antd';
import { Table, Chart } from 'components';
import reportPageStyle from './report.module.scss';

import heartLogo from 'assets/icons/heart.svg';
import githubLogo from 'assets/icons/github.svg';

const ReportPage: React.FC = (props: any) => {
    return (
        <Row className={reportPageStyle.page}>
            <Col xs={24} md={16} className={reportPageStyle.gutter}>
                <Table />
            </Col>
            <Col xs={24} md={8} className={reportPageStyle.gutter}>
                <Chart />
            </Col>

            <Row className={reportPageStyle.footer}>
                <div className={reportPageStyle.text}>
                    {new Date().getFullYear()} &copy; Made with
                    <span className={reportPageStyle.footer_icon}>
                        <img src={heartLogo} alt="heart-icon"/>
                    </span>
                    by <a href="https://github.com/fatematzuhora" target="blank">fatematzuhora</a>
                </div>
                <div className={reportPageStyle.text}>
                    <a href="https://github.com/fatematzuhora/react-report.git" target="blank">
                        <span className={reportPageStyle.footer_icon}>
                            <img src={githubLogo} alt="github-icon"/>
                        </span>
                        Proudly Open Source
                    </a>
                </div>
            </Row>
        </Row>
    )
}

export default ReportPage;