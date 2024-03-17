
let myOutput;
document.addEventListener("DOMContentLoaded",function(){
    myOutput=document.createElement("div");
    myOutput.innerHTML="0";
    myOutput.classList.add("output");
    myCalculator.appendChild(myOutput);
    for(let y=0;y<myKeys.length;y++){
        let div=document.createElement("div");
        div.classList.add('row')
        for(x=0;x<myKeys[y].length;x++){
            let btn=document.createElement("div");
            btn.innerHTML=myKeys[x][y];
            btn.classList.add("btn");
            btn.addEventListener("click",btnHit);
            div.appendChild(btn)
        }
        myCalculator.appendChild(div)
    }
    

})

function btnHit(){
    let myValue = this.innerHTML;
    let myCal = myOutput.innerHTML;

    // Check if "=" was clicked and calculate
    if(myValue == "="){
        // Perform calculation only if the last character is not an operator
        if(!myOper.includes(myCal.charAt(myCal.length - 1))){
            try {
                // Using new Function() to avoid eval() due to security concerns
                myCal = new Function('return ' + myCal)();
                myCal = myCal.toString(); // Ensure myCal is a string for further operations
            } catch (error) {
                myCal = "Error"; // In case of invalid equation
            }
        }
    } else if (myValue == "C") {
        // Clear the calculator screen
        myCal = "0";
    } else {
        // Handle operator and number input
        let lastChar = myCal.substring(myCal.length - 1);
        if(myOper.includes(myValue)){
            if(myOper.includes(lastChar)){
                // Replace the last operator if a new operator is clicked
                myCal = myCal.substring(0, myCal.length - 1);
            }
            // No else block needed here as we always append the new operator below
        }
        // Append the new value
        myCal = myCal == "0" ? myValue : myCal + myValue;
    }

    // Update the output display
    myOutput.innerText = myCal;
}
