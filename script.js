const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", function () {
    
    const textInput = document.getElementById("text-input").value;
    if(textInput === ""){
        alert("Please input a value");
    } else {
        isPalindrome(textInput);
    }

});
function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    const reverseStr = cleanStr.split("").reverse().join("");
    
    if(cleanStr === reverseStr){
        result.style.display = "block";
        result.textContent = `${str} is a Palindrome`;
    } else {
        result.style.display = "block";
        result.textContent = `${str} is not a Palindrome`;
    }
}