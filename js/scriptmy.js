document.addEventListener("DOMContentLoaded",
    function enter() {
    document.getElementById("bu").addEventListener("click", hexademical);
    function hexademical() {
        var hexv = document.getElementById("binarynum").value;
        var hex = parseInt(hexv, 2).toString(16).toUpperCase();
        document.getElementById("hexa").value = hex;
    }
}
);

function pascalValue(row, col) {
  if ( col  === 0) {
    return 1;
  } else if (row === 0) {
    return 0;
  } else {
    return pascalValue(row -1, col) + pascalValue(row - 1, col - 1);
  }
}

function pascalTriangle() {
    var height = document.getElementById("tri").value;
    var result = "";
    var space = "&nbsp;"

    for (var i = 0; i < height; i++) {
        for (var j= 0; j <= i; j++) {
            result += pascalValue(i, j) + space + "";
        }
        result += "<br>";
    }
    document.getElementById("pas").innerHTML = result;
    console.log(result);
}