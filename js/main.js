// PRODUCTOS
const productos = [
    // Abrigos
    /* {
        id: "abrigo-01",
        titulo: "Abrigo 01",
        imagen: "../src/img/abrigos/01.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000,
        descripcion: "No hay datos.",
        disponible: 1 
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
        descripcion: "No hay datos.",
        disponible: 1 
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
        descripcion: "No hay datos.",
        disponible: 1 
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
        descripcion: "No hay datos.",
        disponible: 1 
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
        descripcion: "No hay datos.",
        disponible: 1 
    }, */
    // Camisetas
    /* {
        id: "camiseta-01",
        titulo: "Camiseta 01",
        imagen: "../src/img/camisetas/01.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000,
        descripcion: "No hay datos.",
        disponible: 1 
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
        descripcion: "No hay datos.",
        disponible: 1 
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
        descripcion: "No hay datos.",
        disponible: 1 
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
        descripcion: "No hay datos.",
        disponible: 1 
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
        descripcion: "No hay datos.",
        disponible: 1 
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
        descripcion: "No hay datos.",
        disponible: 1 
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
        descripcion: "No hay datos.",
        disponible: 1 
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
        descripcion: "No hay datos.",
        disponible: 1 
    }, */
    // Pantalones
    /* {
        id: "pantalon-01",
        titulo: "Pantalón 01",
        imagen: "../src/img/pantalones/01.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000,
        descripcion: "No hay datos.",
        disponible: 1 
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
        descripcion: "No hay datos.",
        disponible: 1 
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
        descripcion: "No hay datos.",
        disponible: 1 
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
        descripcion: "No hay datos.",
        disponible: 1 
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
        descripcion: "No hay datos.",
        disponible: 1 
    }, */

    /* Autopartes */
    {
        id: "autopartes-01",
        titulo: "Rin y llanta Tornado",
        imagen: "build/img/autopartes/auto1.jpg",
        categoria: {
            nombre: "Autopartes",
            id: "autopartes"
        },
        precio: 3500,
        descripcion: "Rin original usado chevrolet tornado 2019 195/55R16 87V.",
        disponible: 1 
    },
    {
        id: "autopartes-02",
        titulo: "Rin y llanta",
        imagen: "build/img/autopartes/auto2.jpg",
        categoria: {
            nombre: "Autopartes",
            id: "autopartes"
        },
        precio: 850,
        descripcion: "Rin para llanta P175/65R14 81T.",
        disponible: 1 
    },
    {
        id: "autopartes-03",
        titulo: "Modulo Camioneta RAM ",
        imagen: "build/img/autopartes/auto3.jpg",
        categoria: {
            nombre: "Autopartes",
            id: "autopartes"
        },
        precio: 6500,
        descripcion: "Modulo Tipm de camioneta RAM 002AC 2x4 MODELO 2008. ",
        disponible: 1 
    },
    /* Domesticos */
    {
        id: "domesticos-01",
        titulo: "Horno electrico",
        imagen: "build/img/domesticos/dom1.jpg",
        categoria: {
            nombre: "Domesticos",
            id: "domesticos"
        },
        precio: 500,
        descripcion: "Horno electrico Black + Decker funcionando. ",
        disponible: 1 
    },
    {
        id: "domesticos-02",
        titulo: "Lavadero",
        imagen: "build/img/domesticos/dom2.jpg",
        categoria: {
            nombre: "Domesticos",
            id: "domesticos"
        },
        precio: 450,
        descripcion: "No hay información extra. ",
        disponible: 1 
    },
    {
        id: "domesticos-03",
        titulo: "Mesa",
        imagen: "build/img/domesticos/dom3.jpg",
        categoria: {
            nombre: "Domesticos",
            id: "domesticos"
        },
        precio: 400,
        descripcion: "75cm X 75cm. ",
        disponible: 1 
    },
    {
        id: "domesticos-04",
        titulo: "Horno microondas",
        imagen: "build/img/domesticos/dom4.jpg",
        categoria: {
            nombre: "Domesticos",
            id: "domesticos"
        },
        precio: 100,
        descripcion: "Prende y apaga pero los botones no funcionan bien. ",
        disponible: 1 
    },
    {
        id: "domesticos-05",
        titulo: "Dispensador de papel higienico",
        imagen: "build/img/domesticos/dom5.jpg",
        categoria: {
            nombre: "Domesticos",
            id: "domesticos"
        },
        precio: 200,
        descripcion: "En buen estado, solo daños esteticos y raspones. 27cm diametro, 12cm ancho",
        disponible: 1 
    },
    {
        id: "domesticos-06",
        titulo: "Pedestal de lavabo",
        imagen: "build/img/domesticos/dom6.jpg",
        categoria: {
            nombre: "Domesticos",
            id: "domesticos"
        },
        precio: 200,
        descripcion: "66cm de alto, en buen estado, solo manchado.",
        disponible: 1 
    },
    {
        id: "domesticos-07",
        titulo: "Piano electrico Yamaha",
        imagen: "build/img/domesticos/dom7.jpg",
        categoria: {
            nombre: "Domesticos",
            id: "domesticos"
        },
        precio: 4500,
        descripcion: "Piano 74 teclas, incluye pedal sustain y bipie. Detalles al tocar una que otra tecla y suena fuerte, y una no suena. Tema de matenimiento electronico.",
        disponible: 1 
    },
    /* Puertas y rejas */
    {
        id: "puertas-01",
        titulo: "Puerta",
        imagen: "build/img/puertas/puerta1.jpg",
        categoria: {
            nombre: "Puertas",
            id: "puertas"
        },
        precio: 250,
        descripcion: "117.5cm X 80.5cm",
        disponible: 1 
    },
    {
        id: "puertas-02",
        titulo: "Puerta blanca",
        imagen: "build/img/puertas/puerta2.jpg",
        categoria: {
            nombre: "Puertas",
            id: "puertas"
        },
        precio: 250,
        descripcion: "229.5cm X 55cm",
        disponible: 1 
    },
    {
        id: "puertas-03",
        titulo: "Puerta blanca",
        imagen: "build/img/puertas/puerta3.jpg",
        categoria: {
            nombre: "Puertas",
            id: "puertas"
        },
        precio: 250,
        descripcion: "230cm X 62cm",
        disponible: 1 
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
                <div class="product__container-img">
                    <a href="${producto.imagen}" target="_blank">
                        <img class="product__img" src="${producto.imagen}" alt="${producto.titulo}" loading="lazy">
                    </a>
                </div>
                <div class="product__details">
                    <h3 class="product__header">${producto.titulo}</h3>
                    <p class="product__price"><span class="product__bold">Precio:</span> $${producto.precio}</p>
                    <p class="product__available"><span class="product__bold">Disponible:</span> ${producto.disponible}</p>
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