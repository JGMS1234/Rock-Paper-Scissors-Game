const Comp_Choice = ['Rock', 'Paper', 'Scissors'];
const Comp_response = document.getElementById('response');
const resp_box = document.getElementById('Box');
const Btn_Rock = document.getElementById('Btn_Rock');
const Btn_Paper = document.getElementById('Btn_Paper');
const Btn_Scissors = document.getElementById('Btn_Scissors');

Btn_Rock.onclick = function () {
    const random = Math.round(Math.random() * (Comp_Choice.length - 1));
    Comp_response.textContent = `The Computer Chooses ${Comp_Choice[random]}`;

    if(Comp_Choice[random] == 'Rock'){
        resp_box.textContent = 'Tie:)';
        resp_box.style.backgroundColor = 'greenyellow';
        resp_box.style.borderRadius = '1rem';
    }
    else if(Comp_Choice[random] == 'Paper'){
        resp_box.textContent = 'You Lose:(';
        resp_box.style.backgroundColor = 'red';
        resp_box.style.borderRadius = '1rem';
    }
    else{
        resp_box.textContent = 'You Win:)';
        resp_box.style.backgroundColor = 'green';
        resp_box.style.borderRadius = '1rem';
    }
}

Btn_Paper.onclick = function () {
    const random = Math.round(Math.random() * (Comp_Choice.length - 1));
    Comp_response.textContent = `The Computer Chooses ${Comp_Choice[random]}`;
    
    if(Comp_Choice[random] == 'Paper'){
        resp_box.textContent = 'Tie:)';
        resp_box.style.backgroundColor = 'greenyellow';
        resp_box.style.borderRadius = '1rem';
    }
    else if(Comp_Choice[random] == 'Scissors'){
        resp_box.textContent = 'You Lose:(';
        resp_box.style.backgroundColor = 'red';
        resp_box.style.borderRadius = '1rem';
    }
    else{
        resp_box.textContent = 'You Win:)';
        resp_box.style.backgroundColor = 'green';
        resp_box.style.borderRadius = '1rem';
    }
}

Btn_Scissors.onclick = function () {
    const random = Math.round(Math.random() * (Comp_Choice.length - 1));
    Comp_response.textContent = `The Computer Chooses ${Comp_Choice[random]}`;
    
    if(Comp_Choice[random] == 'Scissors'){
        resp_box.textContent = 'Tie:)';
        resp_box.style.backgroundColor = 'greenyellow';
        resp_box.style.borderRadius = '1rem';
    }
    else if(Comp_Choice[random] == 'Rock'){
        resp_box.textContent = 'You Lose:(';
        resp_box.style.backgroundColor = 'red';
        resp_box.style.borderRadius = '1rem';
    }
    else{
        resp_box.textContent = 'You Win:)';
        resp_box.style.backgroundColor = 'green';
        resp_box.style.borderRadius = '1rem';
    }
}