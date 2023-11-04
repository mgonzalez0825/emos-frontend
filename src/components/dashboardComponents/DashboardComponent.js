import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import multimonthPlugin from '@fullcalendar/multimonth';
import SchedulerService from '../../services/schedulerService';
import { withRouter } from '../withRouter/withRouter';
import AddEventComponent from './AddEventComponentDash';
import interactionPlugin from '@fullcalendar/interaction';

class DashboardComponentDash extends Component {

  constructor(props) {
    super(props);

    this.state = {
      events: [],
      isAddEventFormOpen: false,
      selectedDate: null,
      weekendsVisible: true
    };

    this.handleDateSelect = this.handleDateSelect.bind(this);
    this.closeAddEventForm = this.closeAddEventForm.bind(this);
    this.handleDateClick = this.handleDateClick.bind(this);
  }

  handleDateSelect(info) {
    this.setState({
      selectedDate: info.start,
      isAddEventFormOpen: true
    });
  }

  closeAddEventForm() {
    this.setState({
      isAddEventFormOpen: false
    }, () => {
      this.props.navigate('/admin/dashboard');
    });
  }

  handleDateClick(info) {
    this.props.navigate('/admin/dashboard/add-event');
    this.setState({
      selectedDate: info.date,
      isAddEventFormOpen: true
    });
  }

  componentDidMount() {
    
    const schedulerService = new SchedulerService();
    schedulerService.getAllEvents()
      .then(response => {
       
        const events = response.data.map(event => ({
          id: event.eventId,
          title: event.eventEmployee + ' - ' + event.eventJob,
          start: event.eventStartDate, 
          end: event.eventEndDate 
         
        }));

        this.setState({ events });
      })
      .catch(error => {
        // TO DO
      });
  }

  render() {
    return (
      <div className= "calendar">
        <FullCalendar
          plugins={[dayGridPlugin, multimonthPlugin, interactionPlugin]}
          initialView="dayGridWeek"
          events={this.state.events}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridWeek,multiMonthYear"
          }}
          selectable={true}
          select={this.handleDateSelect}
          dateClick={this.handleDateClick}
          onSelect={date => {
            this.setState({ selectedDate: date });
          }}
        />
        {this.state.isAddEventFormOpen && (
          <AddEventComponent
            date={this.state.selectedDate}
            closeForm={this.closeForm}
          />
        )}
      </div>
    );
}
};


export default withRouter(DashboardComponentDash);