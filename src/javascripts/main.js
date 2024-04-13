import "bootstrap"

document.addEventListener('DOMContentLoaded', () => {
    const guestForm = document.getElementById('guestForm');
    const resetButton = document.getElementById('resetButton');
    const clearAllButton = document.getElementById('clearAllButton');
    const guestTableBody = document.getElementById('guestTable').querySelector('tbody');
    let guests = JSON.parse(localStorage.getItem('guests')) || [];

    const displayGuests = () => {
        guestTableBody.innerHTML = '';
        guests.forEach((guest, index) => {
            const row = guestTableBody.insertRow();
            row.insertCell(0).textContent = index + 1;
            row.insertCell(1).textContent = guest.firstName;
            row.insertCell(2).textContent = guest.lastName;
        });
    };

    const addGuest = (firstName, lastName) => {
        if (guests.some(guest => guest.firstName === firstName && guest.lastName === lastName)) {
            alert('Already registered');
            return false;
        }
        guests.push({ firstName, lastName });
        localStorage.setItem('guests', JSON.stringify(guests));
        displayGuests();
        return true;
    };

    guestForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        if (firstName && lastName) {
            if (addGuest(firstName, lastName)) {
                guestForm.reset();
            }
        }
    });

    resetButton.addEventListener('click', () => {
        guestForm.reset();
    });

    clearAllButton.addEventListener('click', () => {
        guests = [];
        localStorage.setItem('guests', JSON.stringify(guests));
        displayGuests();
    });

    displayGuests();
});

