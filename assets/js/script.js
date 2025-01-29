function displayUTC() {
    var currentTime = new Date().toUTCString();
    
    document.getElementById("utc-time").textContent = currentTime;
}

displayUTC();
