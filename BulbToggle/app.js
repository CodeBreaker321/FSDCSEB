function toggleBulb(bulbId) {
    const bulb = document.getElementById(bulbId);
    if (bulb.src.includes('bulb_off.png')) {
        bulb.src = 'bulb_on.png'; // Change to glowing bulb image
    } else {
        bulb.src = 'bulb_off.png'; // Change back to non-glowing bulb image
    }
}