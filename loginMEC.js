function validate() {
  var p = document.getElementById("pass").value;
  if (p === "MEC2020$$!") {
    openIn();
  } else {
    alert("Incorrect Password! ACCESS DENIED");
  }
}

function openIn() {
  myWindow = window.open("https://meet.google.com/ryx-pnni-rji", "_blank");
}
