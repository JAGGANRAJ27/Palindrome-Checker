function palindrome()
{
    var a = document.getElementById("userinput").value.toUpperCase();
    var temp ="";
    var result = document.getElementById("result");
    for(i=a.length-1;i>=0;i--)
    {
        temp = temp + a[i]
    }
    if(a==temp)
    {
        result.innerHTML = a + " is a palindrome";
    }
    else
    {
        result.innerHTML = a + " is not a palindrome";
    }
}