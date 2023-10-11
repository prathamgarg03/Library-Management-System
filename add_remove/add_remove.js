var arrayOfBooks = [];

function DisplayTable() {

}

DisplayTable.prototype.add = function (tempBook) {
    tableB = document.getElementById('tableB');
    let tempStr = ` <tr>
                        <td>${tempBook.name}</td>
                        <td>${tempBook.author}</td>
                        <td>${tempBook.publisher}</td>
                        <td>${tempBook.quantity}</td>
                    </tr>`;
    tableB.innerHTML += tempStr;
}

DisplayTable.prototype.clear = function () {
    add_form = document.getElementById('add_form');
    add_form.reset();
}


class Book {
    constructor(name, author, publisher, quantity) {
        this.name = name;
        this.author = author;
        this.publisher = publisher;
        this.quantity = quantity;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const add_button = document.querySelector("#add_button");
    add_button.addEventListener('click', function (evt) {
        evt.preventDefault();
        addBook();
    });
});



function addBook() {
    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let publisher = document.getElementById('publisher').value;
    let quantity = document.getElementById('quantity').value;

    let tempBook = new Book(name, author, publisher, quantity);
    console.log(tempBook);

    let tempDisplay = new DisplayTable();
    tempDisplay.add(tempBook);
    tempDisplay.clear();
    arrayOfBooks.push(tempBook);

    //tempDisplay.clear();
}







//add_button

