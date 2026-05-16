/**
 * Comfort Guest House - Booking System
 * Designed & Developed by Pritam Naskar (Rehan'Z Digital Network)
 */

// Room data
const rooms = {
    deluxe: {
        name: 'Deluxe Room',
        price: 120,
        maxGuests: 2
    },
    family: {
        name: 'Family Suite',
        price: 200,
        maxGuests: 4
    },
    executive: {
        name: 'Executive Room',
        price: 180,
        maxGuests: 2
    },
    rooftop: {
        name: 'Rooftop Suite',
        price: 250,
        maxGuests: 2
    }
};

// Calculate booking total
function calculateTotal() {
    const checkIn = document.getElementById('checkIn');
    const checkOut = document.getElementById('checkOut');
    const roomType = document.getElementById('roomType');
    const totalDisplay = document.getElementById('totalPrice');
    
    if (!checkIn || !checkOut || !roomType) return;
    
    if (checkIn.value && checkOut.value) {
        const start = new Date(checkIn.value);
        const end = new Date(checkOut.value);
        const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
        
        if (nights > 0) {
            const room = rooms[roomType.value] || { price: 120 };
            const total = nights * room.price;
            
            if (totalDisplay) {
                totalDisplay.textContent = `$${total}`;
            }
            
            // Update nights display
            const nightsDisplay = document.getElementById('nightsCount');
            if (nightsDisplay) {
                nightsDisplay.textContent = nights;
            }
        }
    }
}

// Initialize booking form
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    const inputs = bookingForm.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('change', calculateTotal);
    });
    
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(bookingForm);
        const bookingData = Object.fromEntries(formData);
        
        // Store in localStorage (replace with actual booking API)
        localStorage.setItem('pendingBooking', JSON.stringify(bookingData));
        
        // Show confirmation
        alert('Booking request submitted! We will contact you shortly.');
        bookingForm.reset();
    });
}

// Guest counter
const guestInput = document.getElementById('guests');
const guestIncrease = document.getElementById('increaseGuests');
const guestDecrease = document.getElementById('decreaseGuests');

if (guestIncrease && guestDecrease && guestInput) {
    guestIncrease.addEventListener('click', () => {
        const current = parseInt(guestInput.value) || 1;
        const max = parseInt(guestInput.max) || 10;
        if (current < max) {
            guestInput.value = current + 1;
            calculateTotal();
        }
    });
    
    guestDecrease.addEventListener('click', () => {
        const current = parseInt(guestInput.value) || 1;
        const min = parseInt(guestInput.min) || 1;
        if (current > min) {
            guestInput.value = current - 1;
            calculateTotal();
        }
    });
}

// Room availability checker
function checkAvailability(roomType, checkIn, checkOut) {
    // Simulate availability check (replace with actual API call)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                available: true,
                price: rooms[roomType]?.price || 120
            });
        }, 500);
    });
}

// Promo code validation
const promoInput = document.getElementById('promoCode');
const applyPromoBtn = document.getElementById('applyPromo');

if (promoInput && applyPromoBtn) {
    applyPromoBtn.addEventListener('click', () => {
        const code = promoInput.value.trim().toUpperCase();
        const validCodes = {
            'WELCOME10': 0.10,
            'SUMMER20': 0.20,
            'LUXURY15': 0.15
        };
        
        if (validCodes[code]) {
            const discount = validCodes[code] * 100;
            alert(`Promo code applied! ${discount}% discount`);
            promoInput.disabled = true;
            applyPromoBtn.disabled = true;
            
            // Apply discount to total
            const totalDisplay = document.getElementById('totalPrice');
            if (totalDisplay) {
                const current = parseInt(totalDisplay.textContent.replace('$', ''));
                const newTotal = current * (1 - validCodes[code]);
                totalDisplay.textContent = `$${Math.round(newTotal)}`;
            }
        } else {
            alert('Invalid promo code');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    calculateTotal();
});
