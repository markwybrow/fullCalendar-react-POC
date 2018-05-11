import React, { Component } from 'react';

import $ from 'jquery';
import {draggable} from 'jquery-ui';

export default class External extends Component {
  render() {
    return (
      <div id="external-events">
        <h4>Draggable Events</h4>
        <div className="fc-event">My Event 1</div>
        <div className="fc-event">My Event 2</div>
        <div className="fc-event">My Event 3</div>
        <div className="fc-event">My Event 4</div>
        <div className="fc-event">My Event 5</div>
        <p>
          <input type="checkbox" id="drop-remove" />
          <label htmlFor="drop-remove">remove after drop</label>
        </p>
      </div>
    );
  }
  componentDidMount() {
    let fcEvents = document.getElementsByClassName('fc-event');
    let el = [...fcEvents];
    console.log('--------------', el);
    el.forEach(function(_event) {
      console.log('--------------', _event);
      try {
        let _data = {
          title: _event.textContent, // use the element's text as the event title
          stick: true // maintain when user navigates (see docs on the renderEvent method)
        };

        $(_event).data(_data);
        console.error('_event : ', _event);
      } catch (e) {
        console.error('error: ', e);
      }

      try {
        $(_event).draggable();
      } catch (error) {
        console.error('error: ', error);
      }
    });
    //     _event.draggable({
    //       zIndex: 999,
    //       revert: true,
    //       revertDuration: 0
    //     });
    //   } catch (e) {
    //     console.log(e);
    //   }
    //  });
    /*
    $('#external-events .fc-event').each(function(e) {
      // store data so the calendar knows to render an event upon drop
      $(e).data('event', {
        title: $.trim($(this).text()), // use the element's text as the event title
        stick: true // maintain when user navigates (see docs on the renderEvent method)
      });
      console.log('$q: ', e)
    });
*/
    //   // make the event draggable using jQuery UI
    //   // $(e).draggable({
    //   //   zIndex: 999,
    //   //   revert: true, // will cause the event to go back to its
    //   //   revertDuration: 0 //  original position after the drag
    //   // });
    // });
  }
}
