
// Registro

window.registro.addEventListener(`click`, () => {
    window.ventana.showModal()
});

window.ModalCls.addEventListener(`click`, () => {
    window.ventana.close()
});

// productos

const productosIndividuales = [
    {
        id: 0,
        nombre: "Pulsera ojo turco",
        precio: 7750,
        imagen: [
            "imagenes/001P-pulsera-ojo-CLS.jpeg",
            "imagenes/001P-pulsera-ojo.jpeg"
        ],
        descuento: 20,
        descripcion: {
            material: "material",
            partes: [
                "Hilo: elástico 1mm",
                "Piedras: vidrio, acero y plastico",
                "Diametro: 15cm"
            ]
        }
    },
    {
        id: 1,
        nombre: "Pulsera caritas",
        precio: 5400,
        imagen: [
            "imagenes/004C-collar-caracolor-CLS.jpeg",
            "imagenes/004C-collar-caracolor.jpeg"
        ],

        descuento: 10,
        descripcion: {
            material: "material",
            partes: [
                "Hilo: elástico 1.5mm",
                "Piedras:  acero y plastico",
                "Diametro: 20cm"
            ]
        }
    },
    {
        id: 2,
        nombre: "Pulsera azul",
        precio: 6000,
        imagen: [
            "imagenes/002C-collar-cara-CLS.jpeg",
            "imagenes/002C-collar-cara.jpeg"
        ],
        descuento: 5,
        descripcion: {
            material: "material",
            partes: [
                "Hilo: elástico 2mm",
                "Piedras: vidrio y plastico",
                "Diametro: 10cm"
            ]
        }
    },
    {
        id: 3,
        nombre: "Pulsera colores",
        precio: 8000,
        imagen: [
            "imagenes/002P-pulsera-color-CLS.jpeg",
            "imagenes/002P-pulsera-color.jpeg"
        ],
        descuento: 33,
        descripcion: {
            material: "material",
            partes: [
                "Hilo: elástico 1.5mm",
                "Piedras: vidrio, acero, resina y plastico",
                "Diametro: 23cm"
            ]
        }
    },
    {
        id: 4,
        nombre: "Pulsera caritas colores ",
        precio: 6450,
        imagen: [
            "imagenes/004C-collar-caracolor-CLS.jpeg",
            "imagenes/004C-collar-caracolor.jpeg"
        ],
        descuento: 45,
        descripcion: {
            material: "material",
            partes: [
                "Hilo: elástico 2mm",
                "Piedras: resina, acero y plastico",
                "Diametro: 14cm"
            ]
        }
    },
    {
        id: 5,
        nombre: "Pulsera cara azul",
        precio: 8200,
        imagen: [
            "imagenes/006C-collar-carazul-CLS.jpeg",
            "imagenes/006C-collar-carazul.jpeg"
        ],
        descuento: 12,
        descripcion: {
            material: "material",
            partes: [
                "Hilo: plastico 2mm",
                "Piedras: vidrio, acero y plastico",
                "Diametro: 20cm"
            ]
        }
    }
];

const carrito = JSON.parse(localStorage.getItem("carrito"));
const contenedor = document.getElementById("compraDirecta");

// if (carrito == []) {
//     productosDelCarrito.innerHTML = `
//         <section class="sectionCarrito">
//             <p class="textCarritoVacio">los productos que agregues al carrito se mostrarán acá</p>
//                 <div>
//                     <img class="imagenEncontrar" src="imagenes/encontrar.png" alt="encontrar">
//                         <p class="textCarritoVacio">tu carrito está vacío</p>      
//                 </div>
//             <button id="cerrarCarrito" class="btnCancelCar">cerrar</button>
//             `
//             window.cerrarCarrito.addEventListener(`click`, () => {
//                 window.carrito.close()
//             });
//         ;
    
// } else {};

// const carrito =[];

const añadirElemento = (cadaProducto) => {
    productosIndividuales.innerHTML = "";
    cadaProducto.forEach(producto => {
        contenedor.innerHTML += `
        <div id="modalCompraDirecta${producto.id}" class="productCompraDirect linkCompraDirect">
            <img class="imgCompraDirect" src="${producto.imagen[0]}" alt="pulsera de colores">
            <p class="textCompraDirect">${"$" + producto.precio}</p>
            <button id="btn${producto.id}" class="buttonCompraDirect">Agregar</button>
        
        <dialog id="modalOpnCompraDirecta${producto.id}" class="modalOpnCompraDirecta">
                        <section>
                            <div class="divModalOpnCompraDirecta">
                                <span id="btn-prev${producto.id}" class="botonPrev"><img class="chevron"
                                        src="imagenes/chevronleft.png" alt=""></span>
                                <img id="imgModalCompraDirecta${producto.id}" class="imgDinamicCompraDirect${producto.id}"
                                    src="${producto.imagen[0]}" alt="pulsera de colores">
                                <img id="imgModalCompraDirecta${producto.id}" class="imgDinamicCompraDirect${producto.id}"
                                    src="${producto.imagen[1]}" alt="pulsera de colores"
                                    style="display: none;">
                                <span id="btn-next${producto.id}" class="botonNext"><img src="imagenes/chevronright.png"
                                        alt=""></span>
                            </div>
                            <div class="infoModalCompraDirecta">

                                <p id="porcentajeDescuento${producto.id}" class="porcentajeDescuento">-${producto.descuento}%</p>
                                <p id="promocion${producto.id}" class="promocionModal"></p>


                                <img class="imgModalDeco" src="imagenes/deco.png" alt="decoracion">
                                <h3 class="nameProduct">${producto.nombre}</h3>
                                <p class="materialProduct">${producto.descripcion.material}</p>
                                <p class="partesProduct">${producto.descripcion.partes[0]}</p>
                                <p class="partesProduct">${producto.descripcion.partes[1]}</p>
                                <p class="partesProduct">${producto.descripcion.partes[2]}</p>
                             
                                <p id="precioProducto${producto.id}" class="precioProduct">${producto.precio}</p>
                            </div>
                            <div class="divBtnCompraDirecta">
                                <button class="btnModalAgregarCompraDirecta">Agregar</button>
                                <button id="ClsCompraDirect${producto.id}" class="btnModalCerrarCompraDirecta">cerrar</button>
                            </div>
                        </section>
                    </dialog>
                    </div>
       `
    });



    cadaProducto.forEach(producto => {
        const abrirModal = document.getElementById("modalCompraDirecta" + producto.id)
        const btnOpn = document.getElementById("modalOpnCompraDirecta" + producto.id)
        const btnCls = document.getElementById("ClsCompraDirect" + producto.id)


        abrirModal.addEventListener(`click`, () => {
            btnOpn.showModal();
        });

        btnCls.addEventListener(`click`, () => {
            abrirModal.close();
        });
        const promocion = document.getElementById('promocion' + producto.id);
        const precio = document.getElementById('precioProducto' + producto.id);
        const porcentaje = producto.descuento;

        function estructuraPromocion() {
            let precioPrevPromo = promocion.textContent = "Antes $ " + precio.innerHTML;
            promocion.style.textDecoration = "line-through";
            precioPrevPromo.textContent = precioPrevPromo.innerHTML;
            let precioConDescuento = document.getElementById('precioProducto' + producto.id);
            let sacarPrecio = precioConDescuento.innerHTML;
            let aNumero = Number(sacarPrecio);
            let calcularDescuento = aNumero - (aNumero * porcentaje / 100);
            precioConDescuento.textContent = calcularDescuento;
        };
        estructuraPromocion();

        // CAROUSEL DE IMAGENES POR CADA PRODUCTO
        const images = document.querySelectorAll('.imgDinamicCompraDirect' + producto.id);
        const prevBtn = document.getElementById('btn-prev' + producto.id);
        const nextBtn = document.getElementById('btn-next' + producto.id);
        let currentImage = 0;
        function changeImage(direction) {
            images[currentImage].style.display = 'none';
            currentImage += direction;
            if (currentImage >= images.length) {
                currentImage = 0;
            } else if (currentImage < 0) {
                currentImage = images.length - 1;
            }
            images[currentImage].style.display = 'block';
            console.log(currentImage)
        }
        prevBtn.addEventListener('click', () => changeImage(-1));
        nextBtn.addEventListener('click', () => changeImage(1));
    })
    // LOGICA DEL CARRITO

    function agregarAlCarrito() {
        const btn = document.getElementsByClassName("btnModalAgregarCompraDirecta")
        const botones = Array.from(btn)
        botones.forEach(boton => {
            boton.addEventListener("click", (evento) => {
                let nombre = evento.target.parentElement.parentElement.children[1].children[3].innerText;
                let precio = Number(evento.target.parentElement.parentElement.children[1].children[8].innerText);
                let descuento = evento.target.parentElement.parentElement.children[1].children[0].innerText;
                let productoABuscar = carrito.find(producto => producto.nombre == nombre);
                if (productoABuscar) {
                    productoABuscar.cantidad++;
                } else {
                    carrito.push({
                        nombre: nombre,
                        precio: precio,
                        descuento: descuento,
                        cantidad: 1,
                    })
                }
                actualizarCarrito();
            })
        })
    };
    agregarAlCarrito();
    
    const productosDelCarrito = document.getElementById("carrito");


    function actualizarCarrito() {


        productosDelCarrito.innerHTML = `
            <div class="carritoConProductosNav">
                <p>Total: </p>
                <p id="totalFinal">$ </p>
            </div>
                <div class="carritoConProductos">
                    <p class="textCarritoVacioTitulos" >Producto</p>
                    <p class="textCarritoVacioTitulos" >Un(s)</p>
                    <p class="textCarritoVacioTitulos" >Descuento</p>
                    <p class="textCarritoVacioTitulos" >Precio</p>
                    <p class="textCarritoVacioTitulos">total</p>
                    <p class="textCarritoVacioTitulos">-</p>
                </div>
            `;

        carrito.forEach(producto => {
            productosDelCarrito.innerHTML += `
                <div class="carritoConProductosAgregados">
                    <p class="textCarritoVacio">${producto.nombre}</p>
                    <p class="textCarritoVacio">${producto.cantidad}</p>
                    <p class="textCarritoVacio">${producto.descuento}</p>
                    <p class="textCarritoVacio">$${producto.precio}</p>
                    <p class="textCarritoVacio">$${producto.cantidad * producto.precio}</p>
                    <p id="deleteFromCar" class="textCarritoVacioBtn">eliminar</p>
                </div>
            `
            localStorage.setItem("carrito", JSON.stringify(carrito));
            eliminarProducto();
            
            // para ocultar la seccion del carrito vacío
            const displayHide = document.querySelectorAll(".sectionCarrito");
            displayHide.forEach(element => {
                element.style.display = "none";
            })
        })
        const totalFinal = document.getElementById("totalFinal");
        totalFinal.innerText = "$ " + carrito.reduce((total, producto) => total + producto.cantidad * producto.precio, 0);


        // calcular total
    };


    function eliminarProducto() {
        const btnDelete = document.getElementsByClassName("textCarritoVacioBtn")
        const btnDeleteCar = Array.from(btnDelete)
        
        btnDeleteCar.forEach(boton => {
            boton.addEventListener("click", (evento) => {
                
                let nombreId = evento.target.parentElement.children[0].innerText
    
                let estaEnCarrito = carrito.find(boton => boton.nombre == nombreId)

                    let index = carrito.findIndex(boton => boton.nombre == nombreId);
                    carrito.splice(index, 1);
                
                actualizarCarrito()
            })
            
        }
        
    )}
   
    
    
    // const carritoVacio = document.querySelectorAll("sectionCarrito");

    // MODAL CARRITO
    window.accesoCarrito.addEventListener(`click`, () => {
        window.carrito.showModal()
    });

    

    
    // const contenedorCarrito = document.getElementById("carrito");
    
}







// function eliminarProducto(){
//     const btnEliminar = document.getElementsByClassName("btnEliminar")
//     const botonesEliminar = Array.from(btnEliminar)

//     botonesEliminar .forEach(botonEliminar => {
//         botonEliminar.addEventListener(`click`, (evento) => {
//             let nombre = evento.target.parentElement.parentElement[0];
//             console.log(nombre)

//             let productoABuscar = carrito.find(botonEliminar => botonEliminar.nombre == nombre);

//             if(productoABuscar.cantidad = 1){
//                 let index = carrito.findIndex(botonEliminar => botonEliminar.nombre == nombre);

//             }else (productoABuscar.cantidad = productoABuscar.cantidad - 1)
//         })
//         actualizarCarrito();
//     }) 
// }




document.addEventListener("DOMContentLoaded", () => {
    añadirElemento(productosIndividuales)
})

