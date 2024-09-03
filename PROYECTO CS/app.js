//utilizamos json para evitar tener tantos datos en el js
import datos from "../data/data.json" with { type: "json" };
console.log(datos)
import {Gift} from './JS/clases.js'

const cuerpoTabla = document.querySelector('#cuerpo-tabla')

//acomodar la tabla con los datos del json
const cargarTabla = () => {


    cuerpoTabla.innerHTML=''

    datos.map((item) => {

        const fila = document.createElement('tr')

        const celdas = `<td>${item.gift}</td>
                        <td>${item.tipo}</td>
                        <td>${item.tiempo}</td>
                        <td>$ ${item.precio}</td>
                        <td>
                        <div class="d-flex gap-2"> 
                        <button class="btn btn-outline-danger" onclick="borrarGift(${item.id})"><i class="fa-solid fa-x"></i></button>
                        </div>
                        </td> `
//acomodar datos de json en la tabla generada anteriormente
        fila.innerHTML = celdas
        cuerpoTabla.append(fila)
    })


}
// agregar datos a la consola
const agregarGift=(event)=>{
event.preventDefault()
//llamar arreglos del json
//agregar dato despues del ultimo agregado
let id = datos.at(-1).id + 1
let gift = document.querySelector('#gift').value
let tipo = document.querySelector('#tipo').value
let tiempo = document.querySelector('#tiempo').value
let precio = document.querySelector('#precio').value
let imagen = document.querySelector('#imagen').value

datos.push(new Gift(id, gift, tipo, tiempo, precio, imagen));
//resetear formulario
  document.querySelector("#formGift").reset();
  cargarTabla();

}
//window para agregar borrarGift al browser Objetct model
window.borrarGift=(id)=>{
//obtener posicion del arreglo a borrar
let index = datos.findIndex((item)=>item.id==id)
//validar borrar elemento

let validar = confirm (`¿Esta seguro de borrar la gift card ${datos[index].gift}?` )

if (validar){
    datos.splice(index, 1)
    cargarTabla()
}


}

cargarTabla()
//
document.querySelector('#formGift').addEventListener('submit',agregarGift)