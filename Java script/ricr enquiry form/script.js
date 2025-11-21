function Login() {
  alert("Redirecting to Student Login Page...");
  window.location.href = "login.html";
}

// ---------- SUBMIT BUTTON ----------
function Submit() {
  // Get all fields
  let name = document.getElementById("name").value.trim();
  let number = document.getElementById("number").value.trim();
  let email = document.getElementById("email").value.trim();
  let qualification = document.getElementById("Qualification").value.trim();
  let college = document.getElementById("edu").value.trim();
  let year = document.getElementById("year").value;
  let branch = document.getElementById("Branch").value.trim();
  let info = document.getElementById("info").value;
  let executive = document.getElementById("NameOfExecutive").value.trim();

  // Checkbox (interests)
  let interests = [];
  document.querySelectorAll("input[name='intrest']:checked").forEach((item) => {
    interests.push(item.nextElementSibling.innerText);
  });

  // ---------- VALIDATION ----------
  if (
    !name ||
    !number ||
    !email ||
    !qualification ||
    !college ||
    year === "year" ||
    !branch ||
    !info ||
    !executive ||
    interests.length === 0
  )
    if (number.length < 10) {
      alert("⚠ Enter a valid contact number.");
      return;
    }

  // ---------- DATA OBJECT ----------
  let formData = {
    personName: name,
    contactNumber: number,
    email: email,
    qualification: qualification,
    collegeSchool: college,
    studyYear: year,
    branch: branch,
    interests: interests,
    infoSource: info,
    executiveName: executive,
  };

  console.log("Form Submitted:", formData);

  alert("🎉 Form Submitted Successfully!");
}