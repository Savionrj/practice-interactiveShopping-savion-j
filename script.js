window.addEventListener('load', () => {

  const addButtonElement = document.getElementById('cartAdd');
  const cartListElement = document.getElementById('cartList');

  function addListItem() {
    // retrieves input data (grocery item) and assigns it to newItem
    const newItem = document.getElementById('item').value;

    // creates new list item element and remove button element
    let li = document.createElement('li');
    let removeButton = document.createElement('button');
    let editButton = document.createElement('button');
    let itemText = document.createElement('span');
    itemText.innerHTML = newItem;
    removeButton.innerHTML = 'remove';
    editButton.innerHTML = 'edit';

    // gives list item element an id matching what the item is + gives all remove buttons the class removeListItem
    li.setAttribute('id', newItem);
    removeButton.setAttribute('class', 'removeButton');
    editButton.setAttribute('class', 'editButton');

    /*
    let editBox = document.createElement('input');
    editBox.type = 'text';
    editBox.style.display = 'none';
    editBox.value = li.innerHTML;
    editBox.textContent = li.innerHTML
    */

    // this was tricky, spent over an hour working towards this one line
    // assigns click event listener to each new remove button
    removeButton.addEventListener('click', removeListItem);
    //editButton.addEventListener('click', editListItem(itemText, editBox));

    // joins everything into one list item, which is then added to the list
    li.appendChild(itemText);
    li.appendChild(editButton);
    li.appendChild(removeButton);
    //li.appendChild(editBox);
    cartListElement.appendChild(li);

    // resets input field to an empty string
    document.getElementById('item').value = '';

  }

  function removeListItem(event) {
    // selects parent of clicked remove button + the parent is the list item (li) the clicked remove button is inside of
    const selectedItemToRemove = event.target.parentElement;

    // deletes the selected list item + deletes its contents
    selectedItemToRemove.remove();
  }

  /*
  function editListItem(li, editBox) {

    // Replace text span with input
    console.log(editBox);
    console.log(li);
    li.replaceChild(editBox, li);

    // Change Edit button to Save
    editButton.textContent = 'Save';

    // Swap click handler to Save behavior
    editButton.onclick = () => {
      textSpan.textContent = editBox.value;
      li.replaceChild(li, editBox);
      editButton.textContent = 'Edit';
    };
  }
    */

  // Event Listeners
  addButtonElement.addEventListener('click', addListItem);

});
