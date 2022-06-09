function reverseString()
        {
            var str  = document.getElementById("str").value;
            var rev = "";
            for(var i = str.length - 1; i >= 0; i--) {
                rev += str[i];
            }
            //alert("Reverse of entered String is " + rev);
            //document.write("Reverse of entered String is " + rev);
            document.querySelector('#rev').innerHTML +=
            `
            <p>Reverse of entered String is ${rev} </p>
            `;
        }