import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { unsetPractitioner } from 'store/actions';
import chartStyle from './chart.module.scss';

const Chart = (props: any) => {
    return (
        <>Chart</>
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