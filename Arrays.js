
	<script>
        alert("I getting to create arrays");
	    var students = new Array("John", "Ann", "Aaron", "Edwin", "Elizabeth");	
        Array.prototype.displayItems=function(){
            for(i=0;i<this.length;i++){
                document.write(this[i] + "<br/>");
            }
        }
        document.write("Students array <br/>");
        students.displayItems();
        document.write("<br/> The number of itemss in students is" + students.length+"<br/>");
        document.write("<br/>The sorted student array <br/>");
        students.sort();
        students.displayItems();
		document.write("<br />The REVERSED students array<br />");
		students.reverse();
		students.displayItems();
		document.write("<br />THE students array after REMOVING the LAST item<br />");
		students.pop();
		students.displayItems();
        document.write("<br />THE students array after PUSH<br />");
        students.push("New Stuff");
		students.displayItems();


    </script>
