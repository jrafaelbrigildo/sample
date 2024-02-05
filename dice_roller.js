function rollDice(){
    const dice_num = document.getElementById("dice_num");
    const results = document.getElementById("results");
    const imgResults = document.getElementById("imgResults");
    let values = [];
    let images = [];

    for(i = 0; i < dice_num.value; i++){
        const val = Math.floor(Math.random() * 6) + 1;
        values.push(val);
        images.push(`<img src="dice_images/${val}.png" id="diceImg">`);
    }
    results.textContent = `dice: ${values.join(', ')}`;
    imgResults.innerHTML = images.join('');
}