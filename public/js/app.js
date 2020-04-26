document.getElementById("b1").addEventListener("click", fOK);

function fOK() {
    var l = $("#login").val();
    var p = $("#pwd").val();
    if (navigator.onLine) {
        if (l == "istic" && p == "aaaa") {
            $(".amsg").hide();
            $("#agood").show();
            setTimeout(function() { window.location.replace("./meteo.html"); }, 1500);



        } else {
            $(".amsg").hide();
            $("#abad").show();

        }
    } else {
        $(".amsg").hide();
        $("#aconnexion").show();
    }

    
}

function f1(x) {
    if (navigator.onLine) {
        if (x.etat == "ok") {
            $(".amsg").hide();
            $("#agood").show();
            setTimeout(function() { window.location.replace("./meteo.html"); }, 1500);



        } else {
            $(".amsg").hide();
            $("#abad").show();

        }
    } else {
        $(".amsg").hide();
        $("#aconnexion").show();
    }

}