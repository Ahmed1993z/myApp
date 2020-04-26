$(document).ready(fApp);

function fApp() {
    
    var url = "./js/meteo.json";
    $.getJSON(url, fMETEO);
}

function fMETEO(x) {
      $("#tb").html("");
   for (var i = 0; i < x.length; i++) {
       var code="<tr><td><font color='red'>"+x[i].ville+"</font></td><td>"+x[i].temperature+"</td></tr>";
       $("#tb").append(code)
       


}
  
   


}


