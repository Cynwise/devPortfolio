import React from 'react';
import Header from './components/header/index'
import Project from './components/projects/index'
import Footer from './components/footer/index'
import projectsJson from './data/projects.json';

function App() {

  return (
    <div className="App">
      <Header/>
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
      <Footer/>
    </div>
  );
}

export default App;
