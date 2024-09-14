// Get referenes to the form and displahy area
const form = document.getElementById(`resum-form`) as HTMLFormElement;
const resumDisplayElement = document.getElementById(`resume-display`) as HTMLDivElement;

// Hand form submission
form.addEventListener(`submit`, (event: Event) => {
    event.preventDefault(); // prevent page reload

    // collect input values 
    const name = (document.getElementById(`name`) as HTMLInputElement).value
    const email = (document.getElementById(`email`) as HTMLInputElement).value
    const phone = (document.getElementById(`phone`) as HTMLInputElement).value
    const education = (document.getElementById(`education`) as HTMLInputElement).value
    const experience = (document.getElementById(`experience`) as HTMLInputElement).value
    const skills = (document.getElementById(`skills`) as HTMLInputElement).value

    // Generate the resum content dynamically
    const reumeHTML = `
    <h2><b>Resum</b></h2>
    <h3>Personal Informtion</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>email:</b>${email}</p>
    <p><b>phoen:</b>${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
     
    `;

    //Display the generated resume
    if(resumDisplayElement) {
       resumDisplayElement.innerHTML = reumeHTML;
    } else {
        console.error(`the resum display element is missing.`);
    }
});