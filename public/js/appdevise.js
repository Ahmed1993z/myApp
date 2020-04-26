$(document).ready(fApp);

function fApp() {
    
    var url = "./js/devise.json";
    $.getJSON(url, fDEVISE);
}

function fDEVISE(x) {
     $("#tb").html("");
    for (var i = 0; i < x.length; i++) {
        if (x[i].valh < x[i].vala) {
            var state = '<i class="fas fa-arrow-up text-danger"></i>'
        } else if (x[i].valh > x[i].vala) {
            var state = '<i class="fas fa-arrow-down text-success"></i>'
        } else {
            var state = '<h6 class=" text-info">=</h6>'

        }
        
         var code="<tr><td>"+x[i].nom+"</td><td>"+x[i].valh+"</td><td>"+x[i].vala+"</td><td>"+state+"</td></tr>";
        $("#tb").append(code)
        
        

    }


}