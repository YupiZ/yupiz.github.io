

function detectDevice() {
    const userAgent = navigator.userAgent;
    const iOS = /iPad|iPhone|iPod/.test(userAgent);
    const android = /Android/i.test(userAgent);

    if (iOS) {
        document.getElementById('androidBtn').classList.add('hide');
        document.getElementById('appleBtn').classList.remove('hide');
    } else if (android) {
        document.getElementById('appleBtn').classList.add('hide');
        document.getElementById('androidBtn').classList.remove('hide');
    } else {
        document.getElementById('appleBtn').classList.remove('hide');
        document.getElementById('androidBtn').classList.remove('hide');
    }
}
window.onload = detectDevice;