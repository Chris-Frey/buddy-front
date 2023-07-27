import { Routes, Route } from "react-router-dom"
import { useState } from "react";
import './App.css';
import Header from './components/Header/Header'
import Home from "./pages/Home";
import BuddyProfile from "./pages/BuddyProfile";
import LogIn from "./pages/LogIn";
import ActivityShow from "./pages/ActivityShow";
// import mockActivities from "./mockActivities";
// import mockUsers from "./mockUsers";
import SignUp from "./pages/SignUp";
import ActivityEdit from "./pages/ActivityEdit";
import ActivityFilter from "./pages/ActivityFilter";
import AboutUs from "./pages/AboutUs";


function App() {
const [currentUser, setCurrentUser] = useState(null)
const [activities, setActivities] = useState([])
// const [currentUser, setCurrentUser] = useState(mockUsers[0])



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
      <Header currentUser={currentUser} logout={logout}/>
      <Routes>
        <Route path="/" element={<Home activities={activities} createActivity={createActivity}/>} />
        <Route path="/:category?" element={<ActivityFilter activities={activities}/>} />
        <Route path="/buddyprofile/:id" element={<BuddyProfile selectedUser={users}/>} />
        <Route path="/login" element={<LogIn login={login}/>} />
        <Route path="/activityshow/:id" element={<ActivityShow activities={activities} updateActivity={updateActivity} deleteActivity={deleteActivity} />} />
        <Route path="/signup" element={<SignUp signup={signup}/>} />
        <Route path="/activityedit/:id" element={<ActivityEdit activities={activities} updateActivity={updateActivity}/>} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      </>
  );
}

export default App;
