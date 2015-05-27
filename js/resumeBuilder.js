var bio = {
  "name": "Patrick Martin",
  "role": "Web Content Manager",
  "contacts": [{
    "mobile": "(555) 555-5555",
    "email": "pcmart09@gnet.com",
    "github": "pcmart09",
    "twitter": "@pcmart09",
    "location": "Fairfax, Virginia"
  }],
  "welcomeMessage": "Hello, and welcome to my resume project",
  "skills": ["Copy Writing", "HTML", "CSS", "Git", "markdown", "jekyll"],
  "biopic": "images/fry.jpg",
  "display": function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var contactKeys = Object.keys(bio.contacts[0]);
    for (key in contactKeys) {
      var contactText = contactKeys[key];
      var formattedType = HTMLcontactGeneric.replace("%contact%", contactText);
      var formattedContact = formattedType.replace("%data%", bio.contacts[0][contactText]);
      $("#topContacts").append(formattedContact);
    }
  }
}

bio.display();
