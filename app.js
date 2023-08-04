
const btnConfirm = document.getElementById('botonRegister');
const gastosCategoria = [];
const btndelete = document.getElementById('botonDelete')
let categoria;
let gasto;
btnConfirm.addEventListener('click', function () {
  let total = 0;
  const input = document.getElementById('inputText');
  const categorias = document.querySelector('select');
  categorias.classList.remove('hidden')
  input.classList.remove('hidden')

  if (input.value >= 1) {
    const categoria = document.querySelector('select').value;
    const porcentaje = document.getElementById('container-Porcentajer')
    const gasto = parseInt(document.getElementById('inputText').value);
    localStorage.setItem(categoria, gasto)
    location.reload()
    document.getElementById('inputText').value = '';
  } else {
    console.log('Verifique solo numeros positivos')
  }
});

//Loading of local storage
const porcentaje = document.getElementById('container-Porcentajer')
let local = window.localStorage;
const arrayGasto = Object.entries(local)
arrayGasto.forEach(gasto => {
  const div = document.createElement('div');
  div.classList.add('dashboard')
  const p = document.createElement('p');
  porcentaje.appendChild(div);
  div.appendChild(p);
  p.innerText = `Categoria ${gasto[0]} Realizo gasto de :$ ${gasto[1]}`;
  console.log(typeof (categoria))
});
//result of localstore



btndelete.addEventListener('click', () => {

  const alertaEliminacion = confirm('Seguro de eliminar datos?');
  if (alertaEliminacion) {
    localStorage.clear();
    location.reload()
  } else {

  }

});

