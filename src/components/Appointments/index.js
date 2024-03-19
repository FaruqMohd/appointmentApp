import {Component} from 'react'

import {v4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Appointments extends Component {
  state = {
    input: '',
    dates: '',
    appointmentList: [],
  }
  toggleIsStarred = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }
  renderAppointmentList = () => {
    const {appointmentList} = this.state

    return appointmentList.map(eachAppointment => (
      <AppointmentItem
        key={eachAppointment.id}
        appointmentDetails={eachAppointment}
        toggleIsStarred={this.toggleIsStarred}
      />
    ))
  }
  onAddAppointment = event => {
    event.preventDefault()
    const {input, date} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newAppointment = {
      id: v4(),
      name: input,
      dates: date,
      date: new Date(),
      isStarred: false,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      name: '',
      dates: '',
    }))

    onChangeDate = event => {
      this.setState({date: event.target.value})
    }
    onChangeInput = event => {
      this.setState({name: event.target.value})
    }
  }

  render() {
    const {name, date} = this.state

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="main-heading">Add Appointment</h1>
          <form onSubmit={this.onAddAppointment}>
            <label htmlFor="input">Title </label>
            <input
              type="text"
              placeholder="Title"
              value={name}
              onChange={this.onChangeInput}
            />
            <label htmlFor="input">Date</label>
            <input
              type="date"
              placeholder="DATE"
              format="dd/mm/yyyy"
              value={date}
              onChange={this.onChangeDate}
            />
            <button type="submit">Add</button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            alt="appointments"
          />
        </div>
        <div className="container">
          <h1>Appointments</h1>

          <ul className="list">{this.renderAppointmentList()}</ul>
        </div>
      </div>
    )
  }
}
export default Appointments
