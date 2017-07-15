//var n=prompt("enter the number to be sum up");
//if we enter the input as 1000 then 1+2+#.....+1000=500500
var sum=0;
for(i=1; i <= 1000; i++)
   {
	var sum =sum+i;
   }
document.write("<br> total sum of for loop is "+sum);

var total=0;
var i=0;
while (i<=1000) 
{
   total += i; 
    i++;
}

document.write("The sum of while loop is " + total);
