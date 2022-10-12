var num1 = 4;

function a() {
    var num2 = 5;
    function b() {
        var num3 = 11; // num3 is declared inside funciton b
        console.log(num3) // 11
        console.log(num2) // 5
        console.log(num1) // 4
    }

    b();
    console.log(num3, "Inside function a"); // Error (REFERENCE)
    console.log(num1, "inside function a"); // 4
}

a();
console.log(num2, "In global scope"); // Error (REFERENCE)