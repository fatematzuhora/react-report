import { useEffect, useState } from 'react';
import { Card, Col, Row, Statistic } from 'antd';
import { connect } from 'react-redux';
import { unsetPractitioner } from 'store/actions';
import chartStyle from './chart.module.scss';

const Chart = (props: any) => {
    const [revenue, setRevenue] = useState<number>();
    const [cost, setCost] = useState<number>();

    useEffect(() => {
        let revenue: number = 0,
            cost: number = 0;
        
        props.appData.table_data.forEach((el: any) => {
            revenue += el.revenue;
            cost += el.cost;
        });

        setRevenue(revenue);
        setCost(cost);

    }, [props.appData.table_data])

    const renderPractitioner = (id: number) => {
        let data = props.appData.practitioners.find((p: any) => p.id === id);

        return data.name;
    }

    return (
        <Card bordered={false}>
            <Row justify="space-between" align="middle">
                <h3>Summary</h3>
                <p>
                    {(props.appData.date_range.length === 2) ?
                        `${props.appData.date_range[0]} - ${props.appData.date_range[1]}`
                        : ``
                    }
                </p>
            </Row>

            <Row>
                <h4>Practitioner:</h4>
                <span className={chartStyle.name}>
                    {props.appData.practitioner_id ?
                        renderPractitioner(props.appData.practitioner_id) :
                        'All'
                    }
                </span>
            </Row>

            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="Revenue" value={revenue} />
                </Col>
                <Col span={12}>
                    <Statistic title="Cost" value={cost} />
                </Col>
            </Row>

        </Card>
    )
}

// redux state and dispatch
const mapStateToProps = (state: any) => ({
    appData: state.app,
})

const mapDispatchToProps = (dispatch: any) => ({
    unsetAppPractitioner: (status: boolean) => {
      dispatch(unsetPractitioner(status));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Chart);