function add(x,y){
    x = +prompt("Enter a number", );
    y = +prompt("Enter another number", );

    return alert(`${x} + ${y} = ${x + y}`);
}

// USE IN CONSOLE
function addition(x,y){
    return (`${x} + ${y} = ${x + y}`);
}

function concatenation(name1 = fromanotherfunction(), name2){
    return (`${name1} + ${name2} = ${name1 + " " + name2}`);
}

function nullish(count) {
    console.log(count ?? "Unknown value");
    return `${count}`;
}
// ------------------------------------------------------------------------------------------------
