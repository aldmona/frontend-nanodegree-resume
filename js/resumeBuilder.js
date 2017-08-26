var bio = {
            name: "Mona AlDuweesh",
            role: "IS analyst",
            contacts:{
                        mobile: "966-540515522",
                        email: "aldweesh.mona@gmail.com",
                        github: "aldmoun",
                        twitter: "ald_moun",
                        location: "Riyadh - al Olaya"
                      },
            welcomeMessage: "Welcome to My Site",
            skills:
                    [
                      "Analysis" , "Team Mgmt" , "FE development"
                    ],
            biopic: "images/Mona.jpg",
            display: function ()
            {


              var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
              $("#header").prepend(formattedRole);
              var formattedName=HTMLheaderName.replace("%data%",bio.name);
              $("#header").prepend(formattedName);


              var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
              $("#topContacts:last").append(formattedMobile);
              $("#footerContacts:last").append(formattedMobile);

              var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
              $("#topContacts:last").append(formattedEmail);
              $("#footerContacts:last").append(formattedEmail);

              var formattedGithub=HTMLgithub.replace("%data%",bio.contacts.github);
              $("#topContacts:last").append(formattedGithub);
              $("#footerContacts:last").append(formattedGithub);

              var formattedTwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
              $("#topContacts:last").append(formattedTwitter);
              $("#footerContacts:last").append(formattedTwitter);

              var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
              $("#topContacts:last").append(formattedLocation);
              $("#footerContacts:last").append(formattedLocation);


              var bioPic=HTMLbioPic.replace("%data%",bio.biopic);
              $("#topContacts:last").append(bioPic);

              var formattedWelcomeMessage=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
              $("#topContacts:last").append(formattedWelcomeMessage);

              if ( bio.skills.length>0 )
              {
                $("#topContacts:last").append(HTMLskillsStart);

                for (var i=0 ; i<bio.skills.length ; i++){
                  var formattedSkills=HTMLskills.replace("%data%",bio.skills[i]);
                  $("#skills:last").append(formattedSkills);
                  }//end of for
              }// end of if

            } // end of display function
          }; // end of bio object


var work = {

                jobs: [
                        {
                          employer: "Riyad Bank",
                          title: "Technecian Support",
                          location: "Riyadh - Olaya towers",
                          dates: 2014,
                          description: "support online channels and investigate customers issues"
                        },

                        {
                          employer: "Riyad Bank",
                          title: "SDM",
                          location: "Riyadh - Olaya towers",
                          dates: 2016,
                          description: "Service Delivery Manager, working with both IT and business in order to align business needs along with IT resources - follow up on daily tasks to make sure to deliver changes at the planned deadline without any delay "
                        },

                        {
                          employer: "Riyad Bank",
                          title: "IS analyst",
                          location: "Riyadh - Olaya towers",
                          dates: 2017,
                          description: "Monitoring Riyad bank online channels against any suspecious activities or any malicious attempts"
                        }

                      ],

                        display : function () {

                          $("#workExperience").append(HTMLworkStart);

                          if ( work.jobs.length>0) {
                            for (var i = 0 ; i < work.jobs.length ; i++)
                            {
                          var HTMLFormattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
                            //  $(".work-entry:last").append(HTMLFormattedEmployer);

                              var HTMLFormattedTitle=HTMLworkTitle.replace("%data%",work.jobs[i].title);
                            //  $(".work-entry:last").append(HTMLFormattedTitle);

                            var formattedEmployerTitle=HTMLFormattedEmployer+HTMLFormattedTitle;
                            $(".work-entry:last").append(formattedEmployerTitle);

                             var HTMLFormattedLocation=HTMLworkLocation.replace("%data%",work.jobs[i].location);
                             $(".work-entry:last").append(HTMLFormattedLocation);


                             var HTMLFormattedDates=HTMLworkDates.replace("%data%",work.jobs[i].dates);
                              $(".work-entry:last").append(HTMLFormattedDates);

                          var HTMLFormattedDescription=HTMLworkDescription.replace("%data%",work.jobs[i].description);
                           $(".work-entry:last").append(HTMLFormattedDescription);
                            } // end of for statement (work)

                          } //end of if (work)
                        } // end of display function
                   }; // end of work project
var projects = {

      projects: [
                  {
                    title: "Help App",
                    dates: 2014,
                    description: "android mobile app developed to help nearest people in emmergincy situations",
                   images: [""]
                 },
                 {
                    title: "Riyad Bank Mobile App",
                    dates: 2016,
                    description: "a hybrid mobile app for online banking services",
                    images: ["images/RB_mobile_1.jpg","images/RB_mobile_2.jpg"]
                  }
                ],
     display : function (){

       $("#projects").append(HTMLprojectStart);
       if (projects.projects.length>0)
      // var imagesLength= projects.projects[i].image.length;
       {
         for (var i = 0 ; i < projects.projects.length ; i++)
         {
           var formattedProjectTitle=HTMLprojectTitle.replace("%data%",projects.projects[i].title);
           $(".project-entry:last").append(formattedProjectTitle);

           var formattedProjectDates=HTMLprojectDates.replace("%data%",projects.projects[i].dates);
           $(".project-entry:last").append(formattedProjectDates);

           var formattedProjectDesc=HTMLprojectDescription.replace("%data%",projects.projects[i].description);
           $(".project-entry:last").append(formattedProjectDesc);

         if (projects.projects[i].images.length > 0){
             for ( var j = 0 ; j < projects.projects[i].images.length ; j++)
             {
               var formattedProjectImg=HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
               $(".project-entry:last").append(formattedProjectImg);

             }// // end of for (images)
           } // end of if (images)

         } // end of for (projects)

       } // end of if (projects)
     }//end of display function


   }; // end of project object

   var education = {

           schools:[
                       {
                        name: "Imam Mohammed Ibn Saud University",
                        location: "Riyadh - Uthman Ibn Affan Road",
                        degree: "BA",
                        majors: ["Computer Science"],
                        dates: 2014,
                        url: "www.google.com"
                      }
                   ],
           onlineCourses:[
                       {
                          title: "Front-End Web developer Nanodegree ",
                          school: "Udacity",
                          dates: 2017,
                          url: "https://classroom.udacity.com/nanodegrees/nd001/"
                        },
                        {
                           title: "Penetration Testing and Ethical Hacking ",
                           school: "Cybrary",
                           dates: 2017,
                           url: "https://www.cybrary.it/course/ethical-hacking/"
                         }
                      ],

                      display : function () {
                         $("#education").append(HTMLschoolStart);
                        if (education.schools.length>0)
                        {
                          for ( var i=0 ; i < education.schools.length ; i++)
                          {
                            var formattedSchoolName=HTMLschoolName.replace("%data%",education.schools[i].name);
                            var formattedSchoolDegree=HTMLschoolDegree.replace("%data%",education.schools[i].degree);
                            var schoolNameAndDegree = formattedSchoolName + formattedSchoolDegree;

                            $(".education-entry:last").append(schoolNameAndDegree);

                            var formattedSchoolLocation=HTMLschoolLocation.replace("%data%",education.schools[i].location);
                            $(".education-entry:last").append(formattedSchoolLocation);

                            var formattedSchooldates=HTMLschoolDates.replace("%data%",education.schools[i].dates);
                            $(".education-entry:last").append(formattedSchooldates);


                            if (education.schools[i].majors.length>0) {
                              for (var j=0 ; j < education.schools[i].majors.length ; j++) {
                                var formattedSchoolMajor=HTMLschoolMajor.replace("%data%",education.schools[i].majors[j]);
                                $(".education-entry:last").append(formattedSchoolMajor);
                              }// end of for stetement (majors)
                            }// end of if stetement (majors)


                          } // end of for stetement (schools)
                        } // end of if stetement (schools)

                        $(".education-entry:last").append(HTMLonlineClasses);
                        if(education.onlineCourses.length > 0){
                          for (var i=0 ; i < education.onlineCourses.length ; i++){

                            var formattedCourseTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
                            var formattedCourseSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
                            var formattedCourseSchooldAndTitle= formattedCourseTitle + formattedCourseSchool;

                            $(".education-entry:last").append(formattedCourseSchooldAndTitle);

                            var formattedCourseDates=HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
                            $(".education-entry:last").append(formattedCourseDates);

                            var formattedCourseUrl=HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);
                            $(".education-entry:last").append(formattedCourseUrl);

                          }// end of for stetement (onlineCourses)
                        } // end of if stetement (onlineCourses)

                      } // end of display function

           }; // end of education object





bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
