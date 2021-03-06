import "./styles.css";
import LandingPage from "./components/LandingPage/LandingPage";
import SignupPage from "./components/SignupPage/SignupPage";
import UserDetailsPage from "./components/UserDetailsPage/UserDetailsPage";
import HomePage from "./components/HomePage/HomePage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import MentorsPage from "./components/MentorsPage/MentorsPage";
import CommunityEvents from './components/CommunityEvents/CommunityEvents'
import Forum from "./components/Forum/Forum";
import GroupsPage from "./components/GroupsPage/GroupsPage";

import { UserContext } from "./components/UserContext/UserContext";
import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";


export default function App() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    language: "",
    hobbies: "",
    age: "",
    bio: ""
  });

  return (
    <div className="App">
      <BrowserRouter basename='IMMIGROW_CLIENT'>
        <UserContext.Provider value={{ user, setUser }}>
          <Route path="/" exact component={SignupPage} />
          <Route path="/signup" component={LandingPage} />
          <Route path="/details" component={UserDetailsPage} />
          <Route path="/homepage" component={HomePage} />
          <Route path="/profile/:id" component={ProfilePage} />
          <Route path="/mentors" component={MentorsPage} />
          <Route path="/events" component={CommunityEvents} />
          <Route path="/groups" component={GroupsPage} />
          <Route path="/forum" component={Forum} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

