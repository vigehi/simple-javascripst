
            document.write("<b>If statement</b><br/>");
            var age = prompt("Enter your age ");
            if(age>=18)
            document.write("You are an adult<br/>");
            if(age<=18)
            document.write("A kid<br/>");
            document.write("<br/>");

            document.write("<b> if else sattement</b> <br/>");
            var hours = new Date().getHours();
            if(hours<13)
            document.write("Good Morning<br/>");
            else
            document.write("Good Afternoon<br/>");
            
		    if(hours<10)
		    document.write("Good Morning!!!<br />");
		    else
		   document.write("Good Afternoon!!!<br />");
           document.write("<br/>");
           document.write("<b> if else elseif sattement</b> <br/>");7
           var x = prompt("Enter your first number");
           var y = prompt("Enter your second number");
           x = parseInt(x);
           y = parseInt(y);
           if(x == y)
           document.write(x +"is equal to"+ y);
           else if(x > y)
           document.write(x +"is greater than "+ y);
           else
           document.write(x + "is less than" + y)
