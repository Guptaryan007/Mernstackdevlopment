function calculateTip() {
  let bill = document.getElementById("bill").value;
  let service = document.getElementById("service").value;
  let people = document.getElementById("people").value;

  if (bill === "" || people === "" || people <= 0) {
    alert("Please enter valid values");
    return;
  }

  let tip = bill * service;
  let total = Number(bill) + tip;
  let perPerson = total / people;

  document.getElementById("result").innerHTML =
    "Tip Amount<br>₹ " + perPerson.toFixed(2) + " each";
}
