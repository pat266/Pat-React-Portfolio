import React, { Component } from 'react';
export default class About extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="about">
            <div className="row">

               <div className="three columns">

                  <img className="profile-pic" src={resumeData.pic} alt="" />

               </div>

               <div className="nine columns main-col">

                  <h2>About Me</h2>
                  <p>
                     {
                        resumeData.aboutmes.map(txt => <p>{txt}</p>)
                     }
                  </p>

                  <div className="row">

                     <div className="columns contact-details">

                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{resumeData.name}</span>
                           <br></br>
                           <span>
                              {resumeData.address}
                           </span>
                           <br></br>
                           <span>{resumeData.email}</span>
                        </p>
                     </div>

                     <div className="columns resume-link">
                        <p>
                           <a href="./images/Tran_Pat_BS_2023.pdf" download="Pat_Resume.pdf" class="button" target="_blank">
                              <i class="fa fa-download"></i> Download Resume
                           </a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}