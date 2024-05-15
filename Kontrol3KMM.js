var operationInfoImage = document.getElementById('operation-image');
var operationInfoTitle = document.getElementById('operation-title');
var operationInfoDescription = document.getElementById('operation-description');

document.addEventListener('DOMContentLoaded', function() {
    var num1Input = document.getElementById('num1');
    var num2Input = document.getElementById('num2');
    var resultElement = document.getElementById('result');
    var operationsContainer = document.querySelector('.operations');

    operationsContainer.addEventListener('click', function(event) {
        if (event.target.matches('button')) {
            var operation = event.target.id;
            calculate(operation);
            displayOperationInfo(operation);
        }
    });
});

function calculate(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = "";

    if (isNaN(num1) || isNaN(num2)) {
        result = "Введіть числа для обчислень";
    } else {
        switch(operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = "Спроба ділення на нуль";
                }
                break;
            case 'log':
                if (num1 > 0) {
                    result = Math.log(num1);
                } else {
                    result = "Невірне значення для логарифму";
                }
                break;
            case 'sin':
                result = Math.sin(num1 * (Math.PI / 180));
                break;
            case 'tan':
                result = Math.tan(num1 * (Math.PI / 180));
                break;
            default:
                result = "Невідома операція";
        }

        if (typeof result === 'number') {
            result = result.toFixed(2);
        }
    }

    document.getElementById('result').innerText = result;
}

function displayOperationInfo(operation) {
    switch (operation) {
        case 'log':
            operationInfoImage.src = "log_x.png";
            operationInfoTitle.textContent = "Логарифм";
            operationInfoDescription.textContent = "Логарифм числа - це показник, до якого потрібно підняти основу логарифму, щоб отримати це число.";
            break;
        case 'sin':
            operationInfoImage.src = "sin_x.png";
            operationInfoTitle.textContent = "Синус";
            operationInfoDescription.textContent = "Синус кута - це протилежна сторона прямокутного трикутника, поділена на гіпотенузу, або значення функції синусу для даного кута.";
            break;
        case 'tan':
            operationInfoImage.src = "tan_x.png";
            operationInfoTitle.textContent = "Тангенс";
            operationInfoDescription.textContent = "Тангенс кута - це відношення протилежної сторони до прилеглої сторони прямокутного трикутника, або значення функції тангенсу для даного кута.";
            break;
        default:
            operationInfoImage.src = "";
            operationInfoTitle.textContent = "";
            operationInfoDescription.textContent = "";
            break;
    }
}
