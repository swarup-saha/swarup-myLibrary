// console.log("Welcome to js programing");
// create constructor 
function book(name, author, type) {
    this.name = name
    this.author = author;
    this.type = type;
}

// create display constructor 
function Dispaly() {

}


// Add methods to display prototype

Dispaly.prototype.add = function (Book) {
    let tableId = document.getElementById('tableId');
    let usingi = `<tr>                      
                <td>${Book.name}</td>
                 <td>${Book.author}</td>
                 <td>${Book.type}</td>
                </tr> `;
    tableId.innerHTML += usingi;
}

Dispaly.prototype.clear = function () {
    let liberyForm = document.getElementById('liberyForm');
    liberyForm.reset();
}
Dispaly.prototype.validate = function (Book) {
    if (Book.name.length < 2 || Book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}
Dispaly.prototype.show = function (type, displaymessage) {
    let message = document.getElementById('alertid');
    message.innerHTML = `
                             <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>message:</strong> ${displaymessage}
                             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                             <span aria-hidden="true">&times;</span></button>
                                </div>
                            `;
    setTimeout(function () {
        message.innerHTML = ''
    }, 5000);
}


// Add submit event listener to liberyForm 
let liberyForm = document.getElementById('liberyForm')
liberyForm.addEventListener('submit', liberyFormsubmit);

function liberyFormsubmit(e) {
    console.log("this is a libery");
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('Author').value;
    let fiction = document.getElementById('fiction');
    let programing = document.getElementById('computerprog');
    let networking = document.getElementById('networking');
    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programing.checked) {
        type = programing.value;
    }
    else if (networking.checked) {
        type = networking.value;
    }

    let Book = new book(name, author, type);
    // console.log(Book);
    let display = new Dispaly();
    if (display.validate(Book)) {
        display.add(Book);
        display.clear();
        display.show('Success', 'Your book added successfully');
    }
    else {
        display.show('danger', 'Please enter the valid books name which length more than 3');
    }
    e.preventDefault();
}