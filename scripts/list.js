// ADDING ITEMS TO START AND END OF LIST
let list = document.getElementsByTagName('ul')[0];
// Get the <ul> element

// ADD NEW ITEM TO END OF LIST
let newLastItem = document.createElement('li');// Create element
let newTextLast = document.createTextNode('half and half cream');// Create text node
newLastItem.appendChild(newTextLast);// Add text node to element
list.appendChild(newLastItem);// Add element end of list

// ADD NEW ITEM START OF LIST
// Create element
let newFirstItem = document.createElement('li');
// Create text node
let textFirst = document.createTextNode('lettuce');
// Add text node to element
newFirstItem.appendChild(textFirst);
// Add element to list
list.insertBefore(newFirstItem, list.firstChild);



// All <li> elements
let listItems = document.getElementsByTagName('li');

// ADD A CLASS OF COOL TO ALL LIST ITEMS
let i;
for (i = 0; i < listItems.length; i++){
    listItems[i].className = 'cool';
}
// Counter variable
// Loop through elements
// Change class to cool


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
let heading = document.querySelector('h2');

// h2 element
let headingText = heading.firstChild.nodeValue;
// h2 text
let totalItems = listItems.length;
// No. of <li> elements
let newHeading = headingText + '<span>' + totalItems + '</span>';
// Content
heading.innerHTML = newHeading;
// Update h2 using innerHTML (not textContent) because it contains markup
