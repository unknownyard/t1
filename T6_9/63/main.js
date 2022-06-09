function sum(){
var sum = parseFloat(document.getElementById("f1").value) + parseFloat(document.getElementById("f2").value)+ parseInt(document.getElementById("i").value);
document.querySelector('#res').innerHTML +=
            `
            <p>Sum of entered Numbers is ${sum} </p>
            `;
}