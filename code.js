function detectDevice() {
    const userAgent = navigator.userAgent;
    const iOS = /iPad|iPhone|iPod/.test(userAgent);
    const android = /Android/i.test(userAgent);

    if (iOS) {
    document.getElementById('androidBtn').style.display = 'none';
    } else if (android) {
    document.getElementById('appleBtn').style.display = 'none';
    }
}
window.onload = detectDevice;