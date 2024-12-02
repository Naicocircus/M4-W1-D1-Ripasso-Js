
//1---------------------------

function checkFifty(num1, num2) {
    // Log dei numeri in ingresso
    console.log(`Checking numbers: ${num1}, ${num2}`);

    // Condizione per verificare se uno dei numeri è 50 o la loro somma è 50
    if (num1 === 50 || num2 === 50 || (num1 + num2) === 50) {
        console.log("Condition met: Returning true");
        return true;
    }

    console.log("Condition not met: Returning false");
    return false;
}

// Test della funzione con vari input
console.log(checkFifty(50, 20)); 
console.log(checkFifty(20, 30)); 
console.log(checkFifty(25, 25)); 
console.log(checkFifty(10, 5));  

//2---------------
function removeCharacter(str, position) {
    // Log della stringa e della posizione in ingresso
    console.log(`Original string: "${str}", Position to remove: ${position}`);

    if (position < 0 || position >= str.length) {
        console.log("Invalid position: Returning the original string");
        return str; // Restituisce la stringa originale se la posizione è fuori range
    }

    // Creazione della stringa senza il carattere alla posizione specificata
    const modifiedString = str.slice(0, position) + str.slice(position + 1);

    // Log della stringa modificata
    console.log(`Modified string: "${modifiedString}"`);

    return modifiedString;
}

// Test della funzione con vari input
console.log(removeCharacter("hello", 1)); 
console.log(removeCharacter("world", 4)); 
console.log(removeCharacter("javascript", 10)); 
console.log(removeCharacter("example", -1)); 
//3----------------

function checkRange(num1, num2) {
    // Log dei numeri in ingresso
    console.log(`Checking numbers: ${num1}, ${num2}`);

    // Controllo se entrambi i numeri sono nel range 40-60 o 70-100
    const isInFirstRange = (num1 >= 40 && num1 <= 60) && (num2 >= 40 && num2 <= 60);
    const isInSecondRange = (num1 >= 70 && num1 <= 100) && (num2 >= 70 && num2 <= 100);

    if (isInFirstRange || isInSecondRange) {
        console.log("Condition met: Returning true");
        return true;
    }

    console.log("Condition not met: Returning false");
    return false;
}

// Test della funzione con vari input
console.log(checkRange(45, 50)); 
console.log(checkRange(75, 85)); 
console.log(checkRange(50, 80)); 
console.log(checkRange(30, 50)); 
//4------------------
function checkCityName(cityName) {
    // Log del nome della città in ingresso
    console.log(`City name provided: "${cityName}"`);

    // Converti il nome della città in lowercase per evitare problemi con la capitalizzazione
    const lowerCityName = cityName.toLowerCase();

    // Controlla se inizia con "los" o "new"
    if (lowerCityName.startsWith("los") || lowerCityName.startsWith("new")) {
        console.log(`Condition met: Returning city name "${cityName}"`);
        return cityName;
    }

    console.log("Condition not met: Returning false");
    return false;
}

// Test della funzione con vari input
console.log(checkCityName("Los Angeles")); 
console.log(checkCityName("New York"));    
console.log(checkCityName("Boston"));      
console.log(checkCityName("los santos"));  
console.log(checkCityName("Newark"));     
console.log(checkCityName("San Francisco")); 

//5------------------
function calculateSum(arr) {
    // Log dell'array in ingresso
    console.log(`Array provided: ${arr}`);

    // Verifica che l'input sia un array e contenga solo numeri
    if (!Array.isArray(arr) || !arr.every(item => typeof item === 'number')) {
        console.log("Invalid input: The array must contain only numbers");
        return null;
    }

    // Calcola la somma degli elementi dell'array
    const sum = arr.reduce((accumulator, currentValue) => {
        console.log(`Adding ${currentValue} to ${accumulator}`);
        return accumulator + currentValue;
    }, 0);

    // Log del risultato
    console.log(`Sum of array elements: ${sum}`);
    return sum;
}

// Test della funzione con vari input
console.log(calculateSum([1, 2, 3, 4, 5])); 
console.log(calculateSum([10, 20, 30]));    
console.log(calculateSum([]));              
console.log(calculateSum([5]));             
console.log(calculateSum([1, 'two', 3]));  
//6------------------
function calculateSum(arr) {
    // Log dell'array in ingresso
    console.log(`Array provided: ${arr}`);

    // Verifica che l'input sia un array e contenga solo numeri
    if (!Array.isArray(arr) || !arr.every(item => typeof item === 'number')) {
        console.log("Invalid input: The array must contain only numbers");
        return null;
    }

    // Calcola la somma degli elementi dell'array
    const sum = arr.reduce((accumulator, currentValue) => {
        console.log(`Adding ${currentValue} to ${accumulator}`);
        return accumulator + currentValue;
    }, 0);

    // Log del risultato
    console.log(`Sum of array elements: ${sum}`);
    return sum;
}

// Test della funzione con vari input
console.log(calculateSum([1, 2, 3, 4, 5])); 
console.log(calculateSum([10, 20, 30]));    
console.log(calculateSum([]));            
console.log(calculateSum([5]));            
console.log(calculateSum([1, 'two', 3]));   
//7-----------------
function findAngleType(degrees) {
    // Log del valore in ingresso
    console.log(`Angle provided: ${degrees} degrees`);

    // Controlla il tipo di angolo in base ai gradi
    if (degrees > 0 && degrees < 90) {
        console.log("The angle is acute.");
        return "acuto";
    } else if (degrees === 90) {
        console.log("The angle is right.");
        return "retto";
    } else if (degrees > 90 && degrees < 180) {
        console.log("The angle is obtuse.");
        return "ottuso";
    } else if (degrees === 180) {
        console.log("The angle is flat.");
        return "piatto";
    } else {
        console.log("Invalid angle: Returning 'invalid'");
        return "non valido";
    }
}

// Test della funzione con vari input
console.log(findAngleType(45));   
console.log(findAngleType(90));   
console.log(findAngleType(120));  
console.log(findAngleType(180));  
console.log(findAngleType(200));  
console.log(findAngleType(-30)); 
//8------------------
function createAcronym(phrase) {
    // Log della frase in ingresso
    console.log(`Phrase provided: "${phrase}"`);

    if (typeof phrase !== 'string' || phrase.trim() === '') {
        console.log("Invalid input: Returning an empty string");
        return '';
    }

    // Dividi la frase in parole e prendi la prima lettera di ciascuna
    const acronym = phrase
        .split(' ')              
        .filter(word => word)    
        .map(word => word[0])    
        .join('')               
        .toUpperCase();          

    // Log dell'acronimo creato
    console.log(`Acronym created: "${acronym}"`);
    return acronym;
}

// Test della funzione con vari input
console.log(createAcronym("Fabbri italiana automobili Torino")); 
console.log(createAcronym("National Aeronautics and Space Administration")); 
console.log(createAcronym("Hyper Text Markup Language")); 
console.log(createAcronym("")); 
console.log(createAcronym("Single Word")); 
console.log(createAcronym("   Multiple    spaces here   ")); 
//9--------------------

