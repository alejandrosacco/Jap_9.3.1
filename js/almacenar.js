let Container = document.getElementById("contenedor");
let Agregar = document.getElementById("agregar");
let Cleanse = document.getElementById("limpiar");
let Item = document.getElementById("item");
let listInfo = [];

document.addEventListener('DOMContentLoaded', () =>{
    Container.innerHTML += `
    <ul class="list-group" id="contenedor">
        ${JSON.parse(localStorage.getItem("input"))}
    </ul>
    `;
    
    Agregar.addEventListener("click", ()=>{
        let itemInfo = Item.value;
        listInfo.push(itemInfo);
        localStorage.setItem("input", JSON.stringify(listInfo));
        Container.innerHTML += `
        <ul class="list-group" id="contenedor">
            ${itemInfo}
        </ul>
        `;
        Item.value = null;
    });

    Cleanse.addEventListener("click", ()=>{
        Container.innerHTML = ``;
        localStorage.clear();
        Item.value = null;
    });
});
