
function showAlert(id) {
  var select = document.getElementById(id);
  var selectedOption = select.options[select.selectedIndex];
  alert("You have selected the option with value: " + 
  selectedOption.value + " and text: " + selectedOption.text);
}