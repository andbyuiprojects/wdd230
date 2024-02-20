const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// The button is pressed
button.addEventListener('click', addChapter);


input.addEventListener("keypress", (e) => {
    // Check if the enter key was pressed
    if(e.key.lower() == "enter"){
        
        // Run callback addChapter function
        addChapter();
    }
});

// The function for adding a chapter
function addChapter(){
     // If the input is not empty...
    if (input.value !== '') {

        // Create a list
        const li = document.createElement('li');
        
        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute("aria-label", `Remove ${input.value}`);

        // Assigns the input value to a list element
        li.innerHTML = input.value;
        // Creates the delete icon
        deleteButton.textContent = "❌";
        // Adds the delete button to the list item
        li.append(deleteButton);
        // Adds the list to the HTML list (ul id="list")
        list.append(li);

        // When the delete button is pressed
        deleteButton.addEventListener('click', () => {
            // Remove the item from the list
            li.remove();
            // Focus input box
            input.focus();
        });

        // Reset the input box to empty
        input.value = '';
    } 
    
    // Alert the user and focus the input if the input has no value
    else {
        input.focus();
        alert("Input has no value.");
    }
}