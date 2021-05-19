import { useEffect, useState } from 'react';
import { Card, DatePicker, Row, Select, Table } from 'antd';
import { connect } from 'react-redux';
import { unsetPractitioner } from 'store/actions';
import tableStyle from './table.module.scss';

const BaseTable = (props: any) => {
    const [tableData, setTableData] = useState<any[]>([]);
    const [selectedPractitioner, setSelectedPractitioner] = useState<number | undefined>(undefined);
    const practitionerList = props.appData.practitioners;

    useEffect(() => {
        if (selectedPractitioner) {
            const data = props.appData.appointments.filter((a: any) => {
                if (a.practitioner_id === selectedPractitioner) {
                    return a;
                }
            });
            setTableData(data);

        } else {
            setTableData(props.appData.appointments);
        }

    }, [selectedPractitioner])


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
        setSelectedPractitioner(id);
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
                    <DatePicker.RangePicker className={tableStyle.tableInputs} />
                    
                    <div className={tableStyle.search}>
                        <Select
                            showSearch
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
                        {selectedPractitioner ?
                            <span className={tableStyle.search_filter}
                                onClick={() => {
                                    setTableData(props.appData.appointments);
                                    setSelectedPractitioner(undefined);
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
                dataSource={tableData}
                pagination={{
                    defaultPageSize: 5,
                    showSizeChanger: true,
                }}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(BaseTable);