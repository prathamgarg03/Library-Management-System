const firebaseConfig = {
    apiKey: "AIzaSyByusMHtNMMtKsHcbsatmwgymD9nlwuIu0",
    authDomain: "library-management-syste-9b904.firebaseapp.com",
    databaseURL: "https://library-management-syste-9b904-default-rtdb.firebaseio.com",
    projectId: "library-management-syste-9b904",
    storageBucket: "library-management-syste-9b904.appspot.com",
    messagingSenderId: "579021273060",
    appId: "1:579021273060:web:65b743966ea659026eb9f1",
    measurementId: "G-X410SE23SB"
  };


firebase.initializeApp(firebaseConfig);

var lms = firebase.database().ref("library-management-syste");

document.getElementById('add_form').addEventListener('submit', submitAddForm);

function submitAddForm(e) {
    e.preventDefault();
    var name = getValue('name');
    var author = getValue('author');
    var publisher = getValue('publisher');
    var quantity = getValue('quantity');

    // console.log(name, author, publisher, quantity);
    saveElm(name, author, publisher,  quantity); 
}

const saveElm = (name, author, publisher, quantity) => {
    var newForm = lms.push();
    
    newForm.set({
        name : name,
        author : author,
        publisher : publisher,
        quantity : quantity,
    });

}
const getValue = (id) => {
    return document.getElementById(id).value;
}
var arrayOfBooks =[];

function DisplayTable(){

}

DisplayTable.prototype.add = function(tempBook) {
    tableB = document.getElementById('tableB');
    let tempStr = ` <tr>
                        <td>${tempBook.name}</td>
                        <td>${tempBook.author}</td>
                        <td>${tempBook.publisher}</td>
                        <td>${tempBook.quantity}</td>
                    </tr>`;
    tableB.innerHTML += tempStr;
}

DisplayTable.prototype.clear = function(){
    add_form = document.getElementById('add_form');
    add_form.reset();
}


class Book {
    constructor(name,author,publisher,quantity) {
        this.name = name;
        this.author = author;
        this.publisher = publisher;
        this.quantity = quantity;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const add_button = document.querySelector("#add_button");
    add_button.addEventListener('click', function(evt) {
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

