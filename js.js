 
const num1Input =  document.getElementById('num1');
const num2Input = document.getElementById('num2');
const botones = document.querySelectorAll('.botones button');

botones.forEach((boton) => {
    boton.addEventListener('click', ()=> {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);


        if(isNaN(num1) || isNaN(num2)) {
            alert("por favor, introduce numero validos");
            return;
        }

        setTimeout(() => {
            let resultado;


            if(boton.id === 'suma') {
                resultado = num1 + num2;
            } else if (boton.id === 'resta') {
                resultado = num1 - num2;
            } else if (boton.id === 'multiplicacion') {
                resultado = num1 * num2;
            } else if (boton.id === 'division') {
                if(num2 === 0) {
                    alert('no se puede dividir entre 0')
                    return;
                }
                resultado = num1 / num2;
            } 
            document.body.innerHTML = `
            <div class="resultado">
                    <h1>Resultado:${resultado}</h1>
                <button id="reset">
                    <img src="img/reiniciar.png" alt="reiniciar" widht="50" height="40">
                    reiniciar
                </button>
            </div>
            `;
            document.getElementById('reset').addEventListener('click', ()=> {
                location.reload();
            });
        }, 1000);
    });
});
