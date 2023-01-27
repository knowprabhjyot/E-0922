// onload event
// scroll event
// dblclick event

// create elements in dom using js
// delete elements in dom using js

// todo application

// You can also use this event if you want to load DOM before executing javascript
// window.addEventListener("load", function() {

    let container = document.getElementById('container'); // recommended
    let addButton = document.getElementById('addButton'); // add button
    let deleteButton = document.getElementById('deleteButton'); // delete button


    let numberOfBlocks = 0;
    addButton.addEventListener('click', function() {
        
        numberOfBlocks++;
        // How we can create elements by using JS
        let block = document.createElement('div'); // <div></div>
        // block.style.background = 'green'; /// this adds yellow to our div
        // block.style.width = '150px';
        // block.style.height = '150px'; // div element which is yellow in color, height = 200, width = 200

        block.classList.add('block');
        block.setAttribute('id', numberOfBlocks);
        block.textContent = numberOfBlocks;
        container.appendChild(block);


        let blockItem = document.querySelectorAll('.block');

        for (let i = 0 ; i < blockItem.length; i++) {
            blockItem[i].addEventListener('mouseover', function() {
                blockItem[i].style.transform = "rotate(50deg)";
            })
        }
      

    })


    // Delete Button 
    deleteButton.addEventListener('click', function() {
        container.removeChild(container.lastChild);
    })


    // })


