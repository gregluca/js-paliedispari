const userWord = prompt("Scrivi una parola e ti diro se e palindroma");

console.log(userWord);

function isPalindrom (userWord) {   
    let i = 0;
    for (i = 0; i < userWord.length; i++){
        if (userWord[i] != userWord[userWord.length - 1 -[i]]) {   
            return ("Non palindroma"); 
        }
    } 
    return "palindroma";
}
console.log(isPalindrom(userWord));