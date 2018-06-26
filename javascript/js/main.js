function submit(){
    var name,family,username,email,address;
    name = document.getElementById("name").value;
    family = document.getElementById("family").value;
    username = document.getElementById("username").value;
    email = document.getElementById("email").value;
    address = document.getElementById("address").value;
    if(name == ""){
        alert("Please enter name!");
    }
    else if(family == ""){
        alert("Please enter Family!");
    }
    else if(username == ""){
        alert("Please enter username!");
    }
    else if(email == ""){
        alert("Please enter email!");
    }
    else if(address == ""){
        alert("Please enter address!");
    }
    else{
        document.getElementById("name").value = "";
        document.getElementById("family").value = "";
        username = document.getElementById("username").value ="";
        email = document.getElementById("email").value = "";
        document.getElementById("address").value = "";
        //
        // var inputs = document.getElementById("a").getElementsByTagName("input");
        // var i;
        // var length;
        // var value;
        //
        // for (i = 0, length = inputs.length; i < length; i++) {
        //     // Check we have [type='text']
        //     if (inputs[i].type != "text") {
        //         continue;
        //     }
        //     value = inputs[i].value;
        //
        // }

        var pTag = document.createElement("p");

        var taskTag = document.createElement("span");

        var task = document.createTextNode(name);

        taskTag.appendChild(task);

        pTag.appendChild(taskTag);

        var result = document.getElementById("result");

        result.appendChild(pTag);

        var remoTag = document.createElement("span");

        var remoText = document.createTextNode(" x");

        remoTag.appendChild(remoText);

        pTag.appendChild(remoTag);

        taskTag.addEventListener("click",change);

        function change(){
            taskTag.style.textDecoration = "line-through";
            taskTag.style.color = "blue";
        }

        var remove = document.createAttribute("onclick");

        remove.value = "this.parentNode.remove()";

        remoTag.setAttributeNode(remove);

    }
    return false;
}
  