document.addEventListener("DOMContentLoaded",
    function (event) {
                function show(event) {
                    this.textContent = "showed" ;
                    console.log(event);
                    var l1 = document.getElementById("l1");
                    var l2 = document.getElementById("l2");
                    var l3 = document.getElementById("l3");
                    var l4 = document.getElementById("l4");

                    var message1 = "<h2>HTML" + l1 + "</h2>";
                    var message2 = "<h2>CSS" + l2 + "</h2>";
                    var message3 = "<h2>BOOTSTRAP" + l3 + "</h2>";
                    var message4 = "<h2>JAVASCRIPT" + l4 + "</h2>";

                    document.getElementById("works").innerHTML = message1;
                    document.getElementById("works").innerHTML = message2;
                    document.getElementById("works").innerHTML = message3;
                    document.getElementById("works").innerHTML = message4;
                }
    })