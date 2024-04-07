var originalText = "I love my country Pakistan. <br> I like my city Faisalabad. <br> I love my Homeland."

var cities = ["Islamabad", "Lahore", "Karachi", "Peshawar", "Quetta","Kashmir"]

document.getElementById('originalTextBox').innerHTML = originalText;

// Show Notification Bar
const showNotification=(msg, type)=>{
    let bgColor;
    switch (type) {
        case "success":
            bgColor = "linear-gradient(to left, #1D976C, #93F9B9)"
            break;
        case "error":
            bgColor = "linear-gradient(to left, #93291e, #ed213a)"
            break;
        default:
            break;
    }
    
    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `right`, `center` or `left`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: bgColor,
        },
        onClick: function(){} // Callback after click
      }).showToast();
    
    }

function showDiolog(){
 
    document.getElementById("output").innerHTML = "";
  }
  




  
  const showOutput = (output) => {
    document.getElementById("output").innerHTML = output;
  }

function clearInput(){
    document.getElementById("inputText").value = "";
}
function lowerCase() {
   let lowerCaseText = originalText.toLowerCase();
    // document.getElementById("output").innerHTML = lowerCaseText
    showOutput(lowerCaseText)
}
function upperCase() {
    let upperCaseText = originalText.toUpperCase();
    showOutput(upperCaseText)
    //  document.getElementById("output").innerHTML = upperCaseText
 }
 function capitalize(){
    let capitalizeText = '<span style="text-transform: capitalize;">'+ originalText + '</span>';
    showOutput(capitalizeText)
    // document.getElementById("output").innerHTML = capitalizeText;

 }
function formatting(){
    let text = document.getElementById("inputText").value;
    text = text.toLowerCase();
    if(!text){
        showNotification('Please type your text.')
        // toastifyError('Please type your text.');
        return;
    }
    document.getElementById('output').style.textTransform = 'capitalize';
    document.getElementById('output').innerHTML = text;
   
}
function printAllCities(){
    document.getElementById("output").innerHTML = ""; 

for (let i = 0; i <cities.length; i++) {
    let city = cities[i];
    document.getElementById("output").innerHTML += i + 1 +") " + city + "<br />"
}
}


function  addCity(){
    let city = document.getElementById("inputText").value;
if(!city && city.length < 3) {
    showNotification('Please type your city name.');
    return;
}
let cityFirstLetter = city.charAt(0).toUpperCase();
let cityAllLetter = city.slice(1).toLowerCase();
let cityWordInCapitalize = cityFirstLetter + cityAllLetter;
let cityFound = false;
for ( let i = 0; i < cities.length; i++){
    if ( cities[i] === cityWordInCapitalize){
        cityFound = true;
        let html = '<span style="color: red; font-size: 20px;">"' + cityWordInCapitalize + '"</span> is already in list.';
        showOutput(html)
    }
}
if (cityFound == false){
    cities.push (cityWordInCapitalize);
    let html = '<span style="color: green; font-size: 20px;">"' + cityWordInCapitalize + '"</span> has been successfully added into list.';
        showOutput(html)
}

}

function checkcity(){
    let city = document.getElementById("inputText").value;
    if(!city && city.length<3) {
        showNotification('Please type your city name.');
        return;
    }
    cityFirstLetter = city.charAt(0).toUpperCase();
    cityAllLetter = city.slice(1).toLowerCase();
    cityWordInCapitalize = cityFirstLetter + cityAllLetter;
    let cityFound = false;
    for ( let i = 0; i < cities.length; i++){
        if ( cities[i] === cityWordInCapitalize){
            cityFound = true;
            let html = '<span style="color: red; font-size: 20px;">"' + cityWordInCapitalize + '"</span> is already in list.';
            showOutput(html)
        }
    }
    if (cityFound == false){
        let html = 'SORRY &#128524; We coudn\'t find your city <span style="color: green; font-size: 20px;">"' + cityWordInCapitalize + '"</span> <br> please click <span style="color: green; font-size: 20px;">"Add Your City In List"</span> to add your city &#128578';
            showOutput(html)
    }
    
    }

    function findWord(){
        let newOriginalText = originalText.toLowerCase();
        let word = document.getElementById("inputText").value;
        if(!word){
            showNotification('Please type a word for find.');
            return;
        }
        word = word.toLowerCase();
        let findWord = newOriginalText.indexOf(word);
        if (findWord !== -1){
            let html = ' Your word <span style="color: green; font-size: 20px;">"' + word + '"</span> found at index:' + findWord;
            showOutput(html)
        }else {
            let html = ' Your word <span style="color:red; font-size: 20px;">"' + word + '"</span> does not exist in the Original String.';
            // document.getElementById('ouput').innerHTML = html;
            showOutput(html)
        }
    } 

    function replaceWord(){
        let newOriginalText = originalText.toLowerCase();
        let word = document.getElementById("inputText").value;
        if(!word){
            showNotification('Please type a word for replace.');
            return;
        }
        let replaceWith = prompt('Enter a word that you want to replace with');
        if (!replaceWith){
            alert('Please type a word to replace it with ' + word + ".")
            return;
        }
        word = word.toLowerCase();
        word = new RegExp(word,'g');
        replaceWith = replaceWith.toLowerCase();
        let replaceWord = newOriginalText.replace(word, replaceWith);
        document.getElementById("output").innerHTML = replaceWord;
    }









