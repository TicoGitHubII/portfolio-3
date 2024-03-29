import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
     // var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      //var street = this.props.data.address.street;
      //var city = this.props.data.address.city;
      //var state = this.props.data.address.state;
     // var zip = this.props.data.address.zip;
     // var phone= this.props.data.phone;
     // var email = this.props.data.email;
     // var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p className="about-description">{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>    <a href='&#109;ailt&#111;&#58;tic&#111;&#115;%65&#37;6D&#97;%69%6C%40&#112;ro&#37;74&#111;nmail&#46;com' rel="nofollow">  Contact Details</a> </h2>
        
               </div>
               {/* <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div> */}
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
