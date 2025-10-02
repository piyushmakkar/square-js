// custom.js

document.addEventListener("DOMContentLoaded", () => {
  // --- FAQ accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      // Close others for accordion behavior
      faqItems.forEach(i => { if (i !== item) i.classList.remove('active'); });
      item.classList.toggle('active');
    });
  });

  // --- Dish Cards ---
  const items = [
    {
      "name": "Chilli Shrimp Bowl",
      "variation": "Regular",
      "price_cents": 1799,
      "currency": "USD",
      "image_url": "https://132496695.cdn6.editmysite.com/uploads/1/3/2/4/132496695/2DQCQXAZLKDLPB4FDYBJXDDF.jpeg?width=2400&optimize=medium",
      "ecom_url": "https://www.amboeats.com/product/chilli-shrimp-bowl/4GUXZ4NX2MMNY4AZHORDTNBE"
    },
    {
      "name": "Chilli Shrimp with Okra Plate",
      "variation": "Regular",
      "price_cents": 1700,
      "currency": "USD",
      "image_url": "https://132496695.cdn6.editmysite.com/uploads/1/3/2/4/132496695/X247MFOND27K5N5Y5YGDIKF4.jpeg?width=2400&optimize=medium",
      "ecom_url": "https://www.amboeats.com/product/chilli-shrimp-with-okra-plate/AT4OG2K7C5VUSFZWNT2RRL7A"
    },
    {
      "name": "Veggie Plate",
      "variation": "Regular",
      "price_cents": 1599,
      "currency": "USD",
      "image_url": "https://132496695.cdn6.editmysite.com/uploads/1/3/2/4/132496695/GHCKQGMVKRHDPTOGOVFJNFPF.jpeg?width=2400&optimize=medium",
      "ecom_url": "https://www.amboeats.com/product/veggie-plate/K2PWM7FOGF2W4M2BOZ3XNBRD"
    }
  ];

  const container = document.getElementById("dish-cards");

  if (container) {
    items.forEach(item => {
      const price = (item.price_cents / 100).toFixed(2);

      const cardHTML = `
        <a href="${item.ecom_url}" target="_blank" style="text-decoration:none; color:inherit;">
          <div class="dish-card">
            <div class="fav"><i class="fas fa-heart"></i></div>
            <img src="${item.image_url}" alt="${item.name}">
            <h4>${item.name}</h4>
            <p>${item.variation}</p>
            <div class="price-rating">
              <div class="price">${item.currency} ${price}</div>
            </div>
          </div>
        </a>
      `;

      container.innerHTML += cardHTML;
    });
  }
});
