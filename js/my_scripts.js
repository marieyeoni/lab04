function click1() {
    var lab01 = "../lab04/report/index.html";
    var path = '<iframe src="' + lab01 + '"></iframe>'
    document.getElementById("file").innerHTML = path;
}
function click2() {
    var lab02 = "../lab04/report/index.html";
    var path = '<iframe src="' + lab02 + '"></iframe>'
    document.getElementById("file").innerHTML = path;
}
function click3() {
    var lab03 = "../lab04/report/indexl3.html";
    var path = '<iframe src="' + lab03 + '"></iframe>'
    document.getElementById("file").innerHTML = path;
}
function click4() {
    var lab04 = "../lab04/report/indexl4.html";
    var path = '<iframe src="' + lab04 + '"></iframe>'
    document.getElementById("file").innerHTML = path;
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')
);