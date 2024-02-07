const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// The button is pressed
button.addEventListener('click', () => {
    //If the input is not empty...
    if (input.value !== '') {

        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        
        li.innerHTML = input.value;
        deleteButton.textContent = "❌";
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', () => {
            li.remove();
            input.focus();
        });

        input.value = '';
    } 
    else {
        input.focus();
        alert("Input has no value.");
    }
});