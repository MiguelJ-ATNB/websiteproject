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

function calc() {
    if (q1ans === "The nineties" || "90's" || "The Nineties" || "the nineties" || "1990's" || "1990" || "nineties")
    {   n++
      //  q1InpEl.style.borderColor = "Green"
        q1InpEl.style.borderWidth = "4px"
    } else {
        q1InpEl.style.borderColor = "blue"
        q1InpEl.style.borderWidth = "4px"
    }
    
    if (q2ans === "" ){
        n++
        q2InpEl.style.borderColor = "Green"
    }





// if (total count == 1){ 
// calculate percentage }else if( repeat first if){}
}
