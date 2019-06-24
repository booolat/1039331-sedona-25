
      var button = document.querySelector(".search-form-toggle");

      var modal = document.querySelector(".hotel-search");

      var form = modal.querySelector(".hotel-search-form");

      var checkin = modal.querySelector("[name=checkin]");

      var checkout = modal.querySelector("[name=checkout]");

      var adults = modal.querySelector("[name=adults]");

      var kids = modal.querySelector("[name=kids]");

      var isStorageSupport = true;
      var storage = "";

      try {
        storage = localStorage.getItem("checkin");
      } catch (err) {
        isStorageSupport = false;
      }

      try {
        storage = localStorage.getItem("checkout");
      } catch (err) {
        isStorageSupport = false;
      }

      try {
        storage = localStorage.getItem("adults");
      } catch (err) {
        isStorageSupport = false;
      }

      try {
        storage = localStorage.getItem("kids");
      } catch (err) {
        isStorageSupport = false;
      }

      button.addEventListener("click", function (evt) {
        evt.preventDefault();
        modal.classList.toggle("hide");
        modal.classList.toggle("show");
      });

      if (storage) {
      checkin.value = storage;
      checkout.value = storage;
      adults.value = storage;
      kids.value = storage;
    }

      form.addEventListener("submit", function (evt) {
        if (!checkin.value || !checkout.value || !adults.value || kids.value) {
          evt.preventDefault();
          console.log("”кажите даты и количество гостей");
        } else {
          if (isStorageSupport) {
          localStorage.setItem("checkin", checkin.value);
          localStorage.setItem("checkout", checkout.value);
          localStorage.setItem("adults", adults.value);
          localStorage.setItem("kids", kids.value);
          }
        }
      });