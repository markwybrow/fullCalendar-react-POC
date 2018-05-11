import React, { Component } from 'react';

import Calendar from './Calendar';
import External from './External';

export default class CalendarLoader extends Component {
  render() {
    return (
      <div>
        <External />
        <Calendar />
      </div>
    );
  }
}
