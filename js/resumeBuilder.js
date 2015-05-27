var bio = {
  "name": "Patrick Martin",
  "role": "Web Content Manager",
  "contacts": [{
    "mobile": "(555) 555-5555",
    "email": "pcmart03@gmail.com",
    "github": "pcmart03",
    "twitter": "@NoTwitter",
    "location": "Fairfax, Virginia"
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
