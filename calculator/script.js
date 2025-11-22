const display = document.getElementById("display");

const click1 = value => display.value += value;

const clearDisplay = () => display.value = "";

const calculate = () => {
    const exp = display.value;
    const valid = /^[0-9+\-*/.]+$/.test(exp);

    if (valid && exp !== "") {
        display.value = eval(exp);
    } else {
        display.value = "Error";
    }
};
