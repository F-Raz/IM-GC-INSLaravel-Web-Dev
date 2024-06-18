let items = [
    ['001', 'Keyboard Zoom65', 2000000, 'Keyboard satisfying untuk ngoding', 'Keyboard-Zoom65.jpg'],
    ['002', 'Lenovo Thinkpad', 20000000, 'Laptop terbaik untuk ngoding', 'Lenovo-Thinkpad.jpg'],
    ['003', 'TWS Soundcore R50i', 190000, 'TWS terjangkau dengan kualitas yang bagus', 'TWS-Soundcore-R50i.jpg'],
    ['004', 'Headset Razer', 3000000, 'Mouse yang disukai', 'Headset-Razer.jpg']
];

let card = document.getElementById("wrap");
let list = document.getElementById("listBarang");
let qty = document.getElementById("qty");

let itemCount = 0;
qty.innerHTML = `(${itemCount})`;

// Fungsi untuk menampilkan semua item
function displayItems(items) {
    list.innerHTML = '';
    items.forEach(item => {
        let cardEl = `
            <div class="card mx-1" style="width: 18rem;">
                <img src="Image/${item[4]}" class="card-Image-top" height="287px" width="287px" alt="${item[1]}">
                <div class="card-body">
                    <h5 class="card-title">${item[1]}</h5>
                    <p class="card-text">${item[3]}</p>
                    <p class="card-text">${item[2]}</p>
                    <a href="#" class="btn btn-primary" onclick="addToCart()">Add to cart</a>
                </div>
            </div>
        `;
        list.innerHTML += cardEl;
    });
}

// Fungsi untuk menambah item ke keranjang
function addToCart() {
    itemCount++;
    qty.innerHTML = `(${itemCount})`;
}

// Fungsi untuk mencari item berdasarkan keyword
document.getElementById("formItem").addEventListener('submit', function (e) {
    e.preventDefault();
    let keyword = document.getElementById("keyword").value.toLowerCase();
    let filteredItems = items.filter(item => item[1].toLowerCase().includes(keyword));
    displayItems(filteredItems);
});

// Tampilkan semua item saat halaman pertama kali dimuat
displayItems(items);
