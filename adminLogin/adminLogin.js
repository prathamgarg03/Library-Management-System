const button1 = document.querySelector("#LoginButton");
button1.onclick = goToHomePage;

function goToHomePage(){
   const path = "../adminHome/adminHome.html";
   window.open(path, "_parent");
}

class Book{
    constructor(name,author,publisher,quantity) {
        this.name = name;
        this.author = author;
        this.publisher = publisher;
        this.quantity = quantity;
    }
}

const add_button = document.querySelector("#add_button");
add_button.addEventListener('click', function(evt) {
    evt.preventDefault();
    addBook();
});

function addBook() {
    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let publisher = document.getElementById('publisher').value;
    let quantity = document.getElementById('quantity').value;

    let tempBook = new Book(name, author, publisher, quantity);
    console.log(tempBook);

    let tempDisplay = new displayTable();
    tempDisplay.add(tempBook);
    tempDisplay.clear();
}
    



//add_button

