import React, { Component } from "react";
import { companyInfo, employees } from "../sample-data";

import CalendarApp from './fullcalendar/Fullcalendar-wrapper';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      companyInfo,
      employees
    };
   
  }

  render() {
    return (
      <div className="App">
        <h1>FullCalendar App POC</h1>

        <CalendarApp />
      </div>

    );
  }
}

