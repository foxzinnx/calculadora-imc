function verificar(){
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;

    if(altura != '' && peso != ''){
        var calc = this.calcular(altura, peso);
        document.getElementById('result-imc').textContent = calc;
        document.querySelector('.result').style.display = 'flex';
        document.querySelector('.info').style.display = 'flex';
        document.querySelector('.null').style.display = 'none';
    }else{
        document.querySelector('.null').style.display = 'flex';
        document.querySelector('.result').style.display = 'none';
        document.querySelector('.info').style.display = 'none';
    }
}

function calcular(altura, peso){

    var altura = parseFloat(altura);
    var peso = parseFloat(peso);

    const imc = peso / (altura * altura);

    return imc.toFixed(2);

}