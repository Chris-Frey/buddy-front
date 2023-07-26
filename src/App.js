import { Routes, Route } from "react-router-dom"
import { useState } from "react";
import './App.css';
import Header from './components/Header/Header'
import Home from "./pages/Home";
import BuddyProfile from "./pages/BuddyProfile";
import LogIn from "./pages/LogIn";
import ActivityShow from "./pages/ActivityShow";
import mockActivities from "./mockActivities";
import mockUsers from "./mockUsers";
import SignUp from "./pages/SignUp";
import ActivityEdit from "./pages/ActivityEdit";
import ActivityFilter from "./pages/ActivityFilter";
import AboutUs from "./pages/AboutUs";


function App() {
const [activities, setActivities] = useState(mockActivities)

const [users, setUsers] = useState(mockUsers)

//*******This is for testing with mock data. DELETE THIS AFTER BACK END IS CONNECTED*******
const createActivity = (activity) => {
  console.log(activity)
}
const updateActivity = (activity) => {
  console.log(activity)
}

const deleteActivity = (activity) => {
  console.log(activity)
}
  return (
      <>
      <Header />
      <Routes>
        <Route path="/" element={<Home activities={activities} createActivity={createActivity}/>} />
        <Route path="/:category?" element={<ActivityFilter activities={activities}/>} />
        <Route path="/buddyprofile/:id" element={<BuddyProfile selectedUser={users}/>} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/activityshow/:id" element={<ActivityShow activities={activities} updateActivity={updateActivity} deleteActivity={deleteActivity} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/activityedit/:id" element={<ActivityEdit activities={activities} updateActivity={updateActivity}/>} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      </>
  );
}

export default App;
