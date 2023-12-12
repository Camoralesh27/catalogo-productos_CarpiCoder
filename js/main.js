// PRODUCTOS
const productos = [
    // Abrigos
    {
        id: "abrigo-01",
        titulo: "Abrigo 01",
        imagen: "../src/img/abrigos/01.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000,
        descripcion: "No hay datos."
    },
    {
        id: "abrigo-02",
        titulo: "Abrigo 02",
        imagen: "../src/img/abrigos/02.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000,
        descripcion: "No hay datos."
    },
    {
        id: "abrigo-03",
        titulo: "Abrigo 03",
        imagen: "../src/img/abrigos/03.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000,
        descripcion: "No hay datos."
    },
    {
        id: "abrigo-04",
        titulo: "Abrigo 04",
        imagen: "../src/img/abrigos/04.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000,
        descripcion: "No hay datos."
    },
    {
        id: "abrigo-05",
        titulo: "Abrigo 05",
        imagen: "../src/img/abrigos/05.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000,
        descripcion: "No hay datos."
    },
    // Camisetas
    {
        id: "camiseta-01",
        titulo: "Camiseta 01",
        imagen: "../src/img/camisetas/01.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000,
        descripcion: "No hay datos."
    },
    {
        id: "camiseta-02",
        titulo: "Camiseta 02",
        imagen: "../src/img/camisetas/02.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000,
        descripcion: "No hay datos."
    },
    {
        id: "camiseta-03",
        titulo: "Camiseta 03",
        imagen: "../src/img/camisetas/03.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000,
        descripcion: "No hay datos."
    },
    {
        id: "camiseta-04",
        titulo: "Camiseta 04",
        imagen: "../src/img/camisetas/04.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000,
        descripcion: "No hay datos."
    },
    {
        id: "camiseta-05",
        titulo: "Camiseta 05",
        imagen: "../src/img/camisetas/05.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000,
        descripcion: "No hay datos."
    },
    {
        id: "camiseta-06",
        titulo: "Camiseta 06",
        imagen: "../src/img/camisetas/06.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000,
        descripcion: "No hay datos."
    },
    {
        id: "camiseta-07",
        titulo: "Camiseta 07",
        imagen: "../src/img/camisetas/07.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000,
        descripcion: "No hay datos."
    },
    {
        id: "camiseta-08",
        titulo: "Camiseta 08",
        imagen: "../src/img/camisetas/08.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000,
        descripcion: "No hay datos."
    },
    // Pantalones
    {
        id: "pantalon-01",
        titulo: "Pantalón 01",
        imagen: "../src/img/pantalones/01.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000,
        descripcion: "No hay datos."
    },
    {
        id: "pantalon-02",
        titulo: "Pantalón 02",
        imagen: "../src/img/pantalones/02.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000,
        descripcion: "No hay datos."
    },
    {
        id: "pantalon-03",
        titulo: "Pantalón 03",
        imagen: "../src/img/pantalones/03.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000,
        descripcion: "No hay datos."
    },
    {
        id: "pantalon-04",
        titulo: "Pantalón 04",
        imagen: "../src/img/pantalones/04.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000,
        descripcion: "No hay datos."
    },
    {
        id: "pantalon-05",
        titulo: "Pantalón 05",
        imagen: "../src/img/pantalones/05.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000,
        descripcion: "No hay datos."
    }
];

const contenedorProductos = document.querySelector("#grid__products");
const botonesCategorias = document.querySelectorAll(".nav__category");
const tituloPrincipal = document.querySelector("#grid__header")

function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto =>{
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
                <img class="product__img" src="${producto.imagen}" alt="${producto.titulo}" loading="lazy">
                <div class="product__details">
                    <h3 class="product__header">${producto.titulo}</h3>
                    <p class="product__price"><span class="product__bold">Precio:</span> $${producto.precio}</p>
                    <p class="product__description">
                            <span class="product__bold">Informacion:</span> ${producto.descripcion}
                    </p>
                </div>
        `;

        contenedorProductos.append(div);
    })
}

cargarProductos(productos);

//buttons category
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerHTML = productoCategoria.categoria.nombre;
            
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);

        } else {
            tituloPrincipal.innerHTML = "Todos los productos";
            cargarProductos(productos);
        }
    })
});

/*
<div class="product">
                    <img class="product__img" src="../src/img/abrigos/01.jpg" alt="abrigo" loading="lazy">
                    <div class="product__details">
                        <h3 class="product__header">Abrigo 01</h3>
                        <p class="product__price"><span class="product__bold">Precio:</span> $1,000</p>
                        <p class="product__description">
                            <span class="product__bold">Informacion:</span><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non autem excepturi ut, quos laboriosam. Non autem excepturi ut, quos laboriosam.Non autem excepturi ut, quos laboriosam 
                        </p>
                        <!-- <button class="product__add">Me interesa</button> -->
                    </div>
                </div>
 */