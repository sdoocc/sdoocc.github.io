
function gotoLogin() {
    const { ipcRenderer } = require('electron')
    ipcRenderer.send('loginHtml')
}
window.ws = new WebSlides({autoslide: 20000, loop: false});