           function Connect(){
            var agent = document.getElementById("agent").value;
             if (agent=="ZA000GA01" || agent=="ZA000GA02" || agent=="THOM007" || agent=="JOHN007"){
                 document.getElementById("user").style.display="none";
                 document.getElementById("corps").style.display="block";

             } else{
                document.getElementById("errorMessage").innerHTML = "Agent Non Identifiable!";
             
             }

           }
