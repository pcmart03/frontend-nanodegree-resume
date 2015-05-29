var bio = {
  "name": "Patrick Martin",
  "role": "Web Content Manager",
  "contacts": {
    "mobile": "(555) 555-5555",
    "email": "pcmart03@gmail.com",
    "github": "pcmart03",
    "twitter": "@NoTwitter",
    "location": "Arlington, VA"
  },
  "welcomeMessage": "Hello, and welcome to my resume project",
  "skills": ["Copy Writing", "HTML", "CSS", "Git", "markdown", "jekyll"],
  "biopic": "images/fry.jpg",
  "display": function() {
    //Display name and role
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    //Display Contacts
    for ( var key in bio.contacts) {
      var formattedType = HTMLcontactGeneric.replace("%contact%", key);
      var formattedContact = formattedType.replace("%data%", bio.contacts[key]);
      $("#topContacts").append(formattedContact);
      $("#footerContacts").append(formattedContact);
    }; //End for loop

    //Display biopic
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    //Display welcome-message
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);

    //Display skills
    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for (skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill] + "<br>");
          $("#skills").append(formattedSkill);
        };
    };
  } //End bio.display();
}; //End Bio JSON


var education = {
  "schools": [{
    "name": "The College of William And Mary",
    "location": "Williamsburg, VA",
    "degree": "BA",
    "majors": ["English"],
    "dates": 2003,
    "url": "http://www.wm.edu/",
  },
  {
    "name": "George Mason University",
    "location": "Fairfax, VA",
    "degree": "MFA",
    "majors": ["Creative Writing", "Fiction"],
    "dates": 2009,
    "url": "http://www.gmu.edu/",
  }],
  "onlineCourses": [{
    "title": "Intro to HTML and CSS",
    "school": "Udacity",
    "date": 2015,
    "url": "https://www.udacity.com/"
  },
  {
    "title": "Responsive Web Design Fundamentals",
    "school": "Udacity",
    "date": 2015,
    "url": "https://www.udacity.com/"
  }],
  "display": function() {
    //Display Schools
    for (school in education.schools) {
      $("#education").append(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedSchoolDegree = formattedSchoolName + formattedDegree;
      $(".education-entry:last").append(formattedSchoolDegree);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedDates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);
      for (major in education.schools[school].majors) {
        var formattedmajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
        $(".education-entry:last").append(formattedmajor);
      };
      $(".education-entry:last").find("a").attr("href", education.schools[school].url);
    };
    // Display Online courses
    $("#education").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
      $("#education").append(HTMLschoolStart);
      var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      var formattedCourseSchool = formattedTitle + formattedSchool;
      $(".education-entry:last").append(formattedCourseSchool);
      var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
      $(".education-entry:last").append(formattedDate);
      var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
      $(".education-entry:last").append(formattedURL);
      $(".education-entry:last").find("a").attr("href", education.onlineCourses[course].url);
    };
  } //end education.display();
}; //end education

var work = {
  "jobs": [{
    "employer": "CRGT",
    "title": "Web Content Writer",
    "location": "Washington, DC",
    "dates":"2014-Present",
    "description": "Locavore Portland Etsy PBR wayfarers, selfies hoodie. Cronut bitters street art, Neutra keffiyeh tattooed photo booth normcore Carles wayfarers freegan put a bird on it tofu shabby chic. Austin hoodie Vice iPhone, ugh Godard fanny pack flannel YOLO twee. Farm-to-table direct trade umami banh mi squid 3 wolf moon, before they sold out mixtape vinyl slow-carb asymmetrical. Craft beer fap cray, wayfarers art party DIY chambray pop-up Etsy bespoke XOXO vegan."
  },
  {
    "employer": "Caveon",
    "title": "Assessment Development Manager",
    "location": "Fairfax, VA",
    "dates": "2012-2014",
    "description": "Locavore Portland Etsy PBR wayfarers, selfies hoodie. Cronut bitters street art, Neutra keffiyeh tattooed photo booth normcore Carles wayfarers freegan put a bird on it tofu shabby chic. Austin hoodie Vice iPhone, ugh Godard fanny pack flannel YOLO twee. Farm-to-table direct trade umami banh mi squid 3 wolf moon, before they sold out mixtape vinyl slow-carb asymmetrical. Craft beer fap cray, wayfarers art party DIY chambray pop-up Etsy bespoke XOXO vegan."
  },
  {
    "employer": "The Motley Fool",
    "title": "Contract Writer",
    "location": "Alexandria, VA",
    "dates": "2011-2012",
    "description": "Locavore Portland Etsy PBR wayfarers, selfies hoodie. Cronut bitters street art, Neutra keffiyeh tattooed photo booth normcore Carles wayfarers freegan put a bird on it tofu shabby chic. Austin hoodie Vice iPhone, ugh Godard fanny pack flannel YOLO twee. Farm-to-table direct trade umami banh mi squid 3 wolf moon, before they sold out mixtape vinyl slow-carb asymmetrical. Craft beer fap cray, wayfarers art party DIY chambray pop-up Etsy bespoke XOXO vegan."
  }
  ],
  "display": function() {
    for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates)
    $(".work-entry:last").append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description)
      $(".work-entry:last").append(formattedDescription);
      };
  } //end work.display();
}; //end work


var projects = {
  "projects": [{
    "title": "Awesome Project No. 1",
    "dates": "May 2015",
    "description": "Yr Neutra Austin polaroid. Readymade leggings Shoreditch Brooklyn mumblecore, banh mi squid. Tumblr Austin synth, mixtape blog keffiyeh heirloom four dollar toast hoodie bespoke letterpress direct trade vinyl occupy. ",
    "images": ["images/197x148.gif","images/197x148.gif"]
  }],
  "display": function() {
    for (project in projects.projects) {
      $("#projects").append(HTMLprojectStart);
      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedProjectTitle);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedProjectDates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedProjectDescription);
      for (image in projects.projects[project].images) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedProjectImage);
      };
    };
  } //end projects.dispay();
}; //end projects




//Add map to resume
function addMap() {
  $("#mapDiv").append(googleMap);
} //end addMap

bio.display();
education.display();
work.display();
projects.display();
addMap();
