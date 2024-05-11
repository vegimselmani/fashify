  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  function updateCountdown() {
      const currentDate = new Date();
      const difference = targetDate - currentDate;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      daysElement.textContent = formatTime(days);
      hoursElement.textContent = formatTime(hours);
      minutesElement.textContent = formatTime(minutes);
      secondsElement.textContent = formatTime(seconds);

      if (difference < 0) {
          clearInterval(timer);
          daysElement.textContent = 0;
          hoursElement.textContent = 0;
          minutesElement.textContent = 0;
          secondsElement.textContent = 0;
      }
  }

  function formatTime(time) {
      return time < 10 ? `0${time}` : time;
  }

  updateCountdown();

  const timer = setInterval(updateCountdown, 1000);

//Dropdown menu
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    let dropdownNav = document.querySelector('.dropdown-navigation');
    
    if (dropdownNav.style.display === "grid") {
        dropdownNav.style.display = "none";
    } else {
        dropdownNav.style.display = "grid";
    }
});