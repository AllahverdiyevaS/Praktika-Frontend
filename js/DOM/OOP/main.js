const products = [
  { name: "Product 1", price: 100 },
  { name: "Product 2", price: 200 },
  { name: "Product 3", price: 300 },
];
let message = `Markete xos geldiz.Bonus Kartiniz varmi? 
1 -Beli 
2 -Xeyr`;
let result = confirm(message);
if (result) {
  let firstName = prompt("Adiniz:");
  let lastName = prompt("Soyadiniz:");
  const customer = new Customer(firstName, lastName, result, products);
  total = customer.hesabla();
  console.log(`Müştəri məlumatları: ${firstName} ${lastName} 
    Ödəniləcək məbləğ: ${total}
        `);
} else {
  const customer = new Customer(null, null, result, products);
  odenilecekTutar = customer.hesabla();
  console.log(`Ödəniləcək Məbləğ: ${total}`);
}
