// Switch-Case Function

function checkPercentage(){
    let percentage = Number( prompt("Enter your Percentage", ) );
    switch(percentage) {
    case 40:
            alert("Fail");
            break;
        case 50:
            alert("Barely passed");
            break;
        case 60:
            alert("Naww");
            break;
        case 70:
            alert("Ehh");
            break;
        case 80:
            alert("Could be Better");
            break;
        case 90:
            alert("Great");
            break;
        case percentage > 90:
            alert("Amazing");
            break;
    }
}

function checkMCQ() {
    let answer = prompt("Which is not a type of condition check: a-If, b-else, c-ifelse, d-else-else", );

    switch(answer){
        case "a":
        case "b":
        case "c":
            alert("Wrong");
            break;

        case "d":
            alert("Correct");
    }
}