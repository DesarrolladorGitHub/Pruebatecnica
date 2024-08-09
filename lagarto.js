console.log("Ingresar parametro H, U, D y F")
const stdin = process.openStdin();

stdin.addListener("data", (data) => {
    if(!data) console.log("Error parametros")
    
    let param = data.toString().replace(/(\r\n|\n|\r)/gm, "").split(" ")
    if(param.length == 1) param = param[0].split("")
    if(param.length < 4) console.log("Faltan parametros")

    climb(param)

    process.exit()
})

function climb(param){
    let h = Number(param[0]) //mts altura pozo
    let u = Number(param[1]) //mts escala
    let d = Number(param[2]) //mts resbala
    let f = Number(param[3]) //factor fatiga
    
    let day = 1
    let heigth = 0
    let distance = u * (f/100); //mts que disminuye cada dia
    let message = "";

    while(true){
        heigth = heigth + u;
        if(heigth >= h) {
            message = `success on day ${day}`
            break;
        }

        heigth = heigth - d
        
        if(heigth < 0) {
            message = `failure on day ${day}`
            break;
        }

        day = day + 1;
        if(u <= 0) {
            message = `failure on day ${day}`
            break;
        }
        
        u = Number((u - (distance)).toFixed(1)); //distancia escalar
    }
    
    console.log(message)
}