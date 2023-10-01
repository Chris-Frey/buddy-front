import { Routes, Route, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header/Header'
import Home from "./pages/Home";
import BuddyProfile from "./pages/UserProfile";
import LogIn from "./pages/LogIn";
import ActivityShow from "./pages/ActivityShow";
import SignUp from "./pages/SignUp";
import ActivityEdit from "./pages/ActivityEdit";
import ActivityFilter from "./pages/ActivityFilter";
import AboutUs from "./pages/AboutUs";
import Error from "./pages/Error";
import ProtectedRoutes from "./components/ProtectedRoutes";


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [activities, setActivities] = useState([])
  const [userActivity, setUserActivity] = useState([])
  // const url = "http://localhost:3000"
const url = "https://whim.onrender.com"
  const navigate = useNavigate()

useEffect(() => {
  readActivity()
}, [])

useEffect(() => {
  const loggedInUser = localStorage.getItem("token")
  if (loggedInUser) {
    setCurrentUser(loggedInUser)
  }
  readActivity()
}, [])

// user_activities
  useEffect(() => {
    readUserActivity();
  }, [])

  const readUserActivity = () => {
    fetch(`${url}/user_activities/`)
    .then((response) => response.json())
    .then((payload) => {
      setUserActivity(payload)
    })
    .catch((error) => console.log(error))
  }


  const createUserActivity = (activity) => {
  fetch(`${url}/user_activities`, {
    body: JSON.stringify(activity),
    headers: {"Content-Type": "application/json"},
    method: "POST"
  })
    .then((response) => response.json())
    .then((payload) => readUserActivity())
    .catch((errors) => console.log("Activity create errors:", errors))
  }

// authentication methods
const login = (userInfo) => {
  fetch(`${url}/login`, {
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    method: "POST"
  })
  .then(response => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
// store the token
    localStorage.setItem("token", response.headers.get("Authorization"))
    return response.json()
  })
  .then(payload => {
    setCurrentUser(payload)
  })
  .then(() => navigate("/"))
  .catch(error => console.log("login errors: ", error))
}

const signup = (userInfo) => {
  fetch(`${url}/signup`, {
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    method: "POST"
  })
  .then(response => {
      if (!response.ok) {
      throw Error(response.statusText)
    }
    // store the token
  localStorage.setItem("token", response.headers.get("Authorization"))
  return response.json()
  })
  .then(payload => {
    setCurrentUser(payload)
  })
  .then(() => logout())
  .then(() => navigate("/login"))
  .catch(error => console.log("login errors: ", error))
}

const logout = () => {
  fetch(`${url}/logout`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("token") //retrieve the token
    },
    method: "DELETE"
  })
  .then(payload => {
    localStorage.removeItem("token")  // remove the token
    setCurrentUser(null)
  })
  .catch(error => console.log("log out errors: ", error))
}

//CRUD fetch requests
const readActivity = () => {
  fetch(`${url}/activities`)
    .then((response) => response.json())
    .then((payload) => {
      setActivities(payload)
    })
    .catch((error) => console.log(error))
}

const createActivity = (activity) => {
  fetch(`${url}/activities`, {
    body: JSON.stringify(activity),
    headers: {"Content-Type": "application/json"},
    method: "POST"
  })
    .then((response) => response.json())
    .then((payload) => readActivity())
    .catch((errors) => console.log("Activity create errors:", errors))
}

const updateActivity = (activity, id) => {
  fetch(`${url}/activities/${id}/`, {
    body: JSON.stringify(activity),
    headers: {"Content-Type": "application/json"},
    method: "PATCH"
  })
    .then((response) => response.json())
    .then((payload) => readActivity())
    .catch((errors) => console.log("Activity update errors:", errors))
}

const deleteActivity = (id) => {
  fetch(`${url}/activities/${id}`, {
    headers: {"Content-Type": "application/json"},
    method: "DELETE"
  })
    .then((response) => response.json())
    .then((payload) => readActivity())
    .catch((errors) => console.log("delete errors:", errors))
}

  return (
      <>
      {currentUser && (
      <Header currentUser={currentUser} logout={logout}/>
      )}
      <Routes>
        <Route path="/signup" element={<SignUp signup={signup} currentUser={currentUser} logout={logout}/>} />
        <Route path="/login" element={<LogIn login={login}/>} />
        <Route path="/aboutus" element={<AboutUs />} />

{/* Protected routes */}
        <Route element={<ProtectedRoutes currentUser={currentUser}/>} >
          <Route path="/" element={<Home activities={activities} currentUser={currentUser} createActivity={createActivity} exact/>}/>
          <Route path="/display/:category?" element={<ActivityFilter activities={activities}/>} />
          <Route path="/buddyprofile/:id" element={<BuddyProfile currentUser={currentUser} userActivity={userActivity} activities={activities}/>} />
          <Route path="/activityshow/:id" element={<ActivityShow activities={activities} currentUser={currentUser} updateActivity={updateActivity} deleteActivity={deleteActivity} createUserActivity={createUserActivity}/>} />
          <Route path="/activityedit/:id" element={<ActivityEdit activities={activities} updateActivity={updateActivity}/>} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      </>
  );
}

export default App;
