document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("item").addEventListener("input", ()=>{
        let content = document.getElementById("item").value;
        localStorage.setItem("input", content);
    })
});

document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById("agregar").addEventListener("click", ()=>{
        let localInfo = localStorage.getItem("input");
        document.getElementById("contenedor").innerHTML += `
        <ul class="list-group" id="contenedor">
            ${localInfo}
        </ul>
        `;
        document.getElementById("item").value = null;
    })
});

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("limpiar").addEventListener("click", ()=>{
        document.getElementById("contenedor").innerHTML = ``;
        localStorage.clear();
    })
})
