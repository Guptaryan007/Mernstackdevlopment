const dobInput = document.getElementById("dob");
const currentInput = document.getElementById("currentDate");
const calcBtn = document.getElementById("calcbtn");
const result = document.getElementById("result");
calcBtn.addEventListener("click", function () {
  const dobValue = dobInput.value;
  const currentValue = currentInput.value;

  if (!dobValue || !currentValue) {
    result.textContent = "Please select both dates.";
    return;
  }

  const dob = new Date(dobValue);
  const current = new Date(currentValue);

  if (current < dob) {
    result.textContent = "Current date must be after birth date.";
    return;
  }

  let years = current.getFullYear() - dob.getFullYear();
  let months = current.getMonth() - dob.getMonth();
  let days = current.getDate() - dob.getDate();
  if (months < 0 || (months === 0 && days < 0)) {
    years--;
  }

  result.textContent = "Your age is " + years + " years.";
  
});
