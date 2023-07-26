import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header/Header'
import Home from "./pages/Home";
import BuddyProfile from "./pages/BuddyProfile";
import LogIn from "./pages/LogIn";
import ActivityShow from "./pages/ActivityShow";
import SignUp from "./pages/SignUp";
import ActivityEdit from "./pages/ActivityEdit";
import ActivityFilter from "./pages/ActivityFilter";
import AboutUs from "./pages/AboutUs";
import mockUsers from "./mockUsers";


function App() {
const [activities, setActivities] = useState([])
const [users, setUsers] = useState(mockUsers)

//*******This is for testing with mock data. DELETE THIS AFTER BACK END IS CONNECTED*******
// const createActivity = (activity) => {
//   console.log(activity)
// }
// const updateActivity = (activity) => {
//   console.log(activity)
// }

// const deleteActivity = (activity) => {
//   console.log(activity)
// }

  useEffect(() => {
    readActivity()
  }, [])

  const readActivity = () => {
    fetch("http://localhost:3000/activities")
      .then((response) => response.json())
      .then((payload) => {
        setActivities(payload)
      })
      .catch((error) => console.log(error))
  }

const createActivity = (activity) => {
  fetch("http://localhost:3000/activities", {
    body: JSON.stringify(activity),
    headers: {"Content-Type": "application/json"},
    method: "POST"
  })
    .then((response) => response.json())
    .then((payload) => readActivity())
    .catch((errors) => console.log("Activity create errors:", errors))
}

const updateActivity = (activity, id) => {
  fetch(`http://localhost:3000/activities/${id}/edit`, {
    body: JSON.stringify(activity),
    headers: {"Content-Type": "application/json"},
    method: "PATCH"
  })
    .then((response) => response.json())
    .then((payload) => readActivity())
    .catch((errors) => console.log("Activity update errors:", errors))
}

// deleteCat = (id) => {
//   fetch(`http://localhost:3000/activities/${id}`, {
//     headers: {
//       "Content-Type": "application/json"
//     },
//     method: "DELETE"
//   })
//     .then((response) => response.json())
//     .then((payload) => readActivity())
//     .catch((errors) => console.log("delete errors:", errors))
// }



  return (
      <>
      <Header />
      <Routes>
        <Route path="/" element={<Home activities={activities} users={users} createActivity={createActivity} />} />
        <Route path="/:category?" element={<ActivityFilter activities={activities}/>} />
        <Route path="/buddyprofile" element={<BuddyProfile />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/activityshow/:id" element={<ActivityShow activities={activities} updateActivity={updateActivity}  />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/activityedit/:id" element={<ActivityEdit activities={activities} updateActivity={updateActivity}/>} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      </>
  );
}

export default App;
