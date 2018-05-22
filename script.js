function check(){

  var user=document.getElementById("name");
  var mail=document.getElementById("email");
  var comment=document.getElementById("text");
  
  var reUser =  /^[A-Z]{1}[a-z]{2,19}$/;
  var reMail = /^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/;

  var data= new Array();
  var errors = new Array();
  var errorId = new Array();

if (!user.value.match(reUser)) {
    errorId.push(user.id);
}
else{
  data.push(user);
}
if (!mail.value.match(reMail)) {
    errorId.push(mail.id);
}
else{
  data.push(mail);
}
if (comment.value == "") {
  errorId.push(comment.id);
}
else{
  data.push(comment);
}  
  if(errorId.length != 0)
  {
    for(var i = 0; i < errorId.length; i++)
    {
      document.getElementById(errorId[i]).style.borderColor = "red";
    }
  }
 else
  {
    location.reload (true);
    alert("Thank you for commenting!");
  }
}
function result(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            unosuxml(xhttp);
        }
    };
    xhttp.open("GET", "xml/comments.xml", true);
    xhttp.send();

    function unosuxml(xml) {
        var choiceVal = new Array();
        var results = new Array();
        var xmlDoc = xml.responseXML;
        var tagoviRes = xmlDoc.getElementsByTagName("comment");
        var divRe=document.getElementById('xmlcomment');
        for (var i = 0; i < tagoviRes.length; i++) {
          choiceVal.push(tagoviRes[i].getElementsByTagName('name')[0].childNodes[0].nodeValue);    
          results.push(tagoviRes[i].getElementsByTagName('text')[0].childNodes[0].nodeValue);   
        }
        for (var i = 0; i < choiceVal.length; i++) {
          divRe.innerHTML+="<p>Name: "+choiceVal[i]+" Comment:"+results[i]+" </p>";     
        }       
         
    }
}