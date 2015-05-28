var bio = {
  "name": "Patrick Martin",
  "role": "Web Content Manager",
  "contacts": [{
    "mobile": "(555) 555-5555",
    "email": "pcmart03@gmail.com",
    "github": "pcmart03",
    "twitter": "@NoTwitter",
    "location": "Arlington, VA"
  }],
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
    var contactKeys = Object.keys(bio.contacts[0]);
    for (key in contactKeys) {
      var contactText = contactKeys[key];
      var formattedType = HTMLcontactGeneric.replace("%contact%", contactText);
      var formattedContact = formattedType.replace("%data%", bio.contacts[0][contactText]);
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
} //End Bio
bio.display();

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
    var majors = education.schools[school].majors;
      for (major in majors) {
        var formattedmajor = HTMLschoolMajor.replace("%data%", majors[major]);
        $(".education-entry:last").append(formattedmajor);
      }
    }
  } //end education.display();
} //end education
education.display();
