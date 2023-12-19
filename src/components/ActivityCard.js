import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "../styles/ActivityCard.css"

const ActivityCard = (props) => {
  let activity_date = new Date(props.activities.start_time)
  let formattedMonthString = (activity_date.getMonth()+1);
  let formattedDayString = activity_date.getDate();
  let formattedTimeString = activity_date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12:true});

  function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString('en-US', {
      month: 'short',
    });
  }
  return(
    <>
    <Link className="card-link" to={`/activityshow/${props.activities.id}`} >
    <div className="card">
      <img className="activity-image" src={"https://images.unsplash.com/photo-1523047840906-018758c5ffa1?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}  alt={"nature"}/>
      <div className="date-area">

        <div className="activity-date-month">{getMonthName    (formattedMonthString)}
        </div>
        <div className="activity-date-day">{formattedDayString}</div>
        <div className="activity-date">{formattedTimeString}</div>
      </div>

      <div className="activity-details">
        <div className="activity-title">{props.activities.category}
        </div>
        <div className="activity-subtitle">{props.activities.activity_name}
        </div>
      </div>

      <div className="activity-users">
        <FontAwesomeIcon className="activity-host" icon="fa-solid fa-face-smile" size="2xl" style={{color: "#e7e5da",}}/>
        <FontAwesomeIcon className="activity-attendees" icon="fa-solid fa-user" size="2xl" style={{color: "#e7e5da",}}/>
      </div>
    </div>

    </Link>
  </>

);
}

export default ActivityCard