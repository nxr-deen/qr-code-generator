const input = document.getElementById("qr-input");
const generateBtn = document.getElementById("generate-btn");
const downloadBtn = document.getElementById("download-btn");
const qrContainer = document.getElementById("qr-code");
const qrSection = document.getElementById("qr-section");

let qrCode;

generateBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) {
    alert("Please enter some text or URL");
    return;
  }

  // Clear previous QR code
  qrContainer.innerHTML = "";
  downloadBtn.classList.add("hidden"); // Hide download button initially

  // Generate new QR code
  qrCode = new QRCode(qrContainer, {
    text: text,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
  });

  // Show QR section
  qrSection.classList.remove("hidden");

  // Reveal download button after QR code is generated
  setTimeout(() => {
    downloadBtn.classList.remove("hidden"); // Show download button
  }, 300); // Delay of 300ms
});

downloadBtn.addEventListener("click", () => {
  const img =
    qrContainer.querySelector("img") || qrContainer.querySelector("canvas");
  if (!img) return;

  const link = document.createElement("a");
  link.href = img.src || img.toDataURL("image/png");
  link.download = "qr-code.png";
  link.click();
});
