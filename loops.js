
            var students = new Array("John", "Ann", "Aaron", "Edwin", "Elizabeth");
            document.write("<b> The students </b><br />");
            for(i=0;i<students.length;i++){
                document.write(students[i]+"<br />");
            }
            document.write(" <br/>")
            document.write("<b>While loops </b><br/>");
            var i = 0, j = 1, k;
            document.write("Fibonacci series less than 400 <br/>");
            while(i<400){
                document.write(i + "<br/>");
                k=i+j;
                i=j;
                j=k;
            }
            document.write(" <br/>");
            document.write("<b> Do while Loops</b><br/>");
            var i=2;
            document.write("Even numbers");
            do{
                document.write(i + "<br/>");
                i=i+2;
            } while(i<100)
