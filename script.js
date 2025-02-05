// Function to update the current UTC time
function updateUTCTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.getElementById('utc-time').textContent = utcTime;
  }
  
  // Update the UTC time immediately and every second
  updateUTCTime();
  setInterval(updateUTCTime, 1000);