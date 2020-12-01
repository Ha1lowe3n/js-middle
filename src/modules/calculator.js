const calculator = () => {
  const oneMonth = document.getElementById("m1"),
        sixMonth = document.getElementById("m2"),
        nineMonth = document.getElementById("m3"),
        twelveMonth = document.getElementById("m4"),
        inputPromo = document.querySelector('[placeholder="Промокод"'),
        priceTotal = document.getElementById("price-total"),
        cardLetoMozaika = document.getElementById("card_leto_mozaika"),
        cardLetoSchelkovo = document.getElementById("card_leto_schelkovo"),
        club = document.getElementById("card_order"),
        promocode = "ТЕЛО2019";

  const currentPrice = () => {
    // Mozaika
    if (cardLetoMozaika.checked && inputPromo.value !== promocode) {
      if (oneMonth.checked) {
        priceTotal.textContent = 1999;
      }

      if (sixMonth.checked) {
        priceTotal.textContent = 9900;
      }

      if (nineMonth.checked) {
        priceTotal.textContent = 13900;
      }

      if (twelveMonth.checked) {
        priceTotal.textContent = 19900;
      }
    }

    if (cardLetoMozaika.checked && inputPromo.value === promocode) {
      if (oneMonth.checked) {
        priceTotal.textContent = Math.floor(1999 - 1999 * 0.3);
      } 

      if (sixMonth.checked) {
        priceTotal.textContent = Math.floor(9900 - 9900 * 0.3);
      }

      if (nineMonth.checked) {
        priceTotal.textContent = Math.floor(13900 - 13900 * 0.3);
      }

      if (twelveMonth.checked) {
        priceTotal.textContent = Math.floor(19900 - 19900 * 0.3);
      }
    }

    // Schelkovo
    if (cardLetoSchelkovo.checked && inputPromo.value !== promocode) {
      if (oneMonth.checked) {
        priceTotal.textContent = 2999;
      }

      if (sixMonth.checked) {
        priceTotal.textContent = 14900;
      }

      if (nineMonth.checked) {
        priceTotal.textContent = 21900;
      }

      if (twelveMonth.checked) {
        priceTotal.textContent = 24900;
      }
    }

    if (cardLetoSchelkovo.checked && inputPromo.value === promocode) {
      if (oneMonth.checked) {
        priceTotal.textContent = Math.floor(2999 - 2999 * 0.3);
      }

      if (sixMonth.checked) {
        priceTotal.textContent = Math.floor(14900 - 14900 * 0.3);
      }

      if (nineMonth.checked) {
        priceTotal.textContent = Math.floor(21900 - 21900 * 0.3);
      }

      if (twelveMonth.checked) {
        priceTotal.textContent = Math.floor(24900 - 24900 * 0.3);
      }
    }
  };

  club.addEventListener('click', currentPrice);
  
  if (inputPromo) {
    inputPromo.addEventListener('input', currentPrice);
  }
  
};

export default calculator;

