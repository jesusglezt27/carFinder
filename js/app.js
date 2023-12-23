const resultados = document.querySelector('#resultado');
const years = document.querySelector('#year');

const objeto = {
    marca:'',
    year:'',
    puertas:'',
    transmision:'',
    color:'',
    minimo:'',
    maximo:'',
}

document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(autos);
    llenarSelect();
    document.addEventListener('change',getOptions)
})

function getOptions(e){
    const valor = e.target.options[e.target.selectedIndex].value;
    const objetivo = e.target.id;
    objeto[objetivo] = valor;
    console.log(objeto)
    filtrar();
}

function filtrar(){
    limpiar();
    const resultado = autos.filter( filtrarMarca ).
                            filter( filtrarAño ).
                            filter( filtrarPuertas ).
                            filter( filtrarTransmision ).
                            filter( filtrarMinimo ).
                            filter( filtrarMaximo ).
                            filter( filtrarColor )
mostrarAutos(resultado)
}

function filtrarMarca(auto){
    const {marca} = objeto

    if(marca){
        return auto.marca === marca;
    }
    return auto
}

function filtrarAño(auto){
    const {year} = objeto
    if(parseInt(year)){
        return auto.year === parseInt(year);
    }
    return auto
}

function filtrarPuertas(auto){
    const {puertas} = objeto
    if(parseInt(puertas)){
        return auto.puertas === parseInt(puertas);
    }
    return auto
}

function filtrarTransmision(auto){
    const {transmision} = objeto
    if(transmision){
        return auto.transmision === transmision;
    }
    return auto
}

function filtrarMinimo(auto){
    const {minimo} = objeto;

    if(parseInt(minimo) > auto.precio){
        return auto.precio === parseInt(minimo);
    }
    return auto
}

function filtrarMaximo(auto){
    const {maximo} = objeto;

    if(parseInt(maximo) < auto.precio){
        return auto.precio === parseInt(maximo);
    }
    return auto
}

function filtrarColor(auto){
    const {color} = objeto
    if(color){
        return auto.color === color;
    }
    return auto
}

function limpiar(){
    resultados.innerHTML='';
}

function mostrarAutos(autos){
    autos.forEach( auto =>{
        const {color,marca,modelo,precio,puertas,transmision,year} = auto;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>Color: ${color}</td>
        <td>Marca: ${marca}</td>
        <td>Modelo: ${modelo}</td>
        <td>Precio: ${precio}</td>
        <td>Puertas: ${puertas}</td>
        <td>Transmision: ${transmision}</td>
        <td>Year: ${year}</td>
        `;
        resultados.appendChild(row)
    })
}

function llenarSelect(){  
    for(let i = 20; i >= 10; i--){
        const opcion = document.createElement('OPTION');
        opcion.innerHTML=`
            <option value="20${i}">20${i}</option>
        `;
        years.appendChild(opcion)
    }
}

