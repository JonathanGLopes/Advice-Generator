function generateAdvice(){
    fetch(`https://api.adviceslip.com/advice`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const $advice = data.slip.advice;
        createId(data);
        createAdvice($advice)
    })
}


function createAdvice(advice){
    const $adviceText = document.querySelector(".advice");
    $adviceText.textContent = `"${advice}"`;
}

function createId(id){
    const $adviceId = document.querySelector(".advice-id");
    $adviceId.textContent = `Advice #${id.slip.id}`.toUpperCase();
}