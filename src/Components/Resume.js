import React, { Component } from "react";

class Resume extends Component {

  render() { 

    const bullet = (<span>&bull;</span>);

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree ? education.degree :""} 
              <em className="date">{education.graduated}</em>
            </p>
            <p className="work-description">{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
                <span>{work.title ? bullet : ""} </span> <em className="date">{work.years}</em>
            </p>
            <p className="work-description">{work.description}</p>
          </div>
        );
      });
      var work_past = this.props.data.work_past.map(function (work_past) {
        return (
          <div key={work_past.company}>
            <h3>{work_past.company}</h3>
            <p className="info">
              {work_past.title}
              <span>{work_past.title ? bullet : ""} </span> <em className="date">{work_past.years}</em>
            </p>
       
            <p className="work-description">
              <span>{work_past.description.item1}</span>
             <br/>
           
              <span>{work_past.description.item2}</span>
           
              <br/>
           
              <span>{work_past.description.item3}</span>
            </p> 
    
       
          </div>
        );
      });
      var skills = this.props.data.skills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <ul>
          <li key={skills.name}><div className="container">
            <span style={{ width: skills.level }} className={className}></span>
            <em>
           <p>
                {skills.name }
          </p>
            </em>
            </div>
          </li></ul>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">  
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>
          <div className="nine columns main-col">{work}</div>
        </div>
        <div className="row work2">
          <div className="three columns header-col">
            <h1>
              <span>Additional Experience</span>
            </h1>
          </div>
          <div className="nine columns main-col2">{work_past}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
