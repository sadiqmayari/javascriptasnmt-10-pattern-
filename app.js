document.write("<h1>Muhammad Sadiq CCO-116650</h1>");


for (i=0;i<5;i++){
    for(j=1;j<=5-i;j++){
        document.write("*")
        
    }
    
    document.write("<br>")
}

for (i=0;i<=5;i++){
    for(j=1;j<=i;j++){
        document.write("*")
        
    }
    
    document.write("<br>")
}
document.write('<p style="text-align:center">')

for (i=0;i<=5;i++){
    for(j=1;j<=i;j++){
        document.write("*")
        
    }
    
    document.write("<br>")
}
document.write("</p>")

document.write('<p style="text-align:center">')
for (i=0;i<5;i++){
    for(j=1;j<=5-i;j++){
        document.write("*")
        
    }
    
    document.write("<br>")
}
document.write("</p>")


document.write('<p style="text-align:right">')
for (i=0;i<=5;i++){
    for(j=1;j<=i;j++){
        document.write(j)
        
    }
    
    document.write("<br>")
}
document.write("</p>")

document.write('<p style="text-align:left">')
for (i=0;i<=5;i++){
    for(j=1;j<=i;j++){
        document.write(i)
        
    }
    
    document.write("<br>")
}

document.write("</p>")


document.write('<p style="text-align:left">')
var arr=["A","B","C","D","E"]
for (i=0;i<arr.length;i++){
    for(j=0;j<=i;j++){
        document.write(arr[j])
        
    }
    
    document.write("<br>")
}

document.write("</p>")


document.write('<p style="text-align:center">')
var arr=["A","B","C","D","E","F"]
for (i=0;i<arr.length;i++){
    for(j=0;j<arr.length-i;j++){
        document.write(arr[j])
        
    }
    
    document.write("<br>")
}

document.write("</p>")