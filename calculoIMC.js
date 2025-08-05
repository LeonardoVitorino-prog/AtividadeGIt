document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const imcValueElement = document.getElementById('imc-value');
    const imcClassificationElement = document.getElementById('imc-classification');

    calculateBtn.addEventListener('click', function() {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        
        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert('Por favor, insira valores válidos para peso e altura.');
            return;
        }

        const imc = weight / (height * height);
        
        const roundedImc = imc.toFixed(2);
        
        imcValueElement.textContent = `Seu IMC: ${roundedImc}`;
        
        const classification = getImcClassification(imc);
        
        imcClassificationElement.textContent = `Classificação: ${classification}`;
    });

    function getImcClassification(imc) {
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc < 25) {
            return 'Peso normal';
        } else if (imc < 30) {
            return 'Sobrepeso';
        } else if (imc < 35) {
            return 'Obesidade grau I';
        } else if (imc < 40) {
            return 'Obesidade grau II';
        } else {
            return 'Obesidade grau III';
        }
    }
});