let xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     $("#btn").click(function () {
//       // console.log(this.responseText);
//       document.getElementById("demo").innerHTML = this.responseText;
//     });
//     // document.getElementById("demo").innerHTML = this.responseText;
//   }
// };

function loadDoc() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // document.getElementById("demo").innerHTML = this.responseText;
      console.log(this.responseText);
    }
  };
  xhttp.open("GET", "data.txt", true);
  xhttp.send();
}

// $("button").click(function () {
//   $("#div1").load("demo_test.txt", function (responseTxt, statusTxt, xhr) {
//     if (statusTxt == "success") {
//       alert("External content loaded successfully!");
//     }
//     if (statusTxt == "error") {
//       alert("Error: " + xhr.status + ": " + xhr.statusText);
//     }
//   });
// });

// xhttp.open("GET", "data.txt", true);
// xhttp.send();
