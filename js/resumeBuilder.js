
var bio={
    "name" : "Yannick Dongo",
    "role" : "Web Developer",
    "contacts":{
        "mobile":"(+234)7061692128",
        "email":"dongoyannick@gmail.com",
        "github":"https://github.com/yannick77",
        "linkedIn": "https://www.linkedin.com/in/yannick-dongo-2b1481110/",
        "location":"Ogabi Street, Lagos, Nigeria"
    },

    "skills" :["HTML","CSS","JavaScript","SQL","BootStrap", "JQuery"],
    "welcomeMessage" :"Hello, I'm Yannick, are you interested in unique, responsive, beautiful websites?\n " +
    "then contact me!",
    "biopic" :"images/day.jpg",

    //function to format and display bio
    "display": function () {
        var formattedName= HTMLheaderName.replace("%data%",bio.name);
        var formattedRole= HTMLheaderRole.replace("%data%",bio.role);
        var formattedMessage= HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
        var formattedBiopic= HTMLbioPic.replace("%data%",bio.biopic);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedHomeLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedLinkendIn= HTMLtwitter.replace("%data%", bio.contacts.linkedIn);

        $("#header").prepend(formattedName,formattedRole);

        $("#header").append(formattedMessage);

        $("#header").append(formattedBiopic);

        $("#topContacts,#footerContacts").append(
            formattedMobile, formattedEmail, formattedGithub, formattedLinkendIn,formattedHomeLocation
        );


        if(bio.skills!=null){
            $("#header").append(HTMLskillsStart);
            var formattedSkills="";
            bio.skills.forEach(function (skill) {
                formattedSkills+=HTMLskills.replace("%data%", skill);

            });
            $("#skills").append(formattedSkills);
        }
       // $("#skills").append(HTMLskillsChart);
    }

};

var education={
    "schools" :[
        {
            "name":"Covenant University",
            "location":"10 Idiroko Rd, Ota, Nigeria",
            "degree":"B.Eng",
            "majors":["Information and Communication Engineering"],
            "dates":"Sept, 2012 - July, 2017",
            "url":"www.covenantuniversity.com"
        }
    ],
    "onlineCourses":[
        {
            "title":"Front End Nanodegree",
            "school":"Udacity",
            "dates": "June 2017 - December 2017",
            "url":"https://classroom.udacity.com/nanodegrees/nd001/syllabus/core-curriculum"
        },
        {
            "title":"Web Developer Course",
            "school":"Flatiron School",
            "dates": "June 2017 - December 2017",
            "url":"https://learn.co/tracks/bootcamp-prep"
        }
    ],
    //function to format and display Education
    "displayEducation": function () {
        education.schools.forEach(function (elem,index) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolTitle = HTMLschoolName.replace("%data%", education.schools[index].name);

            var formattedSchoolUrl = HTMLschoolUrl.replace("%data%", education.schools[index].url);

            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location);

            $(".education-entry:last").append(
                formattedSchoolTitle + formattedSchoolDegree,
                formattedSchoolDates,
                formattedSchoolLocation,
                formattedSchoolUrl
            );
            if (education.schools[index].majors !== "") {
                var formattedMajor = "";
                education.schools[index].majors.forEach(function(elm,indx) {
                    formattedMajor += HTMLschoolMajor.replace("%data%", education.schools[index].majors[indx]);
                });
                $(".education-entry:last").append(formattedMajor);
            }

        });

        $(".education-entry:last").append(HTMLonlineClasses);

        education.onlineCourses.forEach(function (elem, index) {

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title);

            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[index].dates);

            var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[index].url);

            $(".education-entry:last").append(
                formattedOnlineTitle + formattedOnlineSchool,
                formattedOnlineDates,
                formattedOnlineUrl
            );

        });

    }
};





var work={
    "jobs":[
        {
            "title":"Software Engineering Intern",
            "employer":"Interswitch Group",
            "dates":"Jan, 2016 - July, 2016",
            "location":"1648C Oko Awo Close, Victoria Island, Lagos, Nigeria",
            "description":"I picked up web programming working with HTML, CSS, JS, had two projects make it to production. I also did a lot of " +
            "software documentation; created several Mockups, flowcharts, Unified Modelling Language (UML) diagrams, sequence diagrams, network diagrams" +
            " for different projects. I designed UI/UX on a project and how the user interacts with content such as API references, SDK's, user guides and tutorials." +
            "I also did a lot of support work such as assisting with Kimono's PA DSS testing, Downloaded kernels to POS devices, signed kernels, set up POS devices for use, provided support services to colleagues in other countries" +
            " via Skype and TeamViewer in order to help solve challenges. "
        }
    ],
    //function to format and display work
    "displayWork": function () {
        for (var job=0; job<work.jobs.length; job++){
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
            var formattedTitle= HTMLworkTitle.replace("%data%",work.jobs[job].title);
            var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
            var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
            var formattedLocation=HTMLworkLocation.replace("%data%",work.jobs[job].location);

            var formattedEmployment= formattedEmployer+ formattedTitle;

            $(".work-entry:last").append(formattedEmployment);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedDescription);
            $(".work-entry:last").append(formattedLocation);
        }
    }
};


var projects={
    "projects":[
        {
          "title": "GameOfChance",
          "dates":"June, 2016",
          "description":"This lucky-dip app upload's a selected .csv file and parses its content and selects a winner at random",
            "images":["images/GameOfChance1.jpg","images/GameOfChance2.jpg"]


        },
        {
            "title": "Portfolio Page",
            "dates":"September, 2017",
            "description":"This responsive portfolio page was created with HTML and vanilla CSS. Responsiveness was achieved using breakpoints and media queries. ",
            "images":["images/personalportfolio1.jpg","images/personalportfolio2.jpg"]
        }
    ],
    //function to format and display projects
    "displayProject": function () {
        projects.projects.forEach(function (elem, i) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);

            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);

            var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            var formattedProjectImage = "";

            projects.projects[i].images.forEach(function(elm,j){
                formattedProjectImage += HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
            });

            $(".project-entry:last").append(
                formattedProjectTitle,
                formattedProjectDates,
                formattedProjectDesc,
                formattedProjectImage
            );
        });

    }
};





//$("#main").append(internationalizeButton);

//Function to Internationalize names
function inName(name) {
    var names=name.split(" ");
    names[1]=names[1].toUpperCase();
    names[0]=names[0].slice(0,1)+names[0].slice(1);
    var newName=names.join(" ");
    return newName;
}

//function calls to display data
bio.display();
education.displayEducation();
work.displayWork();
projects.displayProject();
$("#mapDiv").append(googleMap);
