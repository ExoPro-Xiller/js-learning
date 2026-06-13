// Logical Operators
//Logical AND
/*
    console.log( Number(true && true) );
    console.log( Number(true && false) );
    console.log( Number(false && true) );
    console.log( Number(false && false) );
*/

//Logical OR
/*
    console.log( Number(true || true) );
    console.log( Number(true || false) );
    console.log( Number(false || true) );
    console.log( Number(false || false) );
*/

//Logical NOT
/*
    console.log( Number(!true) );
    console.log( Number(!false) );
*/


// Functions of AND
//AND displays the first FALSE value in multiple OR conditions
    let value = null && 1 && 6;
    // console.log(value);

    let value2 = undefined && 5 && null;
    // console.log(value2);

// Functions of OR 
//OR displays the first true value in multiple OR conditions
    let value5 = null || 1 || undefined;
    // console.log(value);

    let value6 = 0 || 5 || null;
    // console.log(value2);

//OR can display the last value if ALL are FALSE
    let value7 = 0 || 0 || 0;
    // console.log(value3);

    let value8 = undefined || 0 || null;
    // console.log(value4);

//Functions of NOT (!!)
// (!!) is used to convert non boolean datatypes to boolean
    let str = "";
    let str2 = "Hello"
    let numb = 0;
    let numb2 = 10;
/*
    console.log( !!(str) );
    console.log( !!(str2) );
    console.log( !!(numb) );
    console.log( !!(numb2) );
*/

    

