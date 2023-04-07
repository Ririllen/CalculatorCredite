const addMonths = (date, months) => {
    date.setMonth(date.getMonth() + months);  
    return date;
}

const month = (numberMonth) => {
    switch (numberMonth){
        case 1 : return 'Ianuarie';
        case 2 : return 'Februarie';  
        case 3 : return 'Martie';
        case 4 : return 'Aprilie';
        case 5 : return 'Mai';
        case 6 : return 'Iunie';
        case 7 : return 'Iulie';
        case 8 : return 'August';
        case 9 : return 'Septembrie';
        case 10 : return 'Octombrie';
        case 11 : return 'Noiembrie';
        case 12 : return 'Decembrie';
    }
}

class Depozite{
    constructor(sumaDepozitata,perioadaPlata){
        this.sumaDepozitata = sumaDepozitata;
        this.perioadaPlata  = perioadaPlata;
        this.sumaPeLuna = 0;
    }

    calculSumaPeLuna(){
        let totalSumDepozite =
        this.sumaDepozitata + this.sumaDepozitata * 1/100;
        this.sumaPeLuna = totalSumDepozite / this.perioadaPlata;
    }
}

let perioadaPlata = document.querySelector('#perioada-plata'),
	sumaDepozitata = document.querySelector('#suma-depozitata');

let depozitForm = document.getElementById("depozitForm");
    

depozitForm.addEventListener('submit', (event) => {
    event.preventDefault();

    document.querySelector('#rezultatDepozite').innerHTML = "";

    let field = document.createElement("fieldset");
    let legendResult = document.createElement("legend");
    legendResult.innerText = "Planul de plata";
    field.appendChild(legendResult);
    
    let field2 = document.createElement("fieldset");
    let para = document.createElement("p");
    para.innerText = `Suma Depozitata: ${sumaDepozitata.value}`;
    field2.appendChild(para);
    para = document.createElement("p");
    para.innerText = `Perioada de depozitare: ${perioadaPlata.value} luni`;
    field2.appendChild(para);
    field.appendChild(field2);

    const depozite = new Depozite(Number(sumaDepozitata.value),Number(perioadaPlata.value));
    depozite.calculSumaPeLuna();    

    for (let i=1; i<=Number(perioadaPlata.value); i++){
        const date = new Date();
        const depozitDate = addMonths(date, i);
        para = document.createElement("p");
        para.innerText = `${month(depozitDate.getMonth()+1)}.${depozitDate.getFullYear()} - ${depozite.sumaPeLuna.toFixed(2)}`;
        field.appendChild(para);
    }
    
    document.querySelector('#rezultatDepozite').appendChild(field);
    sumaDepozitata.value = "";
    perioadaPlata.value = "";
}); 