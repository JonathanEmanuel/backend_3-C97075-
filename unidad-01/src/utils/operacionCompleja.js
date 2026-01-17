export const operacionCompleja = () =>{
    let result = 0;
    for (let i = 0; i < 5e9; i++) {
        result+=i;
    }
    console.log(result);
    return result;
}
// El hijo está a la espera de la orden del padre
process.on('message', (msg) => {
    console.log(msg);
    let result = 0;
    for (let i = 0; i < 5e9; i++) {
        result+=i;
    }
    // Respondemos al Padre
    process.send(result);
})

