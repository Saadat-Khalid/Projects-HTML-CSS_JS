const getColour = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" +  randomNumber.toString(16);

    const randNumber = Math.floor(Math.random() * 16777214);
    const textColour = "#" +  randNumber.toString(16);

    document.getElementById("color-code").innerText = randomCode;
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").style.color = textColour;



}

// event call

document.getElementById("btn").addEventListener(
    "click",
    getColour
)

// initial call

getColour();