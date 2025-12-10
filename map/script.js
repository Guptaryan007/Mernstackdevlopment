const locations = {
  punjab: { top: 20, left: 30 },
  haryana: { top: 22, left: 40 },
  "himachal pradesh": { top: 24, left: 49 },
  uttarakhand: { top: 27, left: 51 },
  rajasthan: { top: 34, left: 30 },

  "uttar pradesh": { top: 35, left: 50 },
  bihar: { top: 39, left: 60 },
  jharkhand: { top: 42, left: 60 },
  "west bengal": { top: 45, left: 67 },

  "madhya pradesh": { top: 42, left: 42 },
  chhattisgarh: { top: 48, left: 53 },

  gujarat: { top: 34, left: 30 },
  maharashtra: { top: 55, left: 42 },
  goa: { top: 64, left: 38 },

  karnataka: { top: 66, left: 44 },
  kerala: { top: 80, left: 40 },
  "tamil nadu": { top: 80, left: 50 },
  "andhra pradesh": { top: 70, left: 55 },
  telangana: { top: 62, left: 52 },

  assam: { top: 36, left: 75 },
  "arunachal pradesh": { top: 32, left: 82 },
  nagaland: { top: 40, left: 80 },
  manipur: { top: 43, left: 78 },
  mizoram: { top: 50, left: 77 },
  tripura: { top: 48, left: 73 },
  meghalaya: { top: 40, left: 72 },
  sikkim: { top: 35, left: 69 },

  odisha: { top: 52, left: 63 },
  delhi: { top: 23, left: 44 },
};

document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("state-dropdown");

  Object.keys(locations).forEach((state) => {
    const opt = document.createElement("option");
    opt.value = state;
    opt.textContent = state.toUpperCase();
    dropdown.appendChild(opt);
  });
});

function searchLocation() {
  const dropdown = document.getElementById("state-dropdown");
  const msg = document.getElementById("msg");
  const mapContainer = document.getElementById("map-container");

  const state = dropdown.value;

  if (!state) {
    msg.textContent = "Please select a state.";
    return;
  }

  msg.textContent = "";

  const loc = locations[state];

  const oldMarkers = mapContainer.querySelectorAll(".marker");
  oldMarkers.forEach((m) => m.remove());

  const marker = document.createElement("div");
  marker.className = "marker";
  marker.style.top = loc.top + "%";
  marker.style.left = loc.left + "%";
  marker.textContent = "🚩";

  mapContainer.appendChild(marker);
}

document.getElementById("search-btn").addEventListener("click", searchLocation);
