function table(){
    var n=parseInt(document.getElementById("num").value);
    var x;
    console.log(n);
    for (var i = 1; i<=10; i++) {
        //alert("C ${i}");
        x=n*parseInt(i);
        console.log(x);
        document.querySelector("#mult").innerHTML+=
        `
        <p>${n} * ${i} = ${x}</p>
        `;
    }
}