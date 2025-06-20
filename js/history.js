

function goToHistory() {
    window.location.href = "history.html";
}
function goToHomePage() {
    window.location.href = "index.html";
}


window.addEventListener('DOMContentLoaded', function () {
    const historySection = document.getElementById('histroy-section');
    const donationHistory = JSON.parse(localStorage.getItem('donationHistory')) || [];

    if (donationHistory.length === 0) {
        historySection.innerHTML = `<p class="text-center text-gray-500">No donation history available.</p>`;
    } else {
        donationHistory.forEach(entry => {
            const div = document.createElement('div');
            div.classList.add('bg-yellow-50', 'p-4', 'rounded', 'mb-4', 'shadow-xl');

            div.innerHTML = `
                <h4 class="text-xl font-bold text-black">${entry.cause}</h4>
                <p class="text-black">Donated: ${entry.amount} BDT</p>
                <p class="text-gray-700">Time: ${entry.time}</p>
            `;
            historySection.appendChild(div);
        });

        //  Clear history after showing
        localStorage.removeItem('donationHistory');
    }

    // Load and display updated main balance
    const savedBalance = localStorage.getItem('mainBalance');
    if (savedBalance !== null) {
        document.getElementById('main-balance').innerText = savedBalance;
    }
});



