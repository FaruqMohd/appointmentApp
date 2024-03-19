import './index.css'

import {format} from 'date-fns'

const AppointmentItem = props => {
  const {appointmentDetails} = props
  const {id, name, date, isStarred, initialClassName} = appointmentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const starred = isStarred ? 'button active' : 'button'
  const starredImageURl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const postedTime = format(date)

  const onClickStar = () => {
    const {toggleIsStarred} = props
    toggleIsStarred(id)
  }
  return (
    <li>
      <div className={initialClassName}>
        <p className="initial">{initial}</p>
      </div>
      <div className="container">
        <p className="name">{name}</p>
        <p className="date">{postedTime}</p>
      </div>
      <div>
        <img src={starredImageURl} alt="star" />
        <button
          className={starred}
          data-testid="star"
          type="button"
          onClick={onClickStar}
        >
          Starred
        </button>
      </div>
    </li>
  )
}

export default AppointmentItem
