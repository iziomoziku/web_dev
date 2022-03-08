let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    $("#btn").click(function () {
      console.log(this.responseText);
    });
    // document.getElementById("demo").innerHTML = this.responseText;
  }
};

xhttp.open("GET", "data.txt", true);
xhttp.send();
