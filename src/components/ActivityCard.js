import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "../styles/ActivityCard.css"

const ActivityCard = (props) => {

  return(
    <>
    <Link className="card-link" to={`/activityshow/${props.activities.id}`} >
    <div className="card">
      <img className="activity-image" src={"https://images.unsplash.com/photo-1682687220067-dced9a881b56?q=80&w=2750&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}  alt={"nature"}/>
      <div className="date-area">
        <div className="activity-date">{props.activities.start_time}
        </div>
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