document.getElementById('tax_form').addEventListener('submit',function(event){
    event.preventDefault()
    let basic_salary=Number(document.getElementById("basic_salary").value)
    let benefits=Number(document.getElementById("benefits").value)
    function calc_gross(salary,benefits){
    gross=salary+benefits
    return gross
    }
    let gross_salary=calc_gross(basic_salary,benefits)
    document.getElementById('gross').innerHTML=gross_salary

    function find_NHIF(gross_salary){
    if (gross_salary <= 5999){
         nhif= 150
    }    
    else if (gross_salary <= 7999){
        nhif= 300
    } 
        
    else if (gross_salary <= 11999){
        nhif= 400
    }  
    else if( gross_salary <= 14999){
        nhif= 500
    } 
        
    else if (gross_salary <= 19999){
        nhif= 600
    } 
        
    else if( gross_salary <= 24999){
        nhif= 750
    } 
        
    else if( gross_salary <= 29999){
        nhif=850
    } 
        
    else if (gross_salary <= 34999){
        nhif= 900
    } 
        
    else if(gross_salary <= 39999){
        nhif= 950
    }
        
    else if( gross_salary <= 44999){
        nhif= 1000
    }
        
    else if (gross_salary <= 49999){
        nhif= 1100
    } 
        
    else if (gross_salary <= 59999){
        nhif= 1200
    } 
        
    else if (gross_salary <= 69999){
         nhif= 1300
    } 
       
    else if(gross_salary <= 79999){
        nhif= 1400
    }
        
    else if( gross_salary <= 89999){
        nhif= 1500
    }
        
    else if (gross_salary <= 99999){
        nhif= 1600
    } 
        
    else{
        nhif= 1700
    } 
        
    return nhif
    }
    let find1=find_NHIF(gross_salary)
    document.getElementById('nhif').innerHTML=find1

    function find_NSSF(gross_salary){
     if(gross_salary>=18000){
        nssf=0.06 * gross_salary
     }
        
    else{
        nssf=0
    }
        
    return nssf
    }
    let find2=find_NSSF(gross_salary)
    document.getElementById('nssf').innerHTML=find2

    function find_NHDF(gross_salary){
    nhdf = gross_salary *  0.015
    return nhdf
    }
    let find3=find_NHDF(gross_salary)
    document.getElementById('nhdf').innerHTML=find3

    function find_taxableincome(){
    taxable_income = gross_salary - (find1 + find2 + find3)
    return taxable_income
    }
    let find4=find_taxableincome()
    document.getElementById('taxable').innerHTML=find4

    function find_payee(taxable_income){
    
    if (taxable_income <= 24000) {
    tax = taxable_income* 0.1;
    } else if (taxable_income <= 32333) {
    tax = (24000 * 0.1) + (taxable_income - 24000) * 0.25;
    } else if (taxable_income<= 500000) {
    tax = (24000 * 0.1) + (8333 * 0.25) + (taxable_income - 32333) * 0.30;
    } else if (taxable_income <= 800000) {
    tax = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.30) + (taxable_income- 500000) * 0.32;
    } else {
    tax = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.30) + (300000 * 0.32) + (taxable_income- 800000) * 0.35;
    }

    let personal_relief = 2400
    return final_tax = Math.max(0, tax - personal_relief)
    }
    let taxable_income1 = gross_salary - (find1 + find2 + find3)
    let find5=find_payee(taxable_income1)
    document.getElementById('payee').innerHTML=find5
    
    function find_netsalary(){
    net_salary = gross_salary - (find1+find2+find3+find5)
    return net_salary
    }
    net_salary1=find_netsalary()
    document.getElementById('netsalary').innerHTML=net_salary1




})

