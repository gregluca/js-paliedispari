const evenOdd = prompt("scegli even o odd");
const userNumber = parseInt(prompt("scegli un numero da 1 a 5"));

console.log(userNumber,evenOdd); 

let resultNumber = rdnNumber();

function rdnNumber () {
    const rndNumber = Math.floor(Math.random() * 5) + 1;
    return rndNumber;
}
console.log(resultNumber);

let sum = (resultNumber + userNumber);
console.log(sum);

console.log(oddEven(sum));

function oddEven (sum) {
    let result ="";
    if (sum % 2 === 0 && evenOdd == "even") {
        result = "Hai vinto";
    }
    else if (sum % 2 === 0 && evenOdd != "even"){
        result = "Hai perso";
    }
    else if (sum % 2 === 1 && evenOdd == "odd") {
        result = "Hai vinto";
    }
    else if (sum % 2 === 1 && evenOdd != "odd") {
        result = "Hai perso";
    }
    return result;
}

