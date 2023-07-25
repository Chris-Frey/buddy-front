import { Routes, Route } from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react";
import './App.css';
import Header from './components/Header/Header'
import Home from "./pages/Home";
import BuddyProfile from "./pages/BuddyProfile";
import LogIn from "./pages/LogIn";
import ActivityShow from "./pages/ActivityShow";
import mockActivities from "./mockActivities";
import SignUp from "./pages/SignUp";
import ActivityEdit from "./pages/ActivityEdit";
import ActivityFilter from "./pages/ActivityFilter";
import AboutUs from "./pages/AboutUs";


function App() {
const [activities, setActivities] = useState(mockActivities)

//*******This is for testing with mock data. DELETE THIS AFTER BACK END IS CONNECTED*******
const createActivity = (activity) => {
  console.log(activity)
}

// useEffect(() => {
//   readActivities()
// }, [])

// fetch requests

// const readActivities = () => {
//   fetch("http://localhost:3000/")
//   .then((response) => response.json())
//   .then((payload) => {
//     setActivities(payload)
//   })
//   .catch((error) => console.log(error))
// }

// const createActivity = (activity) => {
//   fetch("http://localhost:3000/", {
//     body: JSON.stringify(activity),
//     method: 'POST',
//     headers: {
//       'Content-Type':'application/json'
//     }
//   })
//   .then((response) => response.json())
//   .then(() => readActivities())
//   .catch((error) => console.log(error))
// }

  return (
      <>
      <Header />
      <Routes>
        <Route path="/" element={<Home activities={activities} createActivity={createActivity}/>} />
        <Route path="/:category?" element={<ActivityFilter activities={activities}/>} />
        <Route path="/buddyprofile" element={<BuddyProfile />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/activityshow/:id" element={<ActivityShow activities={activities}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/activityedit/:id" element={<ActivityEdit activities={activities} />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      </>
  );
}

export default App;
