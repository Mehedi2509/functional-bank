// get crent amount
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    const crentAmount = parseFloat(inputValue);

    // clear deposit input field
    inputField.value = '';

    return crentAmount;
};

// update total amount
function updateTotalField(totalAmount, crentAmount) {
    const totalMoney = document.getElementById(totalAmount);
    const oldAmount = parseFloat(totalMoney.innerText);
    const updateTotalAmount = oldAmount + crentAmount;
    totalMoney.innerText = updateTotalAmount;
};

function getTotalField() {
    const totalBlance = document.getElementById('total-blance');
    const oldBlance = parseFloat(totalBlance.innerText);
    return oldBlance;
}

// update total blance
function updateTotalBlance(amount, addSimbol) {
    const totalBlance = document.getElementById('total-blance');
    // const oldBlance = parseFloat(totalBlance.innerText);
    const oldBlance = getTotalField();

    if (addSimbol == 'plus') {
        const updateBlance = oldBlance + amount;
        totalBlance.innerText = updateBlance;
    }
    if (addSimbol == 'minus') {
        const updateBlance = oldBlance - amount;
        totalBlance.innerText = updateBlance;
    }
};

// deposit systeam prossesing
document.getElementById('deposit-btn').addEventListener('click', function () {
    /* 
        // get crent deposit
        const depositInput = document.getElementById('deposit-input');
        const depositInputValue = depositInput.value;
        const crentDeposit = parseFloat(depositInputValue);
     */
    /* 
        // get total deposit
        const totalDeposit = document.getElementById('total-deposit');
        const oldDeposit = parseFloat(totalDeposit.innerText);
        const updateDeposit = oldDeposit + crentDeposit;
        totalDeposit.innerText = updateDeposit;
     */
    /* 
        // update total blance
        const totalBlance = document.getElementById('total-blance');
        const oldBlance = parseFloat(totalBlance.innerText);
        const updateBlance = oldBlance + crentDeposit;
        totalBlance.innerText = updateBlance;
     */

    const crentDeposit = getInputValue('deposit-input');

    if (crentDeposit > 0) {
        updateTotalField('total-deposit', crentDeposit);
        updateTotalBlance(crentDeposit, 'plus');
    }
});

// withdraw systeam prossesing
document.getElementById('withdraw-btn').addEventListener('click', function () {

    /* 
    // get crent deposit
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputValue = withdrawInput.value;
    const crentWithdraw = parseFloat(withdrawInputValue);
    */
    /* 
        // get total deposit
        const totalWithdraw = document.getElementById('total-withdraw');
        const oldWithdraw = parseFloat(totalWithdraw.innerText);
        const updateWithdraw = oldWithdraw + crentWithdraw;
        totalWithdraw.innerText = updateWithdraw;
     */
    /* 
        // update total blance
        const totalBlance = document.getElementById('total-blance');
        const oldBlance = parseFloat(totalBlance.innerText);
        const updateBlance = oldBlance - crentWithdraw;
        totalBlance.innerText = updateBlance;
     */

    const crentWithdraw = getInputValue('withdraw-input');
    const oldAmount = getTotalField();

    if (crentWithdraw > 0 && oldAmount > crentWithdraw) {
        updateTotalField('total-withdraw', crentWithdraw);
        updateTotalBlance(crentWithdraw, 'minus');
    }
});
