document.addEventListener("DOMContentLoaded", function() {
    let array = [];
    for (let i = 0; i < 20; i++) {
        array.push(Math.floor(Math.random() * 100)); 
    }
    array.sort((a, b) => a - b); 


    let sortedArrayDiv = document.createElement('div');
    sortedArrayDiv.textContent = 'Відсортований масив: ' + array.join(', ');
    document.body.appendChild(sortedArrayDiv);

  
    let select = document.createElement('select');
    let defaultOption = document.createElement('option');
    defaultOption.textContent = '30px';
    defaultOption.value = '30';
    select.appendChild(defaultOption);

    let optionValues = ['50', '70'];
    for (let i = 0; i < optionValues.length; i++) {
        let option = document.createElement('option');
        option.textContent = optionValues[i] + 'px';
        option.value = optionValues[i];
        select.appendChild(option);
    }

    let generateButton = document.createElement('button');
    generateButton.textContent = 'Згенерувати';

    document.body.appendChild(select);
    document.body.appendChild(generateButton);

    generateButton.addEventListener('click', function() {
        let selectedValue = select.value;
        let color, width, height;

        if (selectedValue === '30') {
            color = 'red';
            width = selectedValue + 'px';
            height = '30px';
        } else if (selectedValue === '50') {
            color = 'blue';
            width = '30px';
            height = selectedValue + 'px';
        } else if (selectedValue === '70') {
            color = 'green';
            width = '30px';
            height = selectedValue + 'px';
        }

        let generatedDiv = document.createElement('div');
        generatedDiv.classList.add('generated'); 
        generatedDiv.style.backgroundColor = color;
        generatedDiv.style.width = width;
        generatedDiv.style.height = height;
        generatedDiv.style.position = 'relative'; 

        document.body.appendChild(generatedDiv);

    
        let moveUpButton = document.createElement('button');
        moveUpButton.textContent = 'Посунути уверх';
        moveUpButton.addEventListener('click', function() {
            generatedDiv.style.top = (parseInt(generatedDiv.style.top) || 0) - 20 + 'px';
        });

        let moveDownButton = document.createElement('button');
        moveDownButton.textContent = 'Посунути вниз';
        moveDownButton.addEventListener('click', function() {
            generatedDiv.style.top = (parseInt(generatedDiv.style.top) || 0) + 20 + 'px';
        });

        document.body.appendChild(moveUpButton);
        document.body.appendChild(moveDownButton);
    });
});
