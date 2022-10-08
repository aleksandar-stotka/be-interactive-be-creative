/* eslint-disable jsx-a11y/heading-has-content */
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Project from "./pages/project/Project";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useAuthContext } from "./hooks/useAuthContext";
import OnlineUsers from "./components/OnlineUsers";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import { useState } from "react";
import { useEffect } from "react";

function App() {

  setTimeout(() => {
       
  },4000)

  const { user, authIsReady } = useAuthContext();
  return (
     
    <div className="App ">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />

           

            <Switch>
              <Route exact path="/"> 
                {!user && <Redirect to="/header" />}
                {user && <Dashboard />}
              </Route>
              <Route path="/create">
                {!user && <Redirect to="/login" />}
                {user && <Create />}
              </Route>
              <Route path="/projects/:id">
                {!user && <Redirect to="/login" />}
                {user && <Project />}
              </Route>
              <Route path="/login">
                {user && <Redirect to="/" />}
                {!user && <Login />}
              </Route>
              <Route path="/signup">
                {user && <Redirect to="/" />}
                {!user && <Signup />}
              </Route>
              <Route path="/header">
               <Header/>
              </Route>
              <Route path="/about">
               <About/>
              </Route>
            </Switch>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
