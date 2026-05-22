let calculator = {
        input(){
            num1 = Number(prompt("Enter a Number", ));
            num2 = Number(prompt("Enter Another Number", ));
        },

        sum(){
            console.log(`Sum of the numbers is : ${num1 + num1}`);
        },
        mul(){
            console.log(`The product of numebrs is : ${num1 * num2}`);
        }

    }
calculator.input();
calculator.sum();
calculator.mul();
