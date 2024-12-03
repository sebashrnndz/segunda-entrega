
// Registro

window.registro.addEventListener(`click`, () => {
    window.ventana.showModal()
});

window.ModalCls.addEventListener(`click`, () => {
    window.ventana.close()
});



// compra directa en landing
// window.modalCompraDirecta0.addEventListener(`click`, () => {
//     window.modalOpnCompraDirecta.showModal()
// });

// window.ClsCompraDirect0.addEventListener(`click`, () => {
//     window.modalOpnCompraDirecta.close()
// });

// window.modalCompraDirecta1.addEventListener(`click`, () => {
//     window.modalOpnCompraDirecta1.showModal()
// });

// window.ClsCompraDirect1.addEventListener(`click`, () => {
//     window.modalOpnCompraDirecta1.close()
// });

// window.modalCompraDirecta2.addEventListener(`click`, () => {
//     window.modalOpnCompraDirecta2.showModal()
// });

// window.ClsCompraDirect2.addEventListener(`click`, () => {
//     window.modalOpnCompraDirecta2.close()
// });

// window.modalCompraDirecta3.addEventListener(`click`, () => {
//     window.modalOpnCompraDirecta3.showModal()
// });

// window.ClsCompraDirect3.addEventListener(`click`, () => {
//     window.modalOpnCompraDirecta3.close()
// });

// window.modalCompraDirecta4.addEventListener(`click`, () => {
//     window.modalOpnCompraDirecta4.showModal()
// });

// window.ClsCompraDirect4.addEventListener(`click`, () => {
//     window.modalOpnCompraDirecta4.close()
// });

// window.modalCompraDirecta5.addEventListener(`click`, () => {
//     window.modalOpnCompraDirecta5.showModal()
// });

// window.ClsCompraDirect5.addEventListener(`click`, () => {
//     window.modalOpnCompraDirecta5.close()
// });






// cambio de imagen en compra directa
// FUNCIONA PERO SE ROMPE CON MÁS MÁS IMAGENES CON EL MISMO ID

// PROXIMAMENTE HACERLO FUNCIONAR CON MENOS CANTIDAD DE CODIGO
// const images = document.querySelectorAll('.imgDinamicCompraDirect');
// const prevBtn = document.getElementById('btn-prev');
// const nextBtn = document.getElementById('btn-next');
// let currentImage = 0;
// function changeImage(direction) {
//     images[currentImage].style.display = 'none';
//     currentImage += direction;
//     if (currentImage >= images.length) {
//         currentImage = 0;
//     } else if (currentImage < 0) {
//         currentImage = images.length - 1;
//     }
//     images[currentImage].style.display = 'block';
// }
// prevBtn.addEventListener('click', () => changeImage(-1));
// nextBtn.addEventListener('click', () => changeImage(1));

// // otro
// const images1 = document.querySelectorAll('.imgDinamicCompraDirect1');
// const prevBtn1 = document.getElementById('btn-prev1');
// const nextBtn1 = document.getElementById('btn-next1');
// let currentImage1 = 0;
// function changeImage1(direction) {
//     images1[currentImage1].style.display = 'none';
//     currentImage1 += direction;
//     if (currentImage1 >= images.length) {
//         currentImage1 = 0;
//     } else if (currentImage1 < 0) {
//         currentImage1 = images1.length - 1;
//     }
//     images1[currentImage1].style.display = 'block';
// }
// prevBtn1.addEventListener('click', () => changeImage1(-1));
// nextBtn1.addEventListener('click', () => changeImage1(1));

// // otro
// const images2 = document.querySelectorAll('.imgDinamicCompraDirect2');
// const prevBtn2 = document.getElementById('btn-prev2');
// const nextBtn2 = document.getElementById('btn-next2');
// let currentImage2 = 0;
// function changeImage2(direction) {
//     images2[currentImage2].style.display = 'none';
//     currentImage2 += direction;
//     if (currentImage2 >= images2.length) {
//         currentImage2 = 0;
//     } else if (currentImage2 < 0) {
//         currentImage2 = images2.length - 1;
//     }
//     images2[currentImage2].style.display = 'block';
// }
// prevBtn2.addEventListener('click', () => changeImage2(-1));
// nextBtn2.addEventListener('click', () => changeImage2(1));

// // otro
// const images3 = document.querySelectorAll('.imgDinamicCompraDirect3');
// const prevBtn3 = document.getElementById('btn-prev3');
// const nextBtn3 = document.getElementById('btn-next3');
// let currentImage3 = 0;
// function changeImage3(direction) {
//     images3[currentImage3].style.display = 'none';
//     currentImage3 += direction;
//     if (currentImage3 >= images3.length) {
//         currentImage3 = 0;
//     } else if (currentImage3 < 0) {
//         currentImage3 = images3.length - 1;
//     }
//     images3[currentImage3].style.display = 'block';
// }
// prevBtn3.addEventListener('click', () => changeImage3(-1));
// nextBtn3.addEventListener('click', () => changeImage3(1));

// // otro
// const images4 = document.querySelectorAll('.imgDinamicCompraDirect4');
// const prevBtn4 = document.getElementById('btn-prev4');
// const nextBtn4 = document.getElementById('btn-next4');
// let currentImage4 = 0;
// function changeImage4(direction) {
//     images4[currentImage4].style.display = 'none';
//     currentImage4 += direction;
//     if (currentImage4 >= images4.length) {
//         currentImage4 = 0;
//     } else if (currentImage4 < 0) {
//         currentImage4 = images4.length - 1;
//     }
//     images4[currentImage4].style.display = 'block';
// }
// prevBtn4.addEventListener('click', () => changeImage4(-1));
// nextBtn4.addEventListener('click', () => changeImage4(1));

// // otro
// const images5 = document.querySelectorAll('.imgDinamicCompraDirect5');
// const prevBtn5 = document.getElementById('btn-prev5');
// const nextBtn5 = document.getElementById('btn-next5');
// let currentImage5 = 0;
// function changeImage5(direction) {
//     images5[currentImage5].style.display = 'none';
//     currentImage5 += direction;
//     if (currentImage5 >= images5.length) {
//         currentImage5 = 0;
//     } else if (currentImage5 < 0) {
//         currentImage5 = images5.length - 1;
//     }
//     images5[currentImage5].style.display = 'block';
// }
// prevBtn5.addEventListener('click', () => changeImage5(-1));
// nextBtn5.addEventListener('click', () => changeImage5(1));

//fin de cambio de imagenes




// INTENTO DE ASIGNAR UN NUEVO VALOR AL PRECIO RESTANDO EL PORCENTAJE DE DESCUENTO

// let percentPromo = document.getElementById('porcentajeDescuento');
// let precioConPromo = document.getElementById('precioProducto');
// function calcularPrecioConDescuento(descuentoPorcentaje) {
//     let precioOriginal = parseFloat(precioConPromo);
//     let precioConDescuento = parseFloat(precioOriginal) - parseFloat(descuentoPorcentaje);
//     precioConPromo.value = precioConDescuento;

// console.log(precioConDescuento);
// }
// calcularPrecioConDescuento(20);

// funcion para estructurar el precio con el descuento
// const obtenerPorcentaje = document.querySelectorAll('.porcentajeDescuento');
// const promocion = document.getElementById('promocion');
// const porcentajeDescuento = document.getElementById('porcentajeDescuento');
// const precio = document.getElementById('precioProducto');
// function estructuraPromocion(porcentaje) {

//     porcentajeDescuento.textContent = "-" + porcentaje + "%";
//     let precioPrevPromo = promocion.textContent = "Antes $ " + precio.innerHTML;
//     promocion.style.textDecoration = "line-through";
//     precioPrevPromo.textContent = precioPrevPromo.innerHTML;

//     let precioConDescuento = document.getElementById('precioProducto');
//     let sacarPrecio = precioConDescuento.innerHTML;
//     let aNumero = Number(sacarPrecio);

//     let calcularDescuento = aNumero - (aNumero * porcentaje / 100);
//     precioConDescuento.textContent = calcularDescuento;
// };
// estructuraPromocion(20);

// con 1 
// const obtenerPorcentaje1 = document.querySelectorAll('.porcentajeDescuento');
// const promocion1 = document.getElementById('promocion1');
// const porcentajeDescuento1 = document.getElementById('porcentajeDescuento1');
// const precio1 = document.getElementById('precioProducto1');
// function estructuraPromocion1(porcentaje) {

//     porcentajeDescuento1.textContent = "-" + porcentaje + "%";
//     let precioPrevPromo1 = promocion1.textContent = "Antes $ " + precio1.innerHTML;
//     promocion1.style.textDecoration = "line-through";
//     precioPrevPromo1.textContent = precioPrevPromo1.innerHTML;

//     let precioConDescuento1 = document.getElementById('precioProducto1');
//     let sacarPrecio1 = precioConDescuento1.innerHTML;
//     let aNumero1 = Number(sacarPrecio1);

//     let calcularDescuento1 = aNumero1 - (aNumero1 * porcentaje / 100);
//     precioConDescuento1.textContent = calcularDescuento1;
// };
// estructuraPromocion1(10);

// // con 2
// const obtenerPorcentaje2 = document.querySelectorAll('.porcentajeDescuento');
// const promocion2 = document.getElementById('promocion2');
// const porcentajeDescuento2 = document.getElementById('porcentajeDescuento2');
// const precio2 = document.getElementById('precioProducto2');
// function estructuraPromocion2(porcentaje) {

//     porcentajeDescuento2.textContent = "-" + porcentaje + "%";
//     let precioPrevPromo2 = promocion2.textContent = "Antes $ " + precio2.innerHTML;
//     promocion2.style.textDecoration = "line-through";
//     precioPrevPromo2.textContent = precioPrevPromo2.innerHTML;

//     let precioConDescuento2 = document.getElementById('precioProducto2');
//     let sacarPrecio2 = precioConDescuento2.innerHTML;
//     let aNumero2 = Number(sacarPrecio2);

//     let calcularDescuento2 = aNumero2 - (aNumero2 * porcentaje / 100);
//     precioConDescuento2.textContent = calcularDescuento2;
// };
// estructuraPromocion2(5);

// // con 3
// const obtenerPorcentaje3 = document.querySelectorAll('.porcentajeDescuento');
// const promocion3 = document.getElementById('promocion3');
// const porcentajeDescuento3 = document.getElementById('porcentajeDescuento3');
// const precio3 = document.getElementById('precioProducto3');
// function estructuraPromocion3(porcentaje) {

//     porcentajeDescuento3.textContent = "-" + porcentaje + "%";
//     let precioPrevPromo3 = promocion3.textContent = "Antes $ " + precio3.innerHTML;
//     promocion3.style.textDecoration = "line-through";
//     precioPrevPromo3.textContent = precioPrevPromo3.innerHTML;

//     let precioConDescuento3 = document.getElementById('precioProducto3');
//     let sacarPrecio3 = precioConDescuento3.innerHTML;
//     let aNumero3 = Number(sacarPrecio3);

//     let calcularDescuento3 = aNumero3 - (aNumero3 * porcentaje / 100);
//     precioConDescuento3.textContent = calcularDescuento3;
// };
// estructuraPromocion3(12);

// // con 4

// const obtenerPorcentaje4 = document.querySelectorAll('.porcentajeDescuento');
// const promocion4 = document.getElementById('promocion4');
// const porcentajeDescuento4 = document.getElementById('porcentajeDescuento4');
// const precio4 = document.getElementById('precioProducto4');
// function estructuraPromocion4(porcentaje) {

//     porcentajeDescuento4.textContent = "-" + porcentaje + "%";
//     let precioPrevPromo4 = promocion4.textContent = "Antes $ " + precio4.innerHTML;
//     promocion4.style.textDecoration = "line-through";
//     precioPrevPromo4.textContent = precioPrevPromo4.innerHTML;

//     let precioConDescuento4 = document.getElementById('precioProducto4');
//     let sacarPrecio4 = precioConDescuento4.innerHTML;
//     let aNumero4 = Number(sacarPrecio4);

//     let calcularDescuento4 = aNumero4 - (aNumero4 * porcentaje / 100);
//     precioConDescuento4.textContent = calcularDescuento4;
// };
// estructuraPromocion4(20);

// // con 5

// const obtenerPorcentaje5 = document.querySelectorAll('.porcentajeDescuento');
// const promocion5 = document.getElementById('promocion5');
// const porcentajeDescuento5 = document.getElementById('porcentajeDescuento5');
// const precio5 = document.getElementById('precioProducto5');
// function estructuraPromocion5(porcentaje) {

//     porcentajeDescuento5.textContent = "-" + porcentaje + "%";
//     let precioPrevPromo5 = promocion5.textContent = "Antes $ " + precio5.innerHTML;
//     promocion5.style.textDecoration = "line-through";
//     precioPrevPromo5.textContent = precioPrevPromo5.innerHTML;

//     let precioConDescuento5 = document.getElementById('precioProducto5');
//     let sacarPrecio5 = precioConDescuento5.innerHTML;
//     let aNumero5 = Number(sacarPrecio5);

//     let calcularDescuento5 = aNumero5 - (aNumero5 * porcentaje / 100);
//     precioConDescuento5.textContent = calcularDescuento5;
// };
// estructuraPromocion5(16);


// FUNCIONA, PONER LA CANTIDAD DE PORCENTAJE DE DESCUENTO Y DECIR QUE PRECIO TENÍA ANTES DE QUE APLIQUE EL DESCUENTO

// AÑADIR TEXTO ANTES DEL PRECIO -- FUNCIONAL
// funcional para los elementos con las clase
// let prefijo = document.querySelectorAll('.precioProduct01');
// function agregarPrefijo(precioConPrefijo) {
//     precioConPrefijo.textContent = "Precio $: " + precioConPrefijo.textContent;
// }
// ;
// prefijo.forEach(agregarPrefijo);

// funcional para el elemento con ID
// let preciofijo = document.getElementById('precioProducto');

// function definirPrecio(precioReal) {
//     let precioRealAsignado = precioReal.textContent = "Precio $: " + preciofijo.innerHTML;
//     precioRealAsignado.textContent = precioRealAsignado.innerHTML;

// }
// definirPrecio(preciofijo);

// tratar de hacer el script para cambiar de precio por cada interaccion con cada elemento de agregar producto
// utilizando funciones construcatoras, for each para tratar de calcular el precio de venta, 
// descuento, etc, todo sobre el acceso a compra directo

// funcion para traer valores de un Parrafo a numero para una funcion con sus queryselectors

// INTENTO DE CREAR UNA FUNCION QUE CALCULE TODOS LOS PRECIOS DE VENTA CON LOS DESCUENTOS APLICADOS A PARTIR DE QUERYSELECTORS


// OBTENER ARRAY DE OBJETOS DE LOS PRODUCTOS
// necesitamos foto, producto, porcentaje de descuento y precio
// const productos = document.getElementsByClassName('nameProduct');
// const imagen = document.getElementsByClassName('imgCompraDirect');
// const porcentaje = document.getElementsByClassName('porcentajeDescuento');
// const precioVenta = document.getElementsByClassName('precioProduct01');

// const carrito = [];

// function agregarAlCarrito(producto) {
//     carrito.push(producto);
//     localStorage.setItem('carrito', JSON.stringify(carrito));
// }

// productos.forEach(producto => {
//     const agregar = document.getElementsByClassName('btnModalAgregarCompraDirecta');
//     agregar.addEventListener('click', () => {
//         const precio = precioVenta.replace('Precio $:', '');
//         const descripcion = producto.textContent;

//         const agregarProducto = {
//             // imagen: imagen[0].textContent,
//             precio: precio,
//             descripcion: descripcion,
//             // porcentaje: porcentaje[0].textContent
//         };
//         agregarAlCarrito(agregarProducto);
//         console.log(agregarProducto);
//     }   );
// });


// console.log(carrito);
// console.log(productos[1].textContent);
// console.log(imagen[1].textContent);
// console.log(porcentaje[1].textContent);
// console.log(precioVenta[0].textContent);





// document.addEventListener("DomContentLoaded", () =>{

// })

// const productos = document.getElementsByClassName("nameProduct")
//     const precioCarrito = document.getElementsByClassName("precioProduct01")
//     const imagen = document.getElementsByClassName("imgCompraDirect")
//     // console.dir(productos)
//     // console.dir(precioCarrito)     
//     // console.dir(imagen)


//     function agregarAlCarrito() {
//         const botones = document.getElementsByClassName("btnModalAgregarCompraDirecta")
//         const arrayBotones = Array.from(botones)
//         arrayBotones.forEach(el => {
//             console.log(el)
//         }
//     )
//     }

//     agregarAlCarrito();



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
        nombre: "Pulsera caritas ",
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
        nombre: "Pulsera caritas",
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


const contenedor = document.getElementById("compraDirecta");



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
    const carrito = [];
    const contenedorCarrito = document.getElementById("carrito");
    if (carrito != []) {
        contenedorCarrito.innerHTML = `
        <section class="sectionCarrito">
            <p class="textCarritoVacio">los productos que agregues al carrito se mostrarán acá</p>
                <div>
                    <img class="imagenEncontrar" src="imagenes/encontrar.png" alt="encontrar">
                        <p class="textCarritoVacio">tu carrito está vacío</p>      
                </div>
            <button id="cerrarCarrito" class="btnCancelCar">cerrar</button>
            `
            ;
    } else { };






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
<p>Total: $ </p>
        <p id="totalFinal" >
        </p>
        </div>
    <div class="carritoConProductos">
                <p class="textCarritoVacioTitulos" >Producto</p>
                <p class="textCarritoVacioTitulos" >Precio</p>
                <p class="textCarritoVacioTitulos" >Un(s)</p>
                <p class="textCarritoVacioTitulos" >Descuento</p>
                
                

                </div>
    `;



        carrito.forEach(producto => {

            productosDelCarrito.innerHTML += `
                
                <div class="carritoConProductos">
                    <p class="textCarritoVacio">${producto.nombre}</p>
                    <p class="textCarritoVacio">$ ${producto.precio}</p>
                    <p class="textCarritoVacio">${producto.cantidad}</p>
                     <p class="textCarritoVacio">${producto.descuento}</p>
                    
                    
                </div>
            `

          


            // para ocultar la seccion del carrito vacío
            const displayHide = document.querySelectorAll(".sectionCarrito");
            displayHide.forEach(element => {
                element.style.display = "none";

            })
            
        })

        const totalFinal = document.getElementById("totalFinal");
        totalFinal.innerText = carrito.reduce((total, producto) => total + producto.cantidad * producto.precio, 0);
        

        // calcular total

    };





    // const carritoVacio = document.querySelectorAll("sectionCarrito");

    // MODAL CARRITO
    window.accesoCarrito.addEventListener(`click`, () => {
        window.carrito.showModal()
    });

    window.cerrarCarrito.addEventListener(`click`, () => {
        window.carrito.close()
    });
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

