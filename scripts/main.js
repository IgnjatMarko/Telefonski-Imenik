const imePatern=/^[A-Z][a-z]{2,}(\s[A-Z][a-z]{2,}){1,}$/;
const telBroj=/^0(1|2|3|6)[0-9]\-[0-9]{3}-[0-9]{3,4}$/;

document.querySelector("#confirm").addEventListener("click", checkData);

function checkData(e){
    
    e.preventDefault();

    let ime = document.querySelector("#name").value;
    let tel = document.querySelector("#telefon").value;

    if(imePatern.test(ime)){
        
        if (telBroj.test(tel)){
            
        }else{
            alert("Nije dobro broj unesen. Format je: XXX-XXX-XXXX")
        }
    }else{
        alert("Nije dobro ime uneseno...");
    }
}