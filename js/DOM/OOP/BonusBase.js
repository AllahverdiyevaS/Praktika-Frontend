class BonusBase {
  discount = 10;
  constructor(firstName, lastName, hasKart, products) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hasKart = hasKart;
    this.products = products;
  }
  hesabla() {
    let total = 0;
    if (this.checkProducts(this.products)) {
      if (this.hasKart) {
        this.products.forEach((product) => {
          total += (product.price * (100 - this.discount)) / 100;
        });
      }
    } else {
      this.products.forEach((product) => (total += product.price));
    }
    return total;
  }
  checkProducts() {
    if (this.products.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
const test1 = new BonusBase();
test1.hesabla();
