document.getElementById('btn-add-money').addEventListener('click', function () {
    const addMoney = getInputFieldValueById('addmoney_one');

    if (isNaN(addMoney)) {
        document.getElementById('invalidAmountModal').showModal();
        return;
    }

    if (addMoney > 0) {
        const balance = getTextFieldValueById('balance-1');
        const mainBalance = getTextFieldValueById('main-balance');

        if (mainBalance >= addMoney) {
            const newBalance = balance + addMoney;
            const updatedMainBalance = mainBalance - addMoney;

            //  Update UI
            document.getElementById('balance-1').innerText = newBalance;
            document.getElementById('main-balance').innerText = updatedMainBalance;

            //  Save updated main balance
            localStorage.setItem('mainBalance', updatedMainBalance);

            //  Save donation history
            const donation = {
                amount: addMoney,
                time: new Date().toLocaleString(),
                cause: "Flood at Noakhali"
            };

            const donationHistory = JSON.parse(localStorage.getItem('donationHistory')) || [];
            donationHistory.push(donation);
            localStorage.setItem('donationHistory', JSON.stringify(donationHistory));

            //  Show confirmation modal
            document.getElementById('donationModal').showModal();


        } else {
            document.getElementById('errorModal').showModal();
        }
    } else {
        alert("Invalid amount");
    }
});

document.getElementById('btn-add-money-two').addEventListener('click', function () {
    const addMoneyTwo = getInputFieldValueById('addmoney_two');

    if (isNaN(addMoneyTwo)) {
        document.getElementById('invalidAmountModal').showModal();
        return;
    }

    if (addMoneyTwo > 0) {
        const balance = getTextFieldValueById('balance-2');
        let mainBalance = getTextFieldValueById('main-balance');

        if (mainBalance >= addMoneyTwo) {
            const newBalance = balance + addMoneyTwo;
            const updatedMainBalance = mainBalance - addMoneyTwo;
            //  Update UI
            document.getElementById('balance-2').innerText = newBalance;
            document.getElementById('main-balance').innerText = updatedMainBalance;

            // Save updated main balance
            localStorage.setItem('mainBalance', updatedMainBalance);

            //  Save donation history
            const donation = {
                amount: addMoneyTwo,
                time: new Date().toLocaleString(),
                cause: "Flood at feni"
            };

            const donationHistory = JSON.parse(localStorage.getItem('donationHistory')) || [];
            donationHistory.push(donation);
            localStorage.setItem('donationHistory', JSON.stringify(donationHistory));

            // Show confirmation modal
            document.getElementById('donationModal').showModal();

        } else {
            document.getElementById('errorModal').showModal();
        }
    } else {
        alert("Invalid amount");
    }
});



document.getElementById('btn-add-money-three').addEventListener('click', function () {

    const addMoneyThree = getInputFieldValueById('addmoney_three');
    // console.log(addMoneyThree);

    if (isNaN(addMoneyThree)) {
        document.getElementById('invalidAmountModal').showModal();
        return
    }


    if (addMoneyThree > 0) {

        const balance = getTextFieldValueById('balance-3');
        const mainBalance = getTextFieldValueById('main-balance');

        if (mainBalance >= addMoneyThree) {

            const newBalance = balance + addMoneyThree;
            const updatedMainBalance = mainBalance - addMoneyThree;

            // Update UI
            document.getElementById('balance-3').innerText = newBalance;
            document.getElementById('main-balance').innerText = updatedMainBalance;

            //  Save updated main balance
            localStorage.setItem('mainBalance', updatedMainBalance);

            // Save donation history
            const donation = {
                amount: addMoneyThree,
                time: new Date().toLocaleString(),
                cause: "Donate for quota-protes"
            };

            const donationHistory = JSON.parse(localStorage.getItem('donationHistory')) || [];
            donationHistory.push(donation);
            localStorage.setItem('donationHistory', JSON.stringify(donationHistory));

            // Show confirmation modal
            document.getElementById('donationModal').showModal();

        }
        else {
            document.getElementById('errorModal').showModal();
        }
    }
    else {
        alert("Invalid amount");
    }


});

