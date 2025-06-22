// Encapsule los cuatro divs de colores en un div contenedor al que traje a JS por su id 
// Capture el evento de click en la letra e y lo valide con un if, para luego obtener el elemnto
// encapsulado que responde al evento click y le aplique el estilo correspondiente.

document.getElementById("container").addEventListener("click", (e) =>{
    if (e.target.classList.contains("clickeable")) {
        const box = e.target;
        console.log(box);
        box.style.backgroundColor = "black";
    }
    });

    // ------------------------------------------------------------------------------------------------

    var a = "#FFC0CB"; //rosado
    var s = "#FFA500"; //naranja
    var d = "#87CEFA"; //celeste

    addEventListener("keydown", function (event) { 
        const box = document.getElementById("key")
        switch (event.key) {
            case "a":
                box.style.backgroundColor = a;
                break;
            case "s":
                box.style.backgroundColor = s;
                break;
            case "d":
                box.style.backgroundColor = d;
                break;
            default: 
                break;
            }
    })

    //--------------------------------------------------------------------------------------------


    var q = "purple"; 
    var w = "gray"; 
    var e = "brown";

    const crearDivConColor = (color) =>{
        const nuevo = document.createElement("div");
        nuevo.style.width = "200px";
        nuevo.style.height = "200px";
        nuevo.style.border = "2px solid black";
        nuevo.style.backgroundColor = color;
        document.getElementById("new_container").appendChild(nuevo);
        };

    addEventListener("keydown", function (event) { 
        switch (event.key) {
            case "q":
                crearDivConColor(q);
                break;
            case "w":
                crearDivConColor(w);
                break;
            case "e":
                crearDivConColor(e);
                break;
            default: 
                break;
                }
        });





    
