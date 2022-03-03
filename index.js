// função
        
const calc = (e)=> {
    let a = document.getElementById("valor1").value;
    let b = document.getElementById("valor2").value;
    let local = document.getElementById("res");
    
    if(!a){a = 0}
    if(!b){b = 0}            

    result = eval(a+e+b);

    if(isNaN(result)){result = "0"}

    local.innerText = result;
}