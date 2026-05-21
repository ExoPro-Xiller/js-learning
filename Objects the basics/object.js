// Objects in JavaScript
let bike = {
    brand: "Honda",
    cc: 150,
    model: "Honda CB150f",
    "Goes fast": "Very fast",
    fun: undefined,
}
// console.log("fun" in bike);
// console.log(`${bike["model"]}`)
// console.log(bike["Goes fast"])
// console.log(bike.cc);

for (key in bike) {
    // console.log(bike[key])
}

function bikercheck(cc, model) {
    return {
        cc,
        model,
    }
}
let bikecc = bikercheck(100, "mynigga")
// alert(bikecc.cc)


// Numbers Always Prnt in Ascending ORder(Add a + before them to make them print as in order given)
let phonecodes = {
    '+92': "Pakistan",
    '+91': "India",
    '+1': "America",
    '+41': "Switerzerland",
}
for (let codes in phonecodes) {
    // console.log(codes);
}

// TO clone objects::

let obj1 = {
    name: "Ahmad",
    Age: 15,
    height: 150,
};
let obj2 = {};
for (let keys in obj1) {
    obj2[keys] = obj1[keys];

};
obj2.name = "Abdullah";
// console.log(obj2.name);

// Assigning Syntax: Object.assign(assign.to.what, assign.what);

let obj3 = {};
Object.assign(obj3, obj1);
// console.log(obj3.Age)

//Structured Clone

let clone1 = {
    name:"Ahmad",
    height: 150,
    age:{
        day: 28,
        month: 2,
        year: 2011,
    }
};

let clone2 = structuredClone(clone1);
// console.log(clone2);