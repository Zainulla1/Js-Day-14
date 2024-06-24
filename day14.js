//Exercise 1

//Check the No Of Occurence of Character in string by using in JS

var string=prompt("please enter String")
var letter=prompt("please enter letter")
let strLen=string.length;
for(let i=0; i<strLen; i++) {
    if(string[i]==letter){
        counter++;
    }
}
console.log(`in ${string} occurence of ${letter}= ${counter}`)


//Exercise -2

//Number series by using nested loop

//outer for loop

for(var i =1; i <= 3; i++)
    {
        document.write(i, "<br>")
        //Inner for loop
        for(var j = 1; j <= 4; j++)
            {
                document.write(j," ");
            }
            document.write("<br>");
    }

//Exercise-3

// tables using nested loops

let i,j;
document.write("Tables:","<br>");
//outer for loop
for(i=1; i<=2; i++)
    {
        //inner for loop
        for(j=1; j<=10;j++)
            {
                document.write(i+ " * " +j+ " = "+(i*j),"<br>" );
            }
            document.write("");
    }