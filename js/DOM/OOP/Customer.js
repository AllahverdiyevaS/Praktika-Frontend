class Customer extends BonusBase {
  constructor(firstName, lastName, hasKart, products) {
    super(firstName, lastName, hasKart, products);
  }
  hesapla() {
    return super.hesabla();
  }
}
