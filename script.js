

function clickEvent () {
    
    var text=document.getElementById("textField");
        
        text.style.display="block";
        
      

} 
function searchEvent () {
    
    var text=document.getElementById("textField1");
        
        text.style.display="block";
        
      
        
} 

function validateForm () {
    var nameip = document.forms[0]["name"];
    var emailip = document.forms[0]["email"];
    var messageip = document.forms[0]["message"];
    if(nameip.value === ""){
         alert("Name is required.");
         return false;
    }
    if (emailip.value === "") {
      alert("Email is required.");
      return false;
    }
    if (messageip.value === "") {
      alert("a message is required.");
      return false;
    }
    return true;

}
    
