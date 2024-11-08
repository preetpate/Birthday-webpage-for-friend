// Countdown Timer Script
function countdownTimer() {
    const targetDate = new Date("november 9, 2024 12:00:00 am").getTime(); // Set the birthday date and time here
    const countdownElement = document.getElementById("countdown");
  
    setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;
  
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
      if (timeLeft < 0) {
        clearInterval();
        countdownElement.innerHTML = "🎉 Time to celebrate! 🎉";
      }
    }, 1000);
  }
  
  countdownTimer();
  