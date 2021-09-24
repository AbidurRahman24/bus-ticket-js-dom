const firstClassBtn = document.getElementById('firstClassBtn')
firstClassBtn.addEventListener('click', () => {
    const firstClassPlus = Number(document.getElementById('firstClassPlus').value)
    const total = firstClassPlus + 1;
    console.log(total);
    document.getElementById('firstClassPlus').value = total
    // subtotal
    demoPractice('sub-total', total)
    // 10% vat
    sumFunction('VAT')
    // TOtal UPDATE
    sumFunction('totalUpdate')
})

// Minus Button
const minueBtn = document.getElementById('minusBtn')
minueBtn.addEventListener('click', () => {
    const firstClassPlus = Number(document.getElementById('firstClassPlus').value);
    if (firstClassPlus > 0) {
        const total = firstClassPlus - 1;
        document.getElementById('firstClassPlus').value = total;
        // subtotal
        demoPractice('sub-total', total)
        // VAT
        sumFunction('VAT')
        // TOtal UPDATE
        sumFunction('totalUpdate')
    }
});

// economy Button
const economyBtn = document.getElementById('economyPlusBtn')
economyBtn.addEventListener('click', () => {
    const economyClassPlus = Number(document.getElementById('economyClassPlus').value)
    const total = economyClassPlus + 1;
    document.getElementById('economyClassPlus').value = total
    // sub
    Number(document.getElementById('sub-total').innerText)
    const grandTotal = total * 100;
    document.getElementById('sub-total').innerText = grandTotal;

    sumFunction('VAT')
    const vatTotal = grandTotal / 10;
    document.getElementById('VAT').innerText = vatTotal;
    // TOtal UPDATE
    sumFunction('totalUpdate')
    const sum = grandTotal + vatTotal
    document.getElementById('totalUpdate').innerText = sum

})

// eConomy Minus
const economyMinusBtn = document.getElementById('economyMinusBtn')
economyMinusBtn.addEventListener('click', () => {
    const economyClassPlus = Number(document.getElementById('economyClassPlus').value)
    if (economyClassPlus > 0) {
        const total = economyClassPlus - 1;
        console.log(total);
        document.getElementById('economyClassPlus').value = total
        // sub
        Number(document.getElementById('sub-total').innerText)
        const grandTotal = total * 100;
        document.getElementById('sub-total').innerText = grandTotal;

        sumFunction('VAT')
        const vatTotal = grandTotal / 10;
        document.getElementById('VAT').innerText = vatTotal;
        // TOtal UPDATE
        sumFunction('totalUpdate')
        const sum = grandTotal + vatTotal
        document.getElementById('totalUpdate').innerText = sum;
    }
})


function sumFunction(id) {
    Number(document.getElementById(id).innerText)
}

const demoPractice = (id, total) => {
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