//Websiteproject

let q1InpEl = document.getElementById("q1ans") ;
let q2InpEl = document.getElementById("q2ans") ;
let q3InpEl = document.getElementById("q3ans") ;
let q4InpEl = document.getElementById("q4ans") ;
let q5InpEl = document.getElementById("q5ans") ;
let btnEl = document.getElementById("btn") ;
let outputEl  = document.getElementById("percent") ;
// Global Vals 
let n = 0 ; 
//EventList
btnEl.addEventListener("click", calc)
//Functions

function calc(){
    let q1ans = q1InpEl.value;
    let q2ans = q2InpEl.value;
    let q3ans = q3InpEl.value;
    let q4ans = q4InpEl.value;
    let q5ans = q5InpEl.value;
    q1ans = q1ans.toLowerCase();
    q2ans = q2ans.toLowerCase();
    q3ans = q3ans.toLowerCase();
    q4ans = q4ans.toLowerCase();
    q5ans = q5ans.toLowerCase();

    if (q1ans === "1" || q1ans === "the nineties" || q1ans === "1990s" || q1ans === "1990's" || q1ans === "90s" || q1ans === "90's" ||  q1ans ==="nineties"){
        n++
        q1InpEl.style.borderColor = "green"
        q1InpEl.style.borderWidth = "4px"
    } else {
        q1InpEl.style.borderColor = "red"
        q1InpEl.style.borderWidth = "4px"
    }
    if (q2ans === "1" || q2ans === "mobile"  || q2ans === "the mobile industry"){
        n++
        q2InpEl.style.borderColor = "green"
        q2InpEl.style.borderWidth = "4px"
    } else {
        q2InpEl.style.borderColor = "red"
        q2InpEl.style.borderWidth = "4px"
    }
    if (q3ans === "1" || q3ans === "starcraft"  || q3ans === "starcraft 2"  || q3ans === "quake"  || q3ans === "Street fighter"){
        n++
        q3InpEl.style.borderColor = "green"
        q3InpEl.style.borderWidth = "4px"
    } else {
        q3InpEl.style.borderColor = "red"
        q3InpEl.style.borderWidth = "4px"
    }
    if (q4ans === "1" || q4ans === "tennis for two" || q4ans === "tennis for 2"){
        n++
        q4InpEl.style.borderColor = "green"
        q4InpEl.style.borderWidth = "4px"
    } else {
        q4InpEl.style.borderColor = "red"
        q4InpEl.style.borderWidth = "4px"
    }
    if (q5ans === "1" || q5ans === "vr" || q5ans === "cloud" || q5ans === "arcade"){
        n++
        q5InpEl.style.borderColor = "green"
        q5InpEl.style.borderWidth = "4px"
    } else {
        q5InpEl.style.borderColor = "red"
        q5InpEl.style.borderWidth = "4px"
    }

    outputEl.innerHTML = n/5 * 100; 

}
