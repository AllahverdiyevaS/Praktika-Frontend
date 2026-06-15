function hesabla() {
  setTimeout(() => {
    topla(7, 5);
  }, 1000);
}
function topla(a, b) {
  setTimeout(() => {
    console.log(a + b);
  }, 500);
}
hesabla();
