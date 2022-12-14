function addEvent(event, elem, fxn) {
    if (elem.addEventListener) {
        elem.addEventListener(event, fxn, false);
    } else if (elem.attachEvent) {
        elem.attachEvent('on' + event, fxn);
    } else {
        elem['on' + event] = fxn;
    }
}

function loadStoredDetails() {
    if (Modernizr.localstorage) {
        var name = localStorage.getItem("name");
        var email = localStorage.getItem("email");
        var remember = localStorage.getItem("remember");

        if (name) {
                document.getElementById("name").value = name;
        }
        if (email) {
            document.getElementById("email").value = email;
        }
        if(remember === "true")
        {
            document.getElementById("rememberme").setAttribute("checked", "checked");
        }
    }
    else {
        alert("no native support for HTML5 Storage.");
    }
}

function saveData() {
    if(Modernizr.localStorage) {
        if (document.getElementById("rememberme").checked === true) {
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;

            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("remember",true);
        }
        else {
            localStorage.clear();
        }
    }
    else {
        alert("No native support for Web storage.")
    }
}

loadStoredDetails();
var rememberMe = document.getElementById("rememberme");
addEvent('change', rememberMe, saveData);
