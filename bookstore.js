const bookstore = {
  books: [
    "Far From The Madding Crowd",
    "Jude The Obscure",
    "Desperate Remedies",
    "The Woodlanders",
    "Under The Greenwood Tree",
  ],
  displayBookstore() {
    const renderTarget = document.getElementById("bookstore");
    const bookList = this.books.map((book) => `<p>${book}</p>`);
    renderTarget.innerHTML = bookList.join("");
    shoppingCart.displayCart(this.removeBook.bind(this));
  },
  removeBook(title) {
    let newList = this.books.filter((book) => book != title);
    this.books = newList;
    this.displayBookstore();
  },
};

const shoppingCart = {
  itemsInCart: ["The Woodlanders"],
  handleClick(removeBook) {
    removeBook(this.itemsInCart);
    payment.displayBooksForPayment(this.itemsInCart);
  },
  displayCart() {
    const renderTarget = document.getElementById("cart");
    const itemsInCart = this.itemsInCart.map((item) => `<p>${item}</p>`);
    const checkoutButton = "<button id='checkout'>Check out</button>";
    renderTarget.innerHTML = itemsInCart.join("") + checkoutButton;
    document
      .getElementById("checkout")
      .addEventListener("click", () => this.handleClick(clickHandler));
  },
};

const payment = {
  displayBooksForPayment(cartItems) {
    const renderTarget = document.getElementById("payment");
    const itemsForPayment = cartItems.map((item) => `<p>${item}</p>`);
    const payButton = "<button id='payment'>Pay here</button>";
    renderTarget.innerHTML = itemsForPayment.join("") + payButton;
    document
      .getElementById("payment")
      .addEventListener("click", () =>
        alert(`TRISTAN JOEL IS PAYING NOW FOR ${cartItems}!!!`)
      );
  },
};
