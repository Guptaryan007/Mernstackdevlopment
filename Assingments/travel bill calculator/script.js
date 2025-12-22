function calculateBill() {
  const kmInput = document.getElementById("km");
  const error = document.getElementById("kmError");
  const result = document.getElementById("result");

  error.innerText = "";
  result.classList.add("d-none");

  const km = parseFloat(kmInput.value);

  // Validation
  if (kmInput.value === "" || isNaN(km) || km < 0) {
    error.innerText = "Please enter a non-negative number of kilometres";
    return;
  }

  const slab1Km = Math.min(km, 10);
  const slab2Km = Math.min(Math.max(km - 10, 0), 40);
  const slab3Km = Math.max(km - 50, 0);

  const slab1 = slab1Km * 11;
  const slab2 = slab2Km * 10;
  const slab3 = slab3Km * 9;

  const total = slab1 + slab2 + slab3;

  document.getElementById("slab1").innerText = `${slab1Km.toFixed(
    2
  )} km * ₹11 = ₹${slab1.toFixed(2)}`;
  document.getElementById("slab2").innerText = `${slab2Km.toFixed(
    2
  )} km * ₹10 = ₹${slab2.toFixed(2)}`;
  document.getElementById("slab3").innerText = `${slab3Km.toFixed(
    2
  )} km * ₹9 = ₹${slab3.toFixed(2)}`;

  document.getElementById("total").innerText = `₹${total.toLocaleString(
    "en-IN",
    { minimumFractionDigits: 2 }
  )}`;

  result.classList.remove("d-none");
}
