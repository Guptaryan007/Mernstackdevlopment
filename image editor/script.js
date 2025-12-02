// initial filter values
let b = 1,
    c = 1,
    g = 0,
    s = 0,
    i = 0;

const img = document.getElementById("image");
const uploadInput = document.getElementById("Upload");
const uploadLabel = document.getElementById("uploadLabel");

const srcAttr = img.getAttribute("src");
if (!srcAttr || srcAttr.trim() === "" || srcAttr.toLowerCase().includes("workimage")) {
  img.style.display = "none";
} else {
  img.style.display = "block";
}

function uploadImage() {
  const file = uploadInput.files && uploadInput.files[0];
  if (!file) {
    alert("Please choose an image file first.");
    return;
  }

  const fileURL = URL.createObjectURL(file);
  img.src = fileURL;
  img.style.display = "block";
  if (uploadLabel) uploadLabel.style.display = "none";
 
  img.onload = () => {
    applyFilter();
  };
}

function applyFilter() {
  
  img.style.filter = `brightness(${b}) contrast(${c}) grayscale(${g}%) sepia(${s}%) invert(${i}%)`;
}

function changeBrightness() {
  const value = document.getElementById("Brightness").value; // expecting 0..100
  
  b = (value * 2) / 100;
  applyFilter();
}

function changeContrast() {
  const value = document.getElementById("Contrast").value;
  c = (value * 2) / 100;
  applyFilter();
}

function changeGrayscale() {
  const value = document.getElementById("Grayscale").value;
  g = Number(value);
  applyFilter();
}

function changeSepia() {
  const value = document.getElementById("Sepia").value;
  s = Number(value);
  applyFilter();
}

function changeInvert() {
  const value = document.getElementById("Invert").value;
  i = Number(value);
  applyFilter();
}

function reset() {
  
  b = 1;
  c = 1;
  g = 0;
  s = 0;
  i = 0;

 
  document.getElementById("Brightness").value = "50"; 
  document.getElementById("Contrast").value = "50";  
  document.getElementById("Grayscale").value = "0";
  document.getElementById("Sepia").value = "0";
  document.getElementById("Invert").value = "0";

  applyFilter();
}

function download() {
 
  const srcAttr = img.getAttribute("src");
  if (!srcAttr || srcAttr.trim() === "" || img.style.display === "none") {
    alert("Please upload the image first.");
    return;
  }

  
  if (!img.complete) {
    alert("Image upload is in progress. Please wait...");
    return;
  }

  
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  
  const filter = getComputedStyle(img).filter;
  ctx.filter = filter === "none" ? "none" : filter;

 
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  const dataURL = canvas.toDataURL("image/png");

  const anchorTag = document.createElement("a");
  anchorTag.href = dataURL;
  anchorTag.download = "editedImage.png";

  document.body.appendChild(anchorTag);
  anchorTag.click();
  document.body.removeChild(anchorTag);
}
