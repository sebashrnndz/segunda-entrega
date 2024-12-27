
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
        precio: 6400,
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

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const contenedor = document.getElementById("compraDirecta");

const productosDelCarrito = document.getElementById("carrito");

function actualizarCarrito() {
    productosDelCarrito.innerHTML = `
        <div class="carritoConProductosNav">
            <p>Total: </p>
            <p id="totalFinal">$ </p>
            <button id="confirmarCompra" type="submit" class="confirmarCompra" >confirmar compra</button>
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
                <p class="textCarritoVacio"><img id="ifRemove" class="addRemButton ifRemove" src="imagenes/remove.png"> ${producto.cantidad} <img id="ifAdd" class="addRemButton ifAdd" src="imagenes/add.png" alt="eliminar"></p>
                <p class="textCarritoVacio">${producto.descuento}</p>
                <p class="textCarritoVacio">$${producto.precio}</p>
                <p class="textCarritoVacio">$${producto.cantidad * producto.precio} </p>
                <p id="deleteFromCar" class="textCarritoVacioBtn">eliminar</p>
            </div>
        `
        restarCarrito();
        sumarCarrito();
        eliminarProducto();
        carritoVacio();
        localStorage.setItem("carrito", JSON.stringify(carrito));
    })
    const totalFinal = document.getElementById("totalFinal");
    const totalCarroCompleto = carrito.reduce((total, producto) => total + producto.cantidad * producto.precio, 0);
    const totalCarroCompletoConDiseño = totalFinal.innerHTML = "$" + totalCarroCompleto;
    const progressBar = document.getElementById("progressBarTotal");
    const progressBarVisual = document.getElementById("progressBarIlustration");
    progressBarVisual.innerHTML = `
    <div class="progressBarVisual" style="width:${Number(totalCarroCompleto * 0.001)}%"></div>
    `
    progressBar.innerText = totalCarroCompletoConDiseño;


    // calcular total
};
actualizarCarrito();

// FUNCION PARA ELIMINAR PRODUCTOS DEL CARRITO

function eliminarProducto() {
    const btnDelete = document.getElementsByClassName("textCarritoVacioBtn")
    const btnDeleteCar = Array.from(btnDelete)

    btnDeleteCar.forEach(boton => {
        boton.addEventListener("click", (evento) => {

            let nombreId = evento.target.parentElement.children[0].innerText
            let index = carrito.findIndex(boton => boton.nombre == nombreId);
            carrito.splice(index, 1);

            Swal.fire({
                color: "#19A29A",
                popup: 'swal2-hide',
                backdrop: 'swal2-backdrop-hide',
                icon: 'swal2-icon-hide',
                toast: true,
                width: 250,
                position: "top-end",
                text: "Producto eliminado",
                showConfirmButton: false,
                timer: 500,
                showClass: {
                    popup: `
                      animate__animated
                      animate__fadeInUp
                      animate__faster
                    `
                },

            });


            actualizarCarrito()
            carritoVacio();
        })
    })
}

function restarCarrito() {
    const btnRemove = document.getElementsByClassName("ifRemove");
    const quitar = Array.from(btnRemove)

    quitar.forEach((botonRestar) => {
        botonRestar.addEventListener("click", (eventoRestar) => {
            let nombreProducto = Number(eventoRestar.target.parentElement.innerText);
            if (nombreProducto > 1) {
                let encontrar = eventoRestar.target.parentElement.parentElement.children[0].innerText;
                let indexProd = carrito.find(producto => producto.nombre == encontrar);
                indexProd.cantidad = indexProd.cantidad -= 1;
                console.log(indexProd)
            } else {
                // btnRemove.style.display = "none";
            }
            actualizarCarrito();
        })
    })
}
function sumarCarrito() {
    const btnAdd = document.getElementsByClassName("ifAdd");
    const agregar = Array.from(btnAdd)

    agregar.forEach((botonRestar) => {
        botonRestar.addEventListener("click", (eventoSumar) => {
            let nombreProducto = Number(eventoSumar.target.parentElement.innerText);
            if (nombreProducto >= 1) {
                let encontrar = eventoSumar.target.parentElement.parentElement.children[0].innerText;
                let indexProd = carrito.find(producto => producto.nombre == encontrar);
                indexProd.cantidad = indexProd.cantidad += 1;
                console.log(indexProd)
            } else {
                // btnAdd.style.display = "none";
            }
            actualizarCarrito();
        })
    })
}




// FUNCION QUE CAMBIA LA APARICENCIA DEL CARRITO CUANDO NO TIENE PRODUCTOS

function carritoVacio() {
    const carritoVacioInner = document.getElementById("carrito")
    if (carrito.length == 0) {
        carritoVacioInner.innerHTML = `
            <section class="sectionCarrito">
                <p class="textCarritoVacio">los productos que agregues al carrito se mostrarán acá</p>
                    <div>
                        <img class="imagenEncontrar" src="imagenes/encontrar.png" alt="encontrar">
                            <p class="textCarritoVacio">tu carrito está vacío</p>      
                    </div>
                <button id="cerrarCarrito" class="btnCancelCar">cerrar</button>
                `
        localStorage.setItem("carrito", JSON.stringify(carrito));
        window.cerrarCarrito.addEventListener(`click`, () => {
            window.carrito.close()
        });
        ;
    } else { };
}

// que siempre se ejecute
carritoVacio();




// FUNCION PARA AGREGAR LOS PRODUCTOS AL LADING
const añadirElemento = (cadaProducto) => {
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

    // POR CADA PRODUCTO.......................................................................................................
    cadaProducto.forEach(producto => {
        const abrirModal = document.getElementById("modalCompraDirecta" + producto.id)
        const btnOpn = document.getElementById("modalOpnCompraDirecta" + producto.id)
        const btnCls = document.getElementById("ClsCompraDirect" + producto.id)

        abrirModal.addEventListener(`click`, () => {
            btnOpn.showModal();
        });

        // NO ANDA CERRAR EL MODAL INDIVIDUAL
        btnCls.addEventListener(`click`, () => {
            btnOpn.close();
        });

        const promocion = document.getElementById('promocion' + producto.id);
        const precio = document.getElementById('precioProducto' + producto.id);
        const porcentaje = producto.descuento;

        // FUNCION PARA CALCULAR EL PRECIO FINAL DE CADA PRODUCTO CON EL DESCUENTO QUE TIENE APLICADO
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
        }
        prevBtn.addEventListener('click', () => changeImage(-1));
        nextBtn.addEventListener('click', () => changeImage(1));
    })

    // LOGICA DEL CARRITO
    // AGREGAR LOS PRODUCTOS AL CARRITO
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
                Swal.fire({
                    color: "#19A29A",
                    popup: 'swal2-hide',
                    backdrop: 'swal2-backdrop-hide',
                    icon: 'swal2-icon-hide',
                    toast: true,
                    width: 250,
                    position: "top-end",
                    text: "Producto agregado",
                    showConfirmButton: false,
                    timer: 500,
                    showClass: {
                        popup: `
                          animate__animated
                          animate__fadeInUp
                          animate__faster
                        `
                    },

                });
                actualizarCarrito();
            })
        })
    };
    agregarAlCarrito();


    // MODAL CARRITO
    window.accesoCarrito.addEventListener(`click`, () => {
        window.carrito.showModal()

    });
}

// DOMCONTENTLOADED
document.addEventListener("DOMContentLoaded", () => {
    añadirElemento(productosIndividuales)
})

const terminarCompra = document.getElementById("confirmarCompra")
terminarCompra.addEventListener("click", () => {
    window.carrito.close()
    window.modalFinalizarCompra.showModal()
    const totalCompra = carrito.reduce((total, producto) => total + producto.cantidad * producto.precio, 0);

    const modalCarrito = document.getElementById("modalFinalizarCompra")
    modalCarrito.innerHTML = `
    <p class="totalCompra">Tu compra es de $ ${totalCompra}</p>

    <p class="tituloSeleccion">Elige el método de pago</p>
     <div class="metodoPago">
            <label class="labelPago" for="why">
                <select class="selectTarjeta" name="why" id="metodoPago">
                    <option value="default">Seleccionar método</option>
                    <option>Tarjeta</option>
                    <option>Criptomoneda</option>
                    <option>transferencia</option>
                </select>
            </label>
        </div>
        <div id="segunSeleccion" class="segunSeleccion">
        </div>
    `
    const innerPago = document.getElementById("segunSeleccion")
    const medioPagoElegido = document.getElementById("metodoPago")

    medioPagoElegido.addEventListener("change", function () {
        let seleccionDeUsuario = this.value;


        if (seleccionDeUsuario === "Tarjeta") {
            innerPago.innerHTML = `
        
        <section class="seccionPagoTarjeta">
        <form class="contenedorPagoTarjeta">
        <h4 class="titleTarjeta">¡Ingresa los datos solicitados y confirma tu compra!</h4>

            <div class="seccionesPagoTarjeta">
                <label class="inputsPagoTarjeta"> Nombre
                    <input class="inputRegistro" type="text" autocomplete="off"  required>
                </label>
                <label class="inputsPagoTarjeta"> Apellido
                    <input class="inputRegistro" type="text" autocomplete="off"  required>
                </label>   
                <label class="inputsPagoTarjeta">Número de tarjeta
                    <input class="inputRegistro" type="text" id="cardNumber" name="cardNumber" placeholder="Número de tarjeta" pattern="[0-9]{16}" maxlength="16" required>
                </label>
                <label class="inputsPagoTarjeta"> Codigo de seguridad
                    <input class="inputRegistro" type="text" id="cardNumber" name="cardNumber" placeholder="CVV" pattern="[0-9]{3}" maxlength="3" required>
                </label>
           </form>
           <div class="seccionesPagoTarjeta">
           <button id="terminarCompraTarjeta" type="submit" class="buttonTarjeta">finalizar</button>
           </div>
        </div>
        </section>
        `
        } else if (seleccionDeUsuario === "Criptomoneda") {
            innerPago.innerHTML = `
          <label class="labelCrypto" >
          <select class="selectCrypto" id="criptomoneda">
            <option value="default">Seleccionar criptomoneda</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="ethereum">Ethereum</option>
            </select>
          </label>
          
        <form class="contenedorPagoCrypto">
            <div class="inputsPagoCryptoCont">
            <label class="inputsPagoCrypto"> 
                  <input class="inputDireccionCrypto" type="text" autocomplete="off" id="direccion" name="direccion" placeholder="ingresa acá la direccion de tu billetera" required>
            </label>
            <label class="inputsPagoCrypto"> 
                  <input class="inputDireccionCrypto" type="email" autocomplete="off" id="direccion" name="direccion" placeholder="ingresa acá el mail de tu billetera" required>
            </label>
            </div>
            <div class="infoDePagoCryptoCont">
                <p class="infoDePagoCrypto">ingresa la billetera de la que serán debitados los fondos, nosotros nos encargamos de la transaccion, ten en cuenta que estas transacciones
                conllevan costos de comisión que se verán reflejados en el precio de la transacción </p>
            </div>
            
            <div class="infoDePagoCryptoResultCont" id="resultado"></div>
        </form>
            `
            const selectCrypto = document.getElementById("criptomoneda")
            selectCrypto.addEventListener("change", function () {
                let criptoElegida = this.value;
                convertir(criptoElegida);
            });
        }
        else if (seleccionDeUsuario === "transferencia") {
            innerPago.innerHTML = `
            <p class="infoTransf">Seleccciona la moneda con la que quieras transferir</p>
            <label class="labelCrypto" >
                <select class="selectCrypto" id="transferencia">
                    <option value="bitcoin">Pesos (ARS)</option>
                    <option value="ethereum">Dólares (USD)</option>
                </select>
            </label>
            <form>
            <div class="infoDePagoCryptoResultCont" id="resultadoTrans">
            </form>
            </div>
            `
            convertirTrans();
        }
        seleccionDeUsuario = "";
        
        const terminarCompraTarjeta = document.getElementById("terminarCompraTarjeta")
        
        terminarCompraTarjeta.addEventListener("click", () => {
            console.log("se terminó la compra")
            localStorage.clear();
            carrito.splice(0);
            actualizarCarrito();
        })
        
        })
        
    })







// API KEY = 38637cef-35b5-4ad6-9f4f-80cd5585de38

function convertir(seleccionDeUsuario) {
    const cantidadPesos = carrito.reduce((total, producto) => total + producto.cantidad * producto.precio, 0);

    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${seleccionDeUsuario}&vs_currencies=usd`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            fetch('https://dolarapi.com/v1/dolares/blue')
                .then(response => response.json())
                .then(dolar => {
                    const precioDolar = data[seleccionDeUsuario].usd;
                    const cantidadCripto = cantidadPesos / (precioDolar * dolar.venta);
                    document.getElementById('resultado').innerHTML = `
                    <p class="infoDePagoCryptoResult">
                    Confirmando su compra de <strong>$${cantidadPesos} ARS </strong>, estará confirmando la 
                    transferencia de <strong>${cantidadCripto.toFixed(8)} ${seleccionDeUsuario}</strong>. a la siguiente dirección: 
                    <strong>1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2</strong>
                     </p>
                    <p class="infoDePagoCryptoResult">recuerda que buscando la billetera de destino podras ver tu transacción y los costos de comisión asociados.</p>

                    <div class="seccionesPagoTarjeta">
                        <button id="terminarCompraCrypto" type="submit" class="buttonTarjeta">finalizar</button>
                    </div>
                    `;
                    const terminarCompraCrypto = document.getElementById("terminarCompraCrypto")
                    terminarCompraCrypto.addEventListener("click", () => {
                        console.log("se terminó la compra")
                        localStorage.clear();
                        carrito.splice(0);
                        actualizarCarrito();
                    })
                })
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('resultado').textContent = 'Error al obtener el precio de la criptomoneda, intente después.';
        });
}


function convertirTrans() {
    const cantidadPesos = carrito.reduce((total, producto) => total + producto.cantidad * producto.precio, 0);
    fetch('https://dolarapi.com/v1/dolares/blue')
        .then(response => response.json())
        .then(dolar => {
            const cantidadDolares = cantidadPesos / dolar.venta;
            document.getElementById('resultadoTrans').innerHTML = `
                    <div>
                        <p class="infoDePagoCryptoResult">Si deseas transferir en pesos (ARS) realiza la transferencia al siguiente alias : <strong>toyabijou.ars</strong><br>
                        Si deseas transferir en dólares (USD) realiza la transferencia al siguiente alias : <strong>toyabijou.usd</strong></p>
                        <p class="infoDePagoCryptoResult">el cambio es al valor del dolar blue <strong class="valorUSD"> (actualmente en $ ${dolar.venta} ARS)</strong></p>
                        <p class="infoDePagoCryptoResult">La cantidad en dólares es de <strong class="dolar">$ ${cantidadDolares.toFixed(2)} USD</strong> 
                        
                        &nbsp &nbsp &nbsp &nbsp; La cantidad en pesos es de <strong class="dolar">$  ${cantidadPesos} ARS</strong>
                        <br>
                        Una vez realizado el pago, ingresa el comprobante de pago y finaliza la compra para nosotros poder verificarlo y procesar tu compra
                        </p>
                      
                        <label class="txtComprobante"> ingresa acá el comprobante de pago
                            <input class="inputComprobante" type="file" name="comprobante" required>
                        </label>
                        <label class="txtComprobante"> ingresa tu mail
                            <input class="inputComprobante" type="mail" name="comprobante" required>
                        </label>
                       
                        </div>
                        
                        <div class="seccionesPagoTarjeta">
                            <button id="terminarCompraTrans" type="submit" class="buttonTarjeta">finalizar</button>
                        </div>
                    `;
                    const terminarCompraTrans = document.getElementById("terminarCompraTrans")
                    terminarCompraTrans.addEventListener("click", () => {

                        console.log("se terminó la compra")
                        // alert("se terminó la compra")
                        localStorage.clear();
                        carrito.splice(0);
                        actualizarCarrito();

                    })
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('resultado').textContent = 'Error al obtener el tipo de cambio, intente después.';
        });
}

