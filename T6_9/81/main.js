function check(){
    var n=parseInt(document.getElementById("num").value);
    if (n%2==0) {
        document.querySelector("#mult").innerHTML+=
        `
        <p>${n} is an Even Number</p>
        `;
    } else {
        document.querySelector("#mult").innerHTML+=
        `
        <p>${n} is an Odd Number</p>
        `;   
    }
}