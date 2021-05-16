function IndexToEng() {
    document.getElementById('pealkiri').innerHTML = "Curriculum scenario calculator";
    document.getElementById('pealeht').innerHTML = "Back to mainpage";
    document.getElementById('green_line').innerHTML = "Study data can be found in Õis under study results";
    document.getElementById('oppekavad_label').innerHTML = "Choose a curriculum";
    document.getElementById('vali_oppekava').style.marginLeft = "45px";
    document.getElementById('tasuta_label').innerHTML = "Free";
    document.getElementById('tasuline_label').innerHTML = "Paid";
    document.getElementById('tasuline_label').style.marginLeft = "13px";
    document.getElementById('edasi').innerText = "Next";
    document.getElementById('edasi').style.color = "white";
    document.getElementById('placeholder').innerHTML = "Choose a curriculum...";
    document.getElementById('informaatika').innerHTML = "Informatics";
    document.getElementById('infotehnoloogia').innerHTML = "Infotechnology";
    document.getElementById('infoteadus').innerHTML = "information science";
}

function CalculatorToEng(){
    document.getElementById('pealkiri').innerHTML = "Curriculum scenario calculator";
    document.getElementById('pealeht').innerHTML = "Back to mainpage";
    document.getElementById('green_line2').innerHTML = "Study data can be found in Õis under study results";
    document.getElementById('sem_arv_label').innerHTML = "Number of semesters spent at TU";
    document.getElementById('sem_arv_label').style.marginRight = "-35px";
    document.getElementById('ap_sem_arv_label').innerHTML = "Number of semesters spent on academic leave";
    document.getElementById('ap_sem_arv_label').style.marginRight = "-2px";
    document.getElementById('eap_label').innerHTML = "EAPs taken into account when completing the curriculum";
    document.getElementById('eap_label').style.marginRight = "-84px";
    document.getElementById('valis_text').innerHTML = "Have you studied abroad or on internship?";
    document.getElementById('rigikeel_text').innerHTML = "Have you been assigned and completed the minor specialization in the state language?";
    document.getElementById('akpuhkus_text').innerHTML = "Are you currently on academic leave?";
    document.getElementById('valis_sem_arv_label').innerHTML = "Number of semesters spent abroad";
    document.getElementById('valis_eap_arv_label').innerHTML = "Number of EAP completed in abroad study";
    document.getElementById('valis_sem_arv').style.marginLeft  = "-8px";
    document.getElementById('valis_eap_arv').style.marginLeft  = "-20px";

    var x = document.getElementsByClassName("jah_label");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML = "Yes";
    }
    var y = document.getElementsByClassName("ei_label");
    var j;
    for (j = 0; j < y.length; j++) {
        y[j].innerHTML = "No";
    }
}

function ShowValis(){
    document.getElementById('valis_sem_arv_label').style.display = "inline";
    document.getElementById('valis_sem_arv').style.display = "inline";
    document.getElementById('valis_sem_arv_label').style.marginRight = "211px";
    document.getElementById('valis_jah').style.marginBottom = "15px";

    document.getElementById('valis_eap_arv_label').style.display = "inline";
    document.getElementById('valis_eap_arv').style.display = "inline";
    document.getElementById('valis_eap_arv_label').style.marginRight = "180px";
    document.getElementById('rigikeel_text').style.marginTop = "5px";
}

function HideValis(){
    document.getElementById('valis_sem_arv_label').style.display = "none";
    document.getElementById('valis_sem_arv').style.display = "none";

    document.getElementById('valis_eap_arv_label').style.display = "none";
    document.getElementById('valis_eap_arv').style.display = "none";
    document.getElementById('rigikeel_text').style.marginTop = "-25px";
}
