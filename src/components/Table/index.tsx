import { useEffect, useState } from 'react';
import { Card, DatePicker, Row, Select, Table } from 'antd';
import { connect } from 'react-redux';
import { setDateRange, unsetDateRange, setPractitioner, unsetPractitioner } from 'store/actions';
import tableStyle from './table.module.scss';

const BaseTable = (props: any) => {
    const [dates, setDates] = useState<any[]>([]);
    const practitionerList = props.appData.practitioners;
    
    useEffect(() => {
        if (dates) {
            if (dates[0] && dates[1]) {
                props.setAppDateRange(dates);
            }
        } else {
            props.unsetAppDateRange(true);
        }
    }, [dates])

    const practitionerSelectOptions = practitionerList.map((practitioner: {
        id: number,
        name: string
    }) => {
        return (
            <Select.Option key={practitioner.id} value={practitioner.id}>
                {practitioner.name}
            </Select.Option>
        )
    })

    const handleSelectPractitioner = async(id: number) => {
        props.setAppPractitioner(id);
    }

    const renderPractitioner = (id: number) => {
        let data = practitionerList.find((p: any) => p.id === id);

        return data.name;
    }

    const columns = [
        {
            title: 'Practitioner',
            dataIndex: 'practitioner_id',
            render: (record: number) => renderPractitioner(record),
        },
        {
            title: 'Date',
            dataIndex: 'date'
        },
        {
            title: 'Appointment Type',
            dataIndex: 'appointment_type'
        },
        {
            title: 'Client Name',
            dataIndex: 'client_name'
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
        },
        {
            title: 'Revenue',
            dataIndex: 'revenue'
        },
        {
            title: 'Cost',
            dataIndex: 'cost'
        }
    ]
    
    return (
        <Card bordered={false}>
            <Row justify="space-between" align="middle">
                <h3>Appointments</h3>

                <Row className={tableStyle.inputContainer}>
                    <DatePicker.RangePicker
                        className={tableStyle.tableInputs}
                        onCalendarChange={(val: any) => setDates(val)}
                    />
                    
                    <div className={tableStyle.search}>
                        <Select
                            showSearch
                            allowClear
                            className={tableStyle.tableInputs}
                            placeholder="Search Practitioner..."
                            optionFilterProp="children"
                            onChange={(e: any) => handleSelectPractitioner(e)}
                            filterOption={(input: any, option: any) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {practitionerSelectOptions}
                        </Select>
                        {props.appData.practitioner_id ?
                            <span className={tableStyle.search_filter}
                                onClick={() => {
                                    props.unsetAppPractitioner(true);
                                }}
                            >
                                clear
                            </span>
                            :
                            ''
                        }
                    </div>
                </Row>
            </Row>

            <Table
                columns={columns}
                rowKey={(record: any) => record.id}
                dataSource={props.appData.table_data}
                pagination={{
                    defaultPageSize: 5,
                    showSizeChanger: true,
                }}
                className={tableStyle.table}
            />
        </Card>
    )
}

// redux state and dispatch
const mapStateToProps = (state: any) => ({
    appData: state.app,
})

const mapDispatchToProps = (dispatch: any) => ({
    setAppDateRange: (dates: []) => {
        dispatch(setDateRange(dates));
    },
    unsetAppDateRange: (status: boolean) => {
        dispatch(unsetDateRange(status));
    },
    setAppPractitioner: (practitioner_id: number) => {
        dispatch(setPractitioner(practitioner_id));
    },
    unsetAppPractitioner: (status: boolean) => {
      dispatch(unsetPractitioner(status));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(BaseTable);