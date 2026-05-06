export const BookingService = {
  saveBooking: (trainId, bookingData) => {
    const existing = JSON.parse(localStorage.getItem(`bookings_train_${trainId}`)) || [];
    existing.push({ ...bookingData, id: Date.now() });
    localStorage.setItem(`bookings_train_${trainId}`, JSON.stringify(existing));
  },
  getBookedSeats: (trainId) => {
    const data = JSON.parse(localStorage.getItem(`bookings_train_${trainId}`)) || [];
    return data.flatMap(b => b.seats);
  }
};