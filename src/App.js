import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header'
import { MobileNavBar } from "./components/MobileNavBar";
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
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faSquarePlus, faHouse, faPeace, faFaceSmile, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


function App() {
  library.add(faUser, faPeace, faSquarePlus, faHouse, faFaceSmile, faGithub, faLinkedin, faEnvelope);

  const [currentUser, setCurrentUser] = useState(null)
  const [activities, setActivities] = useState([])
  const [userActivity, setUserActivity] = useState([])
  const navigate = useNavigate()
  const url = "http://localhost:3000"
// const url = "https://whim.onrender.com"


  // useEffect(() => {
  //   readActivity()
  // }, [])


  useEffect(() => {
    const loggedInToken = localStorage.getItem("token")
    if (loggedInToken) {
      setCurrentUser(loggedInToken)
    }
    readActivity()
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

  // login authentication
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

  // signup authentication
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
      localStorage.clear()  // remove the token
      setCurrentUser(null)
    })
    .then(() => navigate("/login"))
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
        <Header currentUser={currentUser} logout={logout} createActivity={createActivity}/>
      )}


      <Routes>
        <Route path="/signup" element={<SignUp signup={signup} currentUser={currentUser}/>} />
        <Route path="/login" element={<LogIn login={login}/>} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<Error />} />


  {/* Protected routes */}
        <Route element={<ProtectedRoutes currentUser={currentUser}/>} >
          {currentUser && (
          <Route path="/" element={<Home activities={activities} currentUser={currentUser} createActivity={createActivity} exact/>}/>
          )}
          {currentUser && (
          <Route path="/display/:category?" element={<ActivityFilter activities={activities}/>} />
          )}
          {currentUser && (
          <Route path="/buddyprofile/:id" element={<BuddyProfile currentUser={currentUser} userActivity={userActivity} activities={activities}/>} />
          )}
          {currentUser && (
          <Route path="/activityshow/:id" element={<ActivityShow activities={activities} currentUser={currentUser} updateActivity={updateActivity} deleteActivity={deleteActivity} createUserActivity={createUserActivity}/>} />
          )}
          {currentUser && (
          <Route path="/activityedit/:id" element={<ActivityEdit activities={activities} updateActivity={updateActivity}/>} />
          )}
        </Route>
      </Routes>
      {currentUser && (
        <MobileNavBar currentUser={currentUser} logout={logout} createActivity={createActivity}/>
      )}
      </>
  );
}

export default App;
