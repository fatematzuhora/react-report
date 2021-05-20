import React, { useMemo } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ReportPage } from 'pages';
import { connect } from 'react-redux';
import { storeData, unsetDateRange, unsetPractitioner } from 'store/actions';

import { appointments } from 'data/appointments.json';
import { practitioners } from 'data/practitioners.json';

const App: React.FC = (props: any) => {

  useMemo(() => {

    if ( (props.appData.appointments.length > 0) && (props.appData.practitioners.length > 0) ) {
      props.unsetAppPractitioner(true);
      props.unsetAppDateRange(true);
    } else {
      props.storeAppData(appointments, practitioners);
    }

  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/report" exact={true} render={props => <ReportPage />}  />
        
        <Redirect from="/" to="/report" />
      </Switch>
    </BrowserRouter>
  )
}

// redux state and dispatch
const mapStateToProps = (state: any) => ({
  appData: state.app,
})

const mapDispatchToProps = (dispatch: any) => ({
  storeAppData: (appointments: any[], practitioners: any[]) => {
    dispatch(storeData(appointments, practitioners));
  },
  unsetAppDateRange: (status: boolean) => {
    dispatch(unsetDateRange(status));
  },
  unsetAppPractitioner: (status: boolean) => {
    dispatch(unsetPractitioner(status));
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
