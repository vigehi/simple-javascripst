
      var student = new Object();
      student.fName = "John";
      student.lName = "Smith";
      student.id = 5;
      student.markE = 76;
      student.markM = 99;
      student.markS = 87;
      student.calculateAverage = function()
      {
      	return (student.markE + student.markM + student.markS)/3;
      };
      student.displayDetails = function()
      {
        document.write("Student Id: " + student.id + "<br />");
        document.write("Name: " + student.fName + " " + student.lName + "<br />");
        var avg = student.calculateAverage();
        document.write("Average Marks: " + avg);
      };
		student.displayDetails();

        document.write("<br />")
        function Student(first, last, id, english, maths, science)
        {
          this.fName = first;
          this.lName = last;
          this.id = id;
          this.markE = english;
          this.markM = maths;
          this.markS = science;
          this.calculateAverage = function()
          {
         	 return (this.markE + this.markM + this.markS)/3;
          }
		  this.displayDetails = function()
		  {
            document.write("Student Id: " + this.id + "<br />");
            document.write("Name: " + this.fName + " " + this.lName + "<br />");
            var avg = this.calculateAverage();
            document.write("Average Marks: " + avg + "<br /><br />");
		  }
		}
        var st1 = new Student("John", "Smith", 15, 85, 79, 90);
        var st2 = new Student("Hannah", "Turner", 23, 75, 80, 82);
        var st3 = new Student("Kevin", "White", 4, 93, 89, 90);
        var st4 = new Student("Rose", "Taylor", 11, 55, 63, 45);
        st1.displayDetails();
        st2.displayDetails();
        st3.displayDetails();
        st4.displayDetails();
        document.write("<br />")
        var employee={first:"John", last:"Doe", department:"Accounts"};
        var details = "";
        document.write("<b>Using for/in loops </b><br />");
        for (var x in employee)
        {
          details = x + ": " + employee[x];
          document.write(details + "<br />");
        }
        document.write("<br />")
         // Create a Date Object
    var day = new Date();
    // Use getDay function to obtain todays Day.
    // getDay() method returns the day of the week as a number like 0 for Sunday, 1 for Monday,???.., 5
    // This value is stored in today variable
    var today = day.getDay();
    // To get the name of the day as Sunday, Monday or Saturday, we have created an array named weekday and stored the values
    var weekday = new Array(7);
    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="Thursday";
    weekday[5]="Friday";
    weekday[6]="Saturday";
    // weekday[today] will return the day of the week as we want
    document.write("Today is " + weekday[today] + ".");
 