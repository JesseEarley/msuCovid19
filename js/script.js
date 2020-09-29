window.addEventListener("load", function() { 

    let editButtons = document.querySelectorAll('.icon-checkbox-checked');
    let switchCasesButton = document.querySelector('#SwitchCasesButton');
    
    editButtons.forEach(function(button){
        button.addEventListener('click', event => {
            let currentlySelected = document.querySelector('tr.bg-selected');
            if(currentlySelected != null){
                currentlySelected.classList.remove('bg-selected');
            }
            button.parentNode.parentNode.classList.add('bg-selected');
            let contactsTable = document.querySelector('#ContactsTable');
            contactsTable.style.display = 'block';
        });
    });

    switchCasesButton.addEventListener('click', event => {
        let switchCasesHeading = document.querySelector('#SwitchCasesHeading');
        if(switchCasesHeading.innerHTML === "Active Cases"){
            switchCasesHeading.innerHTML = "Inactive Cases";
        }
        else{
            switchCasesHeading.innerHTML = "Active Cases";
        }
        if(switchCasesButton.innerHTML === "View inactive cases"){
            switchCasesButton.innerHTML = "View active cases";
        }
        else{
           switchCasesButton.innerHTML = "View inactive cases"; 
        }
    });
    
});
