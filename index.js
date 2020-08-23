function akanNames() {
  var CC, YY, MM, DD, dValue;
  var dNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var mNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var fNames = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];

  var CC = parseInt(document.getElementById("main").value);
  var YY = parseInt(document.getElementById("name").value);
  var MM = parseInt(document.getElementById("form").value);
  var DD = parseInt(document.getElementById("year").value);

  if (CC.value == "" || YY.value == "" || MM.value == "" || DD.value == "") {
    alert("please input valid information");
  }
  var gender = document.querySelector('input[name="gender"]:checked').value;

  var dValue =
    parseInt(CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) %
    7;
  switch (gender) {
    case "male":
      if (dValue == 1) {
        alert(
          "you were born on " +
            dNames[1] +
            " and your ghanaian name is " +
            mNames[1] +
            "."
        );
      } else if (dValue == 2) {
        alert(
          "you were born on " +
            dNames[2] +
            " and your ghanaian name is " +
            mNames[2] +
            "."
        );
      } else if (dValue == 3) {
        alert(
          "you were born on " +
            dNames[3] +
            " and your ghanaian name is " +
            mNames[3] +
            "."
        );
      } else if (dValue == 4) {
        alert(
          "you were born on " +
            dNames[4] +
            " and your ghanaian name is " +
            mNames[4] +
            "."
        );
      } else if (dValue == 5) {
        alert(
          "you were born on " +
            dNames[5] +
            " and your ghanaian name is " +
            mNames[5] +
            "."
        );
      } else if (dValue == 6) {
        alert(
          "you were born on " +
            dNames[6] +
            " and your ghanaian name is " +
            mNames[6] +
            "."
        );
      } else if (dValue == 7) {
        alert(
          "you were born on " +
            dNames[7] +
            " and your ghanaian name is " +
            mNames[7] +
            "."
        );
      }
      break;
    case "female":
      if (dValue == 1) {
        alert(
          "you were born on " +
            dNames[1] +
            " and your ghanaian name is " +
            fNames[1] +
            "."
        );
      } else if (dValue == 2) {
        alert(
          "you were born on " +
            dNames[2] +
            " and your ghanaian name is " +
            fNames[2] +
            "."
        );
      } else if (dValue == 3) {
        alert(
          "you were born on " +
            dNames[3] +
            " and your ghanaian name is " +
            fNames[3] +
            "."
        );
      } else if (dValue == 4) {
        alert(
          "you were born on " +
            dNames[4] +
            " and your ghanaian name is " +
            fNames[4] +
            "."
        );
      } else if (dValue == 5) {
        alert(
          "you were born on " +
            dNames[5] +
            " and your ghanaian name is " +
            fNames[5] +
            "."
        );
      } else if (dValue == 6) {
        alert(
          "you were born on " +
            dNames[6] +
            " and your ghanaian name is " +
            fNames[6] +
            "."
        );
      } else if (dValue == 7) {
        alert(
          "you were born on " +
            dNames[7] +
            " and your ghanaian name is " +
            fNames[7] +
            "."
        );
      }
      break;
    default:
  }
}
