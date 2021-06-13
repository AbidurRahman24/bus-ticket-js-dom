const firstClassBtn = document.getElementById('firstClassBtn')
firstClassBtn.addEventListener('click', ()=>{
    const firstClassPlus = Number(document.getElementById('firstClassPlus').value)
    const total = firstClassPlus +1 ;
    document.getElementById('firstClassPlus').value = total
    // subtotal
    demoPractice('sub-total', total)
    // 10% vat
    sumFunction('VAT')

    // const vatTotal = grandTotal / 10;
    // document.getElementById('VAT').innerText = vatTotal;

    // TOtal UPDATE
    sumFunction('totalUpdate')
})

function sumFunction(id) {
    Number(document.getElementById(id).innerText)
}

// Minus Button
const minueBtn = document.getElementById('minusBtn')
minueBtn.addEventListener('click', ()=>{
    const firstClassPlus = Number(document.getElementById('firstClassPlus').value);
    if (firstClassPlus > 0) {
        const total = firstClassPlus -1 ;
        document.getElementById('firstClassPlus').value = total;
        // subtotal
        demoPractice('sub-total', total)
        // VAT
        sumFunction('VAT')
        // TOtal UPDATE
        sumFunction('totalUpdate')

    }
    

})

const demoPractice =(id, total) =>{
    Number(document.getElementById(id).innerText)
        const grandTotal = total * 150;
        document.getElementById('sub-total').innerText = grandTotal;

        const vatTotal = grandTotal / 10;
        document.getElementById('VAT').innerText = vatTotal;

        const sum = grandTotal + vatTotal
        document.getElementById('totalUpdate').innerText = sum
}


















        
        // Number(document.getElementById('sub-total').innerText)
        // const grandTotal = total * 150;
        // document.getElementById('sub-total').innerText = grandTotal;

        // const vatTotal = grandTotal / 10;
        // document.getElementById('VAT').innerText = vatTotal;

        // TOtal UPDATE
        // Number(document.getElementById('totalUpdate').innerText)
        // const sum = grandTotal + vatTotal
        // document.getElementById('totalUpdate').innerText = sum