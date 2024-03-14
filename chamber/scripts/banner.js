function bannerDay() {
    const today = new Date().getDay();
    return [1, 2, 5].includes(today);
  }
  
  function closeBanner() {
    const banner = document.getElementById("announcement");
    banner.style.display = "none";
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    if (bannerDay()) {
      const banner = document.getElementById("announcement");
      banner.style.display = "flex";
    }
  });