const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray =  getChapterList() || [];

// Populates the list of chapters 
chaptersArray.forEach(chapter => {
    displayList (chapter);
});

button.addEventListener('click', () => {
    // Cheks if the input is empty
    if (input.value != "") {
        // Gets the added chapter
        displayList(input.value);
        // Puts the chapter in the array
        chaptersArray.push(input.value);
        // Updates the storage with the new array
        setChapterList();
        // Remove the item from the list
        input.value = ""
        // Focus input box
        input.focus();
    }
});

function displayList(item) {
    // Create a list
    let li = document.createElement('li');
            
    // Create a delete button
    let deleteButton = document.createElement('button');
    li.textContent = item;
    // Creates the delete icon
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");
    // Adds the delete button to the list item
    li.append(deleteButton);
    // Adds the list to the HTML list (ul id="list")
    list.append(li);

    // When the delete button is pressed
    deleteButton.addEventListener('click', () => {
        // Remove the item from the list
        li.removeChild(li);
        // Removes the chapter from the local storage and array
        deleteChapter(li.textContent);
        // Focus input box
        input.focus();
    });

    // Reset the input box to empty
    input.value = '';
}


function setChapterList() { 
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    localStorage.getItem(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
    //Slices off the last character
    chapter = chapter.slice(0, chapter.length - 1);
    // Returns everything but the chapters ti be removed
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}