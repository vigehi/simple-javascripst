
        document.write("<b>Define a simple function </b><br/>");
      function myFunction()
      {
      	document.write("This is a simple function.<br />");
      }
		myFunction();
       document.write("<br/>");
       document.write("<b> Functions with Arguments</b><br/>");
       var count = 0;
       function myName(name){
           for(i = 0; i<name.length; i++){
               if(name[i] == "a" || name[i] == "e" || name[i] == "i" || name[i] == "o" || name[i] == "u")
               count = count + 1;
           }
           document.write("Hello " + name + "!, Your name has " + count + " Vowels");
       }
       var nName = prompt("Please Enter your name");
       myName(nName);

       document.write("<br/>");
       document.write("<b> Functions with Return types</b><br/>");
       function returnSum(x1, y1){
           sum = x1 + y1;
           return sum;
       }
       var x = 223;
       var y = 324;
       document.write(x +" + " + y +" = " + returnSum(x, y));

