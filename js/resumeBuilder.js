
var bio={
    "name" : "Yannick Dongo",
    "role" : "Web Developer",
    "contacts":{
        "mobile":"(+234)7061692128",
        "email":"dongoyannick@gmail.com",
        "github":"yannick77",
        "linkedIn":"https://www.linkedin.com/in/yannick-dongo-2b1481110/",
        "location":"Lagos, Nigeria"
    },

    "skills" :["HTML","CSS","JavaScript","SQL"],
    "welcomeMessage" :"Hello, I'm Yannick, are you interested in unique, responsive, beautiful websites?\n " +
    "then contact me!",
    "biopic" :"images/day.jpg"

};

var work={
    "jobs":[
        {
            "title":"Software Engineering Intern",
            "employer":"Interswitch Group",
            "dates":"Jan, 2016 - July, 2016",
            "location":"Lagos, Nigeria",
            "description":"I picked up web programming working with HTML, CSS, JS, had two projects make it to production. I also did a lot of " +
            "software documentation; created several Mockups, flowcharts, Unified Modelling Language (UML) diagrams, sequence diagrams, network diagrams" +
            " for different projects. I designed UI/UX on a project and how the user interacts with content such as API references, SDK's, user guides and tutorials." +
            "I also did a lot of support work such as assisting with Kimono's PA DSS testing, Downloaded kernels to POS devices, signed kernels, set up POS devices for use, provided support services to colleagues in other countries" +
            " via Skype and TeamViewer in order to help solve challenges. "
        }
    ]
};

var education={
    "schools" :[
        {
            "name":"Covenant University",
            "location":"Ota, Nigeria",
            "degree":"B.Eng",
            "major":["Information and Communication Engineering"],
            "dates":"Sept, 2012 - July, 2017",
            "url":"www.covenantuniversity.com"
        }
    ],
    "onlineCourses":[
        {
            "title":"Front End Nanodegree",
            "school":"Udacity",
            "date": 2017,
            "url":"https://classroom.udacity.com/nanodegrees/nd001/syllabus/core-curriculum"
        }
    ]
};

var projects={
    "project":[
        {
          "title": "GameOfChance",
          "dates":"June, 2016",
          "description":"This lucky-dip app upload's a selected .csv file and parses its content and selects a winner at random"
        },
        {
            "title": "Portfolio Page",
            "dates":"September, 2017",
            "description":"This responsive portfolio page was created with HTML and vanilla CSS. Responsiveness was achieved using breakpoints and media queries. "
        }
    ]
};

var formattedName=HTMLheaderName.replace("%data%",bio.name);
$("#header").append(formattedName);
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
$("#header").append(formattedRole);
var formattedMessage=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedMessage);
var formattedBiopic=HTMLbioPic.replace("%data%",bio.biopic);
$("#header").append(formattedBiopic);

if(bio.skills!=null){
    $("#header").append(HTMLskillsStart);
    var formattedSkill;
    bio.skills.forEach(function (skill) {
        formattedSkill=HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });
}

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