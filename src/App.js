import { Routes, Route } from "react-router-dom"
import { useState } from "react";
import './App.css';
import Header from './pages/Header'
import Home from "./pages/Home";

function App() {

  // const [users, setUsers] = useState([])

  return (
      <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/activityindex" element={<ActivityIndex />} />
        <Route path="/activityshow" element={<ActivityShow />} />
        <Route path="/activitynew" element={<ActivityNew />} />
        <Route path="/activityedit" element={<ActivityEdit />} />
        <Route path="/buddyprofile" element={<BuddyProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      
      </>
  );
}

export default App;
