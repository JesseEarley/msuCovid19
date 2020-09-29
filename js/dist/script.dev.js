"use strict";

window.addEventListener("load", function () {
  var editButtons = document.querySelectorAll('.icon-checkbox-checked');
  var switchCasesButton = document.querySelector('#SwitchCasesButton');
  editButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      var currentlySelected = document.querySelector('tr.bg-selected');

      if (currentlySelected != null) {
        currentlySelected.classList.remove('bg-selected');
      }

      button.parentNode.parentNode.classList.add('bg-selected');
      var contactsTable = document.querySelector('#ContactsTable');
      contactsTable.style.display = 'block';
    });
  });
  switchCasesButton.addEventListener('click', function (event) {
    var switchCasesHeading = document.querySelector('#SwitchCasesHeading');

    if (switchCasesHeading.innerHTML === "Active Cases") {
      switchCasesHeading.innerHTML = "Inactive Cases";
    } else {
      switchCasesHeading.innerHTML = "Active Cases";
    }

    if (switchCasesButton.innerHTML === "View inactive cases") {
      switchCasesButton.innerHTML = "View active cases";
    } else {
      switchCasesButton.innerHTML = "View inactive cases";
    }
  });
});