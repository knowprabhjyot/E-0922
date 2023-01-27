let tableContainer = document.querySelector('#table-container');

let table = document.createElement('table'); // This will create <table></table>

tableContainer.appendChild(table);

let tableHeadings = ['Name', 'Year', 'Genre'];

let arrayOfMovies = [
    {
        title: "Pirates of the Carrabean",
        year: 2003,
        genre: 'Mystery',
    },
    {
        title: "MIB",
        year: 1997,
        genre: "Sci-fi"
    },
    {
        title: "Interstellar",
        year: 2014,
        genre: "Sci-fi"
    },
    {
        title: "Ironman",
        year: 2008,
        genre: "Sci-fi"
    },
    {
        title: "Johny English",
        year: 2003,
        genre: "Comedy"
    }
];


(function createHeading() {
    let tr = document.createElement('tr'); // First we will create a row
    for (let i = 0 ; i < tableHeadings.length; i++) { // We will run a loop over the table headings
        let th = document.createElement('th'); // We will create table heading everytime until the loop runs
        th.textContent = tableHeadings[i]; // We will add values to the table Headings
        th.classList.add('tableHeading');
        tr.appendChild(th); // We will append created Table heading to that table row
    }

    table.appendChild(tr);
})(); // IIFE - Immediately Invoked Functions

// createHeading(); // IIFE - Immediately Invoked Functions


/*

<table>
    <tr>
        <th> Title </th>

        <th> Year </th>

        <th> Genre</th>
    </tr>

    <tr>
        <td>
            Pirates of the Carrabean
        </td>

        <td>
            2003
        </td>
    
        <td>
            Mystery
        </td>
    </tr>




</table>



*/

function createData() {
    for (let i = 0 ; i < arrayOfMovies.length; i++) { // The number of elements in the array === number of rows
        let tr = document.createElement('tr');


        //  THIS IS NOT EFFICIENT, SINCE IT ONLY ADDS 3 Table Data  // 
        // let td1 = document.createElement('td');


        // td1.textContent = arrayOfMovies[i].title;

        // tr.appendChild(td1);


        // let td2 = document.createElement('td');


        // td2.textContent = arrayOfMovies[i].year;

        // tr.appendChild(td2);

        // let td3 = document.createElement('td');

        // td3.textContent = arrayOfMovies[i].genre;

        // tr.appendChild(td3);

        // // for (let key in arrayOfMovies[i])



        // THIS WAY IS BETTER BECAUSE IT MAKES IT DYNAMIC!
        for (let key in arrayOfMovies[i])  {         // { title: "Pirates", year: 2003, genre: "Mystery"}
            let td = document.createElement('td'); 
            td.textContent = arrayOfMovies[i][key];

            td.classList.add('tableData');

            tr.appendChild(td);
        }
        

       

        table.appendChild(tr);
    }
}

createData();