
function CallMenu() {
    let nro_ejercicio = parseInt(
        prompt("Ingrese el numero de ejercicio que desea ejecutar: \r\n 1.suma \r\n 2.Promedio de Examenes \r\n 3.Calcular el area del rectangulo \r\n 4.Calcular el area del triangulo \r\n 5.Calcular el area del circulo \r\n 6.Calcular salario semanal \r\n 7.convertir pulgadas \r\n 8.Cambiar a dolares \r\n 9.Calcular Edad \r\n 10.Calcular persona de menor edad \r\n 11.Calcular bono por años de trabajo \r\n 12.Sueldo anual" )
    )

    if (isNaN(nro_ejercicio)) {
        alert("porfavor ingresa valores numericos");
    }
    else {
        MenuEjercicio(nro_ejercicio)
    }



}


function MenuEjercicio(nro_ejercicio) {
    switch (nro_ejercicio) {
        case 1:
            let valor1 = parseFloat(prompt("Ingrese el valor 1 a sumar:"));
            let valor2 = parseFloat(prompt("Ingrese el valor 2 a sumar:"));
            alert(ej1_sumarValores(valor1, valor2));
            break;
        case 2:
            let ex1 = parseFloat(prompt("Ingrese la primera nota:"));
            let ex2 = parseFloat(prompt("Ingrese la segunda nota:"));
            let ex3 = parseFloat(prompt("Ingrese la tercera nota:"));
            let ex4 = parseFloat(prompt("Ingrese la cuarta nota:"));
            alert(ej2_calcularPromedio(ex1, ex2, ex3, ex4))
            break;
        case 3:
            let base_rect = parseFloat(prompt("Ingrese la base del rectangulo:"));
            let altura_rect = parseFloat(prompt("Ingrese la altura del rectangulo:"));
            alert(ej3_calcularareaRectangulo(base_rect, altura_rect))
            break;
        case 4:
            let base_triangulo = parseFloat(prompt("Ingrese la base del triangulo:"));
            let altura_triangulo = parseFloat(prompt("Ingrese la altura del triangulo:"));
            alert(ej4_areaTriangulo(base_triangulo, altura_triangulo))
            break;
        case 5:
            let radioCircuferencia = parseFloat(prompt("Ingrese el radio de la circunferencia:"));
            alert(ej5_areaCircunferencia(radioCircuferencia))
            break;
        case 6:
            let horasTrabajo = parseFloat(prompt("Ingrese las horas de trabajo"));
            let salariohoraHombre = parseFloat(prompt("Ingrese el salario hora hombre"));
            alert(ej6_calcularSalario(horasTrabajo, salariohoraHombre))
            break;
        case 7:
            let metroMedida = parseFloat(prompt("Ingrese la cantidad de tela a necesitar en mtrs"));
            alert(ej7_convertirPulgadas(metroMedida))
            break;
        case 8:
            let monedaPeruana = parseFloat(prompt("Ingrese la cantidad de dinero a cambiar"));
            alert(ej8_convertirMoneda(monedaPeruana))
            break;
        case 9:
            let añoNacimiento = parseInt(prompt("Ingrese el Año en que nacio"));
            alert(ej9_calcularEdad(añoNacimiento))
            break;
        case 10:
            let nombre1 = prompt("Ingrese nombre 1");
            let edadNombre1 = parseInt(prompt("Ingrese edad 1"));
            let nombre2 = prompt("Ingrese nombre 2");
            let edadNombre2 = parseInt(prompt("Ingrese edad 2"));
            let nombre3 = prompt("Ingrese nombre 3");
            let edadNombre3 = parseInt(prompt("Ingrese edad 3"));
            alert(ej10_personaMenor(nombre1, nombre2, nombre3, edadNombre1, edadNombre2, edadNombre3))
            break;

        case 11:
            let añosdetrabajo = parseInt(prompt("Ingrese años de trabajo"))
            alert(ej11_bonodetrabajo(añosdetrabajo))
            break;

        case 12:
            let añodesueldo = parseInt(prompt("año de sueldo"))
            alert(ej12_salariodelaño(añodesueldo))
            break;
        default:
            break;
    }

}

function ej1_sumarValores(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "Por favor ingrese valores"
    } else {
        return a + b;
    }
}

function ej2_calcularPromedio(ex1, ex2, ex3, ex4) {

    if (isNaN(ex1) || isNaN(ex2) || isNaN(ex3) || isNaN(ex4)) {
        return "Porfavor ingrese valores"
    } else {
        return (ex1 + ex2 + ex3 + ex4) / 4
    }
}

function ej3_calcularareaRectangulo(base_rect, altura_rect) {
    if (isNaN(base_rect) || isNaN(altura_rect)) {
        return "porfavor ingrese valores"
    }
    else {
        return "el area del rectangulo: " + (base_rect * altura_rect)
    }
}

function ej4_areaTriangulo(base_triangulo, altura_triangulo) {
    if (isNaN(base_triangulo) || isNaN(altura_triangulo)) {
        return "Porfavor ingrese valores"
    } else {
        return "el area del triangulo: " + (base_triangulo * altura_triangulo) / 2
    }
}

function ej5_areaCircunferencia(radioCircuferencia) {
    if (isNaN(radioCircuferencia)) {
        return "Ingrese un valor"
    } else {
        return (Math.PI * radioCircuferencia * radioCircuferencia)
    }
}

function ej6_calcularSalario(horasTrabajo, salariohoraHombre) {
    if (isNaN(horasTrabajo) || isNaN(salariohoraHombre)) {
        return "Porfavor, ingrese valores"
    } else {
        return " el salario es: " + (horasTrabajo * salariohoraHombre)
    }

}

function ej7_convertirPulgadas(metroMedida) {
    if (isNaN(metroMedida)) {
        return "Porfavor Ingrese valores"
    } else {
        return "la cantidad en pulgadas es: " + (metroMedida / 0.0254)
    }
}

function ej8_convertirMoneda(monedaPeruana) {
    if (isNaN(monedaPeruana)) {
        return "porfavor Ingrese valores"
    } else {
        return "el cambio es: " + (monedaPeruana / 3.90)
    }
}

function ej9_calcularEdad(añoNacimiento) {
    if (isNaN(añoNacimiento)) {
        return "por favor ingrese el año de Nacimiento"
    } else {
        return "Su edad es : " + (2022 - añoNacimiento)
    }
}

function ej10_personaMenor(nombre1, nombre2, nombre3, edadNombre1, edadNombre2, edadNombre3) {

    if (edadNombre1 < edadNombre2) {
        if (edadNombre1 < edadNombre3) {
            return `la persona menor es : ${nombre1} con la menor edad ${edadNombre1}`;
        } else {
            return `la persona menor es : ${nombre3} con la menor edad ${edadNombre3}`;
        }

    } else {
        if (edadNombre2 < edadNombre3) {
            return `la persona menor es : ${nombre2} con la menor edad ${edadNombre2}`;
        } else {
            return `la persona menor es : ${nombre3} con la menor edad ${edadNombre3}`;
        }

    }
}


function ej11_calcularBono(añoTrabajo){
    if (isNaN(añoTrabajo)) {
        return "por favor ingrese los años de trabajo"
    } else {
        switch (añoTrabajo) {
            case 1:
                return "Su Bono es de $100"
                break;
            case 2:
                return "Su Bono es de $200"
                break;
            case 3:
                return "Su Bono es de $300"
                break;
            case 4:
                return "Su Bono es de $400"
                break;
            case 5:
                return "Su Bono es de $500"
                break;

            default:
                return "Su Bono es de $1000"
                break;
        }
    }
}

function ej12_salariodelaño(añodesueldo) {
    if (isNaN(añodesueldo)) {
        return "por favor ingrese el año "
    } else {
        switch (añodesueldo) {
            case 1:
                return "el primer año su sueldo es de $1650"
                break;
            case 2:
                return "en dos años su sueldo es de $1815"
                break;
            case 3:
                return "en tres años su sueldo es de $1996.5"
                break;
            case 4:
                return "en cuatro años su sueldo es de $2196.2"
                break;
            case 5:
                return "en cinco años su sueldo es de $2526.8"
                break;
            default:
                return "en seis años su sueldo es de $2657.3"
                break;
        }
    }
}