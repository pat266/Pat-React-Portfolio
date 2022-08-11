(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),l=(a(13),a(1)),s=a(2),c=a(4),m=a(3),u=a(5),h=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{id:"home"},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{className:"responsive-headline"},e.name,"."),r.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},e.introduction),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:e.className})))})))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"})))))}}]),t}(n.Component),d=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"three columns"},r.a.createElement("img",{className:"profile-pic",src:e.pic,alt:""})),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,e.aboutmes.map(function(e){return r.a.createElement("p",null,e)})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"columns contact-details"},r.a.createElement("h2",null,"Contact Details"),r.a.createElement("p",{className:"address"},r.a.createElement("span",null,e.name),r.a.createElement("br",null),r.a.createElement("span",null,e.address),r.a.createElement("br",null),r.a.createElement("span",null,e.email))),r.a.createElement("div",{className:"columns resume-link"},r.a.createElement("p",null,r.a.createElement("a",{button:!0,class:"button-84",role:"button",href:"./images/Tran_Pat_BS_2023.pdf",target:"_blank"},r.a.createElement("i",{class:"fa fa-download"})," Download Resume")))))))}}]),t}(n.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"resume"},r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Education"))),r.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("h3",null,e.UniversityName),r.a.createElement("p",{className:"info"},e.specialization,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.MonthOfBeginning," ",e.YearOfBeginning," - ",e.MonthOfEnding," ",e.YearOfEnding)),r.a.createElement("ul",{class:"circle"},e.Description.map(function(e){return r.a.createElement("li",null,e)}))))}))),r.a.createElement("div",{className:"row project"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Projects"))),r.a.createElement("div",{className:"nine columns main-col"},e.projects&&e.projects.map(function(e){return r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("h3",null,r.a.createElement("a",{href:e.ProjectLink,target:"_blank",rel:"noopener noreferrer"}," ",e.ProjectName," ")),r.a.createElement("p",{className:"p-overview"},e.ProjectOverview),r.a.createElement("p",{className:"date"},e.MonthOfBeginning," ",e.YearOfBeginning," - ",e.MonthOfEnding," ",e.YearOfEnding),r.a.createElement("ul",{class:"circle"},e.Description.map(function(e){return r.a.createElement("li",null,e)})),e.ProjectImage.length>0&&r.a.createElement("div",{class:"p-img"},r.a.createElement("img",{class:"p-img",src:e.ProjectImage,alt:"Showcase the project"}))))}))),r.a.createElement("div",{className:"row work"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Work"))),r.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("h3",null,e.CompanyName),r.a.createElement("p",{className:"info"},e.title,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.MonthOfBeginning," ",e.YearOfBeginning," - ",e.MonthOfEnding," ",e.YearOfEnding)),r.a.createElement("ul",{class:"circle"},e.Description.map(function(e){return r.a.createElement("li",null,e)}))))}))))}}]),t}(n.Component),p=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return r.a.createElement("li",null,r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}))),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),f={imagebaseurl:"https://pat266.github.io/",name:"Pat Tran",pic:"images/profilepic.avif",linkedinId:"pattran26",introduction:"I am a B.S. Computer Science Student at Georgia Tech. I enjoy learning about new technologies and creating software for personal usage.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/pattran26/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/pat266",className:"fa fa-github"},{name:"mail",url:"mailto:pattran26@gmail.com",className:"fa fa-envelope"}],aboutmes:["I am a senior student at Georgia Tech with concentrations in Information Internetworks and People. My passion lies primarily in backend development and building scalable projects.","I am driven to develop software to solve problems. For instance, one of my childhood games had a very slow website due to its poor front-end implementation, so I created a game launcher to directly call its APIs to log in and launch the game effortlessly. The game launcher also has many features, including an automatic captcha solver for the login process and an image translator to translate the in-game tasks and rewards, to improve my gaming experience.","I also have strong interpersonal, leadership, and communication skills. When I was a team leader for a team of 8 people to develop a chatbot, I was communicating with my teammates on the short and long-term goals, as well as spearheaded the development direction. Through this project, I learned how to collaborate with others and plan milestones effectively.","My primary programming language is Java, and I have also had experience in other languages such as Python, C#, C, and HTML/CSS/JavaScript/React.js. I am eager to learn and adapt to different environments and would love to further sharpen my skills in data management, DevOps, and back-end development.","Looking forward to connecting with you!"],address:"Atlanta, GA",email:"pattran26@gmail.com",education:[{UniversityName:"Georgia Institute of Technology",specialization:"Computer Science",MonthOfBeginning:"January",YearOfBeginning:"2021",MonthOfEnding:"December",YearOfEnding:"2023 (Projected)",Description:["Threads: Information Internetworks and People.","GPA: 3.80/4.0","Relevant Courses: Object-Oriented Design (Java), Data Structures and Algorithms (Java), System-Level Programming (Assembly & C), Database System (SQL)."]},{UniversityName:"Georgia State University",specialization:"Computer Science",MonthOfBeginning:"August",YearOfBeginning:"2019",MonthOfEnding:"December",YearOfEnding:"2020",Description:[]}],projects:[{ProjectName:"Game Launcher",ProjectOverview:"A game launcher with an instant image translation feature to understand the in-game tasks and rewards.",MonthOfBeginning:"May",YearOfBeginning:"2022",MonthOfEnding:"August",YearOfEnding:"2022",Description:["Design login and game windows with custom buttons in the title bar using the .NET Framework.","Utilize Tesseract OCR Engine to automatically solve the Captcha image to login with an accuracy rate of 86%.","Create a custom Snipping Tool to capture a selected part of the screen, and utilizes an ONNX formatted pre-trained model that was trained to recognize Chinese characters to extract text from the captured image.","Implement an algorithm to bulk translate text using the free translation APIs from the GTranslate package."],ProjectImage:"./images/projects/game_launcher_translation.gif",ProjectLink:"https://github.com/pat266/game-launcher"},{ProjectName:"TutorBot (ITS-Chatbot v2.1)",ProjectOverview:"Fine-tune the pre-trained transformer model to improve accuracy.",MonthOfBeginning:"Spring",YearOfBeginning:"2022",MonthOfEnding:"May",YearOfEnding:"2022",Description:["Implement metrics such as F1, exact match, and semantic similarity to examine the model's performance.","Generate a dataset of nearly 6,000 generated questions and answers from the DSP First textbook to improve the pre-trained Transformers model (https://pat266.github.io/textbook_SQuAD_explore/).","Utilizes the generated dataset to fine-tune the pre-trained Question Answering model to increase its accuracy by 15% (https://huggingface.co/ptran74/DSPFirst-Finetuning-5).","Add CUDA support to increase the average computational speed from 15 seconds to 6 seconds."],ProjectImage:"",ProjectLink:"https://github.gatech.edu/VIP-ITS/TutorBot-Spring-2022"},{ProjectName:"TutorBot (ITS-Chatbot v2.0)",ProjectOverview:"Implement a new transformer-based approach and integrate it with the TutorJS Project.",MonthOfBeginning:"August",YearOfBeginning:"2021",MonthOfEnding:"December",YearOfEnding:"2021",Description:["Enhance the accuracy of the existing Predictive model by incorporating the relevance metric when comparing the similarity between two documents.","Implement a new process using the BM25 algorithm to retrieve the top-n relevant documents to improve processing speed by 40% while retaining the same accuracy score.","Examine different Transformers pre-trained question-answering models using the Hugging Face library to find the best model to extract answers while balancing accuracy level and processing time.","Develop a web scraper to retrieve the top images result of the user query.","Create REST APIs with Flask for integration with other projects.","Develop automated tests using PyTest and Flask-Testing to test JSON responses from the APIs."],ProjectImage:"./images/projects/chatbot_fall_2021.avif",ProjectLink:"https://github.gatech.edu/VIP-ITS/TutorBot"},{ProjectName:"Drone Grocery Delivery",ProjectOverview:"Exploratory and experimental work on ITS-Chatbot to improve data labeling with topic modeling on DSP First textbook.",MonthOfBeginning:"January",YearOfBeginning:"2021",MonthOfEnding:"May",YearOfEnding:"2021",Description:["Design an Entity Relationship Diagram that represents all functionalities of the application.","Create MySQL stored procedures from the ER Diagram to insert, update, or delete the data inside of the appropriate table(s). Host it on AWS Relational Database Service for ease of accessibility.","Utilize JavaFX to design the software interface and the MySQL Connector/J driver to connect the application to the Amazon database."],ProjectImage:"./images/projects/drone_grocery_erd.avif",ProjectLink:"https://github.com/pat266/Drone_Grocery_Delivery"},{ProjectName:"Intelligent Tutoring System - Chatbot v1.5",ProjectOverview:"Exploratory and experimental work on ITS-Chatbot to improve data labeling with topic modeling on DSP First textbook.",MonthOfBeginning:"January",YearOfBeginning:"2021",MonthOfEnding:"May",YearOfEnding:"2021",Description:["Implement LDA (unsupervised) and CorEx (semi-supervised) models to find latent topics from all unlabeled documents and group them according to their topics.","Maximize the LDA\u2019s topic coherence score and CorEx\u2019s total correlation score by fine-tuning with a different number of topics and weight values, and various sets of weighted words.","Utilize the topic model to predict which textbook section(s) are relevant to the user query."],ProjectImage:"./images/projects/chatbot_topic_modeling.avif",ProjectLink:"https://github.gatech.edu/VIP-ITS/Chatbot-Spring-2021"}],work:[{CompanyName:"ABC Home Health Care Services LLC ",title:"Home Health Aide",MonthOfBeginning:"September",YearOfBeginning:"2019",MonthOfEnding:"",YearOfEnding:"Present",Description:["Attending to one client at their home to ensure the living safest environment.","Improving the client\u2019s quality of life by monitoring them closely"]},{CompanyName:"Viet Hong Vietnamese School",title:"Lead IT",MonthOfBeginning:"July",YearOfBeginning:"2020",MonthOfEnding:"May",YearOfEnding:"2021",Description:["Lead the weekly meetings to instruct the teachers through the necessary steps for effective online teaching and parent communication.","Evaluate IT problems with the administrators and formulate the best solution.","Collaborate with the IT team to create a step-by-step guide in Vietnamese to use software such as Google Meet, Google Classroom, and Google Jamboard."]}]},E=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,{resumeData:f}),r.a.createElement(d,{resumeData:f}),r.a.createElement(g,{resumeData:f}),r.a.createElement(p,{resumeData:f}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.3e680459.chunk.js.map