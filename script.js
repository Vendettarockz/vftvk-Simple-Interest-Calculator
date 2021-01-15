function compute()
{
    let p=document.getElementById("principal").value;
    let r=document.getElementById("rate").value;
    let n=parseInt(document.getElementById("years").value);
    let y=parseInt(new Date().getFullYear());
    if(p<1)
    {
    	alert("Enter a positive number.");
        document.getElementById("principal").focus();
    }
    else
    {
    let i=(p*r*n)/100;
    }
    document.getElementById("result").innerHTML=("If you deposit "+p+",<br>at an interest rate of "+r+"%.<br>You will recieve an amount of "+i+",<br>in the year "+(y+n));
}
        
