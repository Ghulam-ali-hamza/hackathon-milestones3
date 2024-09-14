// Get referenes to the form and displahy area
var form = document.getElementById("resum-form");
var resumDisplayElement = document.getElementById("resume-display");
// Hand form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload
    // collect input values 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Generate the resum content dynamically
    var reumeHTML = "\n    <h2><b>Resum</b></h2>\n    <h3>Personal Informtion</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>email:</b>").concat(email, "</p>\n    <p><b>phoen:</b>").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n     \n    ");
    //Display the generated resume
    if (resumDisplayElement) {
        resumDisplayElement.innerHTML = reumeHTML;
    }
    else {
        console.error("the resum display element is missing.");
    }
});
