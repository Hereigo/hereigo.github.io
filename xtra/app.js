
(function () {
    'use strict'
    feather.replace({ 'aria-hidden': 'true' });
})();


function tabSwitch(evt, tabName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("center");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "grid";
    evt.currentTarget.className += " active";
}