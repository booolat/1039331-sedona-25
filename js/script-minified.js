var button=document.querySelector(".search-form-toggle"),modal=document.querySelector(".hotel-search"),form=modal.querySelector(".hotel-search-form"),checkin=modal.querySelector("[name=checkin]"),checkout=modal.querySelector("[name=checkout]"),adults=modal.querySelector("[name=adults]"),kids=modal.querySelector("[name=kids]"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("checkin")}catch(e){isStorageSupport=!1}try{storage=localStorage.getItem("checkout")}catch(e){isStorageSupport=!1}try{storage=localStorage.getItem("adults")}catch(e){isStorageSupport=!1}try{storage=localStorage.getItem("kids")}catch(e){isStorageSupport=!1}button.addEventListener("click",function(e){e.preventDefault(),modal.classList.toggle("hide"),modal.classList.toggle("show")}),storage&&(checkin.value=storage,checkout.value=storage,adults.value=storage,kids.value=storage),form.addEventListener("submit",function(e){checkin.value&&checkout.value&&adults.value&&!kids.value?isStorageSupport&&(localStorage.setItem("checkin",checkin.value),localStorage.setItem("checkout",checkout.value),localStorage.setItem("adults",adults.value),localStorage.setItem("kids",kids.value)):(e.preventDefault(),console.log("������� ���� � ���������� ������"))});