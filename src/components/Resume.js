import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfBeginning} {item.YearOfBeginning} - {item.MonthOfEnding} {item.YearOfEnding}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="row project">
          <div className="three columns header-col">
            <h1><span>Projects</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.projects && resumeData.projects.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.ProjectName}</h3>
                      <p className="p-overview">
                        {item.ProjectOverview}
                      </p>
                      <p className="date">
                          {item.MonthOfBeginning} {item.YearOfBeginning} - {item.MonthOfEnding} {item.YearOfEnding}
                      </p>
                      <ul class="circle">
                        {
                          item.Description.map(txt => <li>{txt}</li>)
                        }
                      </ul>
                      {
                        // only show if there is a link
                        item.ProjectImage.length > 0 &&
                        <div class="p-img">
                          <img class="profile-pic" src={item.ProjectImage}></img>
                        </div>
                      }
                      
                    </div>

                  </div>

                )
              })
            }
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.title}
                        <span>&bull;</span> <em className="date">{item.MonthOfBeginning} {item.YearOfBeginning} - {item.MonthOfEnding} {item.YearOfEnding}</em>
                      </p>
                      <ul class="circle">
                        {
                          item.Description.map(txt => <li>{txt}</li>)
                        }
                      </ul>
                    </div>

                  </div>

                )
              })
            }
          </div>
        </div>


        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>
              {resumeData.skillsDescription}
            </p>

            <div className="bars">

              <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return (
                      <li>
                        <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                        </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

              </ul>

            </div>

          </div>

        </div>

      </section>
    );
  }
}