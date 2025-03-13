// The three variables will select the specific html elements 
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


// The following will add an even listener to make the button of 'Add Chapter" work
button.addEventListener('click', function(){
    if (input.value.trim() !== ''){
        // The variable will create the li elemenet
        const book = document.createElement('li');
        
        // the variable will create the delete button
        const delButton = document.createElement('button');
        
        // The following will input the value the user writes into the li element
        book.textContent = input.value;
        
        // This will show the 'x' as the button so element cna be deleted
        delButton.textContent = '❌';
        
        //This will add the li element with the 'x' button
        book.append(delButton);
        
        // This will add the li element to the list variable
        list.append(book);

        // The following will activate the delete function of the delete button
        delButton.addEventListener('click', function(){
            list.removeChild(book);
            input.focus();
        });

        //This will change the input value to an empty string
        input.value = '';

        // 
        input.focus();
    }

});