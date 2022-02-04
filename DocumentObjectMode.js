

		
        var text2 = document.getElementById("two").innerHTML;
        alert("Visitor loves " + text2);
        var paragraphs = document.getElementsByTagName("p");
    alert("Content in the second paragraph is " + paragraphs[1].innerHTML);
    document.getElementById("second").innerHTML = "The orginal message is changed.";
	document.getElementById("btnClick").addEventListener("click", clicked);
    function clicked()
    {
   		 alert("You clicked me!!!");
    }
 