import { Routes, Route } from "react-router-dom"
import { useState } from "react";
import './App.css';
import Header from './components/Header/Header'
import Home from "./pages/Home";
import Friends from "./pages/Friends";
import BuddyProfile from "./pages/BuddyProfile";
import LogIn from "./pages/LogIn";
import ActivityShow from "./pages/ActivityShow";
import userActivities from "./mockActivities";


function App() {
const [activities, setActivities] = useState(userActivities)

  return (
      <>
      <Header />
      <Routes>
        <Route path="/" element={<Home activities={activities}/>} />
        <Route path="/Friends" element={<Friends />} />
        <Route path="/BuddyProfile" element={<BuddyProfile />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/ActivityShow/:id" element={<ActivityShow activities={activities} />} />

      </Routes>
      </>
  );
}

export default App;
