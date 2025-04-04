// The three variables will select the specific html elements 
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});
 button.addEventListener('click', () => {
    if (input.value != ''){ //make sure the input is not empty
        displayList(input.value); // call the function that outputs the submitted chapter
        chaptersArray.push(input.value); // add the chapter to the array
        setChapterList(); // update the localStorage with the new array
        input.value = ''; // clear the input
        input.focus(); // set the focus back to the input
    }
});

function displayList(item) {
        const book = document.createElement('li');
        
        const delButton = document.createElement('button');
        
        // notw the use of the displayList paramenter 'item'
        book.textContent = item;
        
        
        delButton.textContent = '❌';
        
        delButton.classList.add('delete');
        
       
        book.append(delButton);
        
        
        list.append(book);

       
        delButton.addEventListener('click', function(){
            list.removeChild(book);
            deleteChapter(book.textContent);
            input.focus();
        });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.lenght - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
} 
// // The following will add an even listener to make the button of 'Add Chapter" work
// button.addEventListener('click', function(){
//     if (input.value.trim() !== ''){
//         // The variable will create the li elemenet
//         const book = document.createElement('li');
        
//         // the variable will create the delete button
//         const delButton = document.createElement('button');
        
//         // The following will input the value the user writes into the li element
//         book.textContent = input.value;
        
//         // This will show the 'x' as the button so element cna be deleted
//         delButton.textContent = '❌';
        
//         //This will add the li element with the 'x' button
//         book.append(delButton);
        
//         // This will add the li element to the list variable
//         list.append(book);

//         // The following will activate the delete function of the delete button
//         delButton.addEventListener('click', function(){
//             list.removeChild(book);
//             input.focus();
//         });

//         //This will change the input value to an empty string
//         input.value = '';

//         // 
//         input.focus();
//     }

// });