import React from 'react';
import MonitoringComponent from './MonitoringComponent';

const Dashboard = (props) => {
  return (
    <div id='dashboard'>
      <MonitoringComponent />
      <MonitoringComponent />
      <MonitoringComponent />
      <MonitoringComponent />
    </div>
  );
};

export default Dashboard;
