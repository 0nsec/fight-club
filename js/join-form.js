
document.getElementById("joinForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const contact = document.getElementById("contact");
  const age = document.getElementById("age");
  const fullName = document.getElementById("fullName");
  const fatherName = document.getElementById("fatherName");
  const program = document.getElementById("program");
  const gender = document.getElementById("gender");

  const contactError = document.getElementById("contact-error");

  let valid = true;

  if (!/^[0-9]{10,15}$/.test(contact.value)) {
    contactError.style.display = "block";
    valid = false;
    contact.focus();
  } else {
    contactError.style.display = "none";
  }

  if (age.value < 7 || age.value > 60) {
    alert("Age must be between 7 and 60 years.");
    age.focus();
    return;
  }

  if (!fullName.value.trim() || !fatherName.value.trim() || !gender.value || !program.value) {
    alert("Please fill in all required fields.");
    return;
  }

  if (valid) {
    alert("✅ Thank you for joining Get Up Kick Boxing Academy! Your application has been submitted successfully.");
    this.submit(); // Actually submit the form to FormSubmit
  }
});
