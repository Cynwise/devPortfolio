import React from 'react';
import Header from './components/header/index'
import Project from './components/projects/index'
import AboutMe from  './components/aboutme/index'
import Footer from './components/footer/index'
import projectsJson from './data/projects.json'
import { HashRouter as Router, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
      <Header/>
      <Route exact path="/" component={AboutMe}/>

      {/* populate cards with each project in the JSON File */}
      <Route exact path="/projects" component = {Project}>
      <section className="grid" id="work">
        {projectsJson.map(project => (
          <Project 
            key = {project.key}
            title = {project.title}
            deploy = {project.deploy}
            github = {project.github}
            image = {project.image}
            description = {project.description}

          />
          ))}
      </section>
      </Route>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
