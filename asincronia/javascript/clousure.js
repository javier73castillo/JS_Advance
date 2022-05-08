function funcionQueSaluda() {
    let saludo = "Hola";
    function saludador() {
        // Scope
        console.log(saludo)
    }
    saludador() // imprime "Hola"
}