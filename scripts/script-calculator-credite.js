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

class Credite{
    constructor(sumaImprumutata,perioadaPlata){
        this.sumaImprumutata = sumaImprumutata;
        this.perioadaPlata  = perioadaPlata;
        this.sumaPeLuna = 0;
    }

    calculSumaPeLuna(){
        let totalSumCredite =
        this.sumaImprumutata + this.sumaImprumutata * 4.6/100;
        this.sumaPeLuna = totalSumCredite / this.perioadaPlata;
    }
}

let perioadaPlata = document.querySelector('#perioada-plata'),
	sumaImprumutata = document.querySelector('#suma-imprumutata');

let creditForm = document.getElementById("creditForm");
    

creditForm.addEventListener('submit', (event) => {
    event.preventDefault();

    document.querySelector('#rezultatCredite').innerHTML = "";

    let field = document.createElement("fieldset");
    let legendResult = document.createElement("legend");
    legendResult.innerText = "Grafic de achitare";
    field.appendChild(legendResult);

    let field2 = document.createElement("fieldset");
    let para = document.createElement("p");
    para.innerText = `Suma Imprumutata: ${sumaImprumutata.value}`;
    field2.appendChild(para);
    para = document.createElement("p");
    para.innerText = `Perioada de plata: ${perioadaPlata.value} luni`;
    field2.appendChild(para);
    field.appendChild(field2);    

    const credite = new Credite(Number(sumaImprumutata.value),Number(perioadaPlata.value));
    credite.calculSumaPeLuna();
    
    for (let i=1; i<=Number(perioadaPlata.value); i++){
        const date = new Date();
        const creditDate = addMonths(date, i);
        let para = document.createElement("p");
        para.innerText = `${month(creditDate.getMonth()+1)}.${creditDate.getFullYear()} - ${credite.sumaPeLuna.toFixed(2)}`;
        field.appendChild(para);
    }
    
    document.querySelector('#rezultatCredite').appendChild(field);
    sumaImprumutata.value = "";
    perioadaPlata.value = "";
}); 