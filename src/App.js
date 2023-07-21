import { Routes, Route } from "react-router-dom"
import { useState } from "react";
import './App.css';
import Header from './components/Header/Header'
import Home from "./pages/Home";
import Friends from "./pages/Friends";
import BuddyProfile from "./pages/BuddyProfile";
import LogIn from "./pages/LogIn";
import ActivityShow from "./pages/ActivityShow";
import users from "./mockUsers";


function App() {
const [activities, setActivities] = useState(users)
// console.log(users);
  return (
      <>
      <Header />
      <Routes>
        <Route path="/" element={<Home activities={activities}/>} />
        {/* <Route path="/signup" element={<SignUp />} />
        <Route path="/activityindex" element={<ActivityIndex />} />
        <Route path="/activityshow" element={<ActivityShow />} />
        <Route path="/activitynew" element={<ActivityNew />} />
        <Route path="/activityedit" element={<ActivityEdit />} />
        <Route path="/buddyprofile" element={<BuddyProfile />} />
        <Route path="*" element={<NotFound />} /> */}
        <Route path="/Friends" element={<Friends />} />
        <Route path="/BuddyProfile" element={<BuddyProfile />} />
        <Route path="/LogIn" element={<LogIn />} />
      <Route path="/ActivityShow/:id" element={<ActivityShow activities={activities} />} />

      </Routes>
      </>
  );
}

export default App;
