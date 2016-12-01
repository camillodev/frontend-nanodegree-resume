var bio = {
	"name": "Rafael Camillo",
	"role": "Web Developer",
	"contacts": {
		"mobile": "+55 21 97047 4317",
		"email": "camillodeveloper@gmail.com",
		"github":"rcamillo",
		"location": "Tijuca, Rio de Janeiro, Brasil"
	},
	"picture": "https://goo.gl/A9QI9k",
	"welcomeMessage": "Developer passionate about Technology and Design.",
	"skills": ["SQL Server","HTML5","CSS3","JavaScript / JQuery",".Net C#","Bootstrap"]
};


var education = {
	"schools":[
		{
			"name": "Centro Universitário Carioca",
			"location": "Rio Comprido, Rio de Janeiro, Brasil",
			"degree": "Technologist",
			"major": "Analysis and Systems Development",
			"datesAttended": "02/2012 - 12/2015",
			"url": "https://goo.gl/JRqodY"
		},
		{
			"name": "Electra",
			"location": "Campo Grande, Rio de Janeiro, Brasil",
			"degree": "Technician",
			"major": "Mechatronics Technician",
			"datesAttended": "2012",
			"url": "https://goo.gl/r9G0Bl"
		}
	],
	"onlineCourses":[
		{
			"title": "Front-End Nanodegree",
			"school": "Udacity",
			"completed": "2016",
			"url": "https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
		}
	]
};

var work = {
	"jobs":[
		{
			"employer": "A2B Logística",
			"title":"Web Developer",
            "location": "Barra da Tijuca, Rio de Janeiro, Brasil",
			"datesWorked": "08/2015 - 10/2016 ",
			"description": "Development of improvements and corrections of the company's logistics systems. Integrations with several platforms, such as SAP, Vtex, Linx and others. Development done in C #, Asp .Net, Linq SQL, HTML5, CSS3, JQuery, JavaScript, Bootstrap. SQL Server Database, where I created several functions, procedures and CRUD.",
		},
		{
			"employer": "Chemtech",
			"title":"Intern Systems Analyst",
            "location": "Ilha do Fundão, Rio de Janeiro, Brasil",
			"datesWorked": "06/2014 - 08/2015",
			"description": "Support for customers, evolutionary and correct maintenance in the company's internal systems, both web applications and desktop applications, such as C #, ASP.NET, Java, HTML, CSS, JavaScript for development, SQL Server database and versioning with SVN. Working with agile methodology based on Scrum.",
		}
	]
};

var projects = {
    "projects": [
        {
            "title": "Portfolio Camillo Dev",
            "datesWorked": "2016",
            "description": "I have carried out several design process steps such as analysis of similar front end portfolios, UX Designers, UI Designers, and others; sketching, high fidelity prototyping, user testing. As the process is becoming long, only these steps have been chosen. I made site development concerned with site accessibility, clean code and responsiveness to all devices. ",
            "images": "https://raw.githubusercontent.com/rcamillo/CamilloDev/gh-pages/img/camillodev_2x.jpg"
        },
        {
            "title": "Integra - A2B Logística",
            "datesWorked": "2015-2016",
            "description": "Development of improvements and corrections of the company's logistics systems. Integrations with several platforms, such as SAP, Vtex, Linx and others. Development done in C #, Asp .Net, Linq SQL, HTML5, CSS3, JQuery, JavaScript, Bootstrap. SQL Server Database, where I created several functions, procedures and CRUD.",
            "images": "https://raw.githubusercontent.com/rcamillo/CamilloDev/gh-pages/img/a2bsistema.jpg"
        }           
    ]
};

function inName(name){
    var n = [];
    n = name.trim().split(" ");
    n[0] = n[0].slice(0, 1).toUpperCase() + n[0].slice(1).toLowerCase();
    n[1] = n[1].toUpperCase();

    return n.join(" ");
}

function displayHeader(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);

    if(bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for(i in bio.skills) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }

    for(i in formattedContactInfo) {
        $("#topContacts").append(formattedContactInfo[i]);
        $("#footerContacts").append(formattedContactInfo[i]);
    }

}

function displayWork(){
    work.jobs.forEach(function(job){

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + " " + formattedTitle;

        var formattedData = HTMLworkDates.replace("%data%", job.datesWorked);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedData);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);

    });

}
function displayEducation(){
    if(education.schools.length > 0 || education.onlineCourses.length > 0) {
        for(i in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);          
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

        if(education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for(i in education.onlineCourses) {             
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }        
    }
}


projects.display = function(){
    projects.projects.forEach(function(project){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
        var formattedData = HTMLprojectDates.replace("%data%",project.datesWorked);
        var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedData);
        $(".project-entry:last").append(formattedDescription);   

        if(project.images.length > 0)
        {
            var formattedImage = HTMLprojectImage.replace("%data%",project.images);
            $(".project-entry:last").append(formattedImage);
        }
    });
};


displayHeader();
displayWork();
projects.display();
displayEducation();

//$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

