// console.log("Hello");

let str = "hello \nworld";
// console.log(str);
// console.log("Hello \"Ahmad\"  ");
// console.log(str.length);// Shows the length of the string
// console.log(str.at(0));
// console.log(str.at(str.length - 1));//last character of the string

let string = "My name is Ahmad ";
for (char of string){
    // console.log(char);
}

// console.log(string.toUpperCase());
// console.log(string.toLowerCase());

let search = "Where to find tabs";
// console.log (search.at( search.indexOf("tabs") ) );

let message = "As sly as a fox, as strong as an ox";
let target = "as";
let pos  = 0;

// while(true){ 
//     let foundpos = message.indexOf(target, pos);
//     if(foundpos == -1)break;

//     console.log(`Found position at ${foundpos}`);
//     pos = foundpos + 1;

// }

let capital = "ahmad";
function firstcap(capital){
    if(!capital) return capital;

    return capital[0].toUpperCase() + capital.slice(1);
}

function truncate(str, limit){ 
    if(!str) return str;

    return str.slice(0, limit);
}

function extract(str){
    if(!str) return str;

    return str.slice(1);
}