// Form Submission Handler
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let country = document.getElementById("country").value;
    let termsAccepted = document.getElementById("terms").checked;
    
    let gender;
    let genderOptions = document.getElementsByName("gender");
    for (let option of genderOptions) {
        if (option.checked) {
            gender = option.value;
        }
    }

    if (!termsAccepted) {
        alert("You must accept the terms to register.");
        return;
    }

    alert(`REGISTRATION SUCCESSFUL !\nName: ${name}\nEmail: ${email}\nCountry: ${country}\nGender: ${gender}`);
});

// Copy Code Function
function copyCode() {
    let codeText = document.getElementById("sample-code").innerText;
    navigator.clipboard.writeText(codeText).then(() => {
        alert("Code copied to clipboard!");
    });
}
