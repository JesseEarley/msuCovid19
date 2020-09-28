window.addEventListener("load", function() { 

    let editButtons = document.querySelectorAll('.icon-checkbox-checked');
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
    
});
