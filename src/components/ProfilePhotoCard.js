import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "../styles/ProfilePhotoCard.css"

const ProfilePhotoCard = (props) => {

  return(
    <>

    <div className="profile-card">
      <img className="profile-image" src={"https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}  alt={"nature"}/>

      <div className="profile-settings">
        <FontAwesomeIcon className="activity-host" icon="fa-solid fa-face-smile" size="2xl" style={{color: "#ea5353",}}/>
      </div>
    </div>

  </>

);
}

export default ProfilePhotoCard