document.addEventListener("DOMContentLoaded", () => {

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      faqItems.forEach(i => { if (i !== item) i.classList.remove('active'); });
      item.classList.toggle('active');
    });
  });

  // --- Dish Cards Data ---
  const items=[
{
    "name": "Chilli Shrimp Bowl",
    "variation": "Regular",
    "price_cents": 1799,
    "currency": "USD",
    "image_url": "https://132496695.cdn6.editmysite.com/uploads/1/3/2/4/132496695/2DQCQXAZLKDLPB4FDYBJXDDF.jpeg?width=2400&optimize=medium",
    "ecom_url": "https://www.amboeats.com/product/chilli-shrimp-bowl/4GUXZ4NX2MMNY4AZHORDTNBE"
  },
  {
    "name": "Chicken Tikka Bowl",
    "variation": "Regular",
    "price_cents": 1599,
    "currency": "USD",
    "image_url": "https://132496695.cdn6.editmysite.com/uploads/1/3/2/4/132496695/QWHYWYFOK47RT6E2ZPKWMDWK.jpeg?width=2400&optimize=medium",
    "ecom_url": "https://www.amboeats.com/product/chicken-tikka-bowl/VF6ZWNNSKDZ6WIMBPZI7KKY2"
  },
  {
    "name": "Chilli Paneer Bowl",
    "variation": "Regular",
    "price_cents": 1599,
    "currency": "USD",
    "image_url": "https://132496695.cdn6.editmysite.com/uploads/1/3/2/4/132496695/XOLKDS4DMPPYN4HWOJPCUHHP.jpeg?width=2400&optimize=medium",
    "ecom_url": "https://www.amboeats.com/product/chilli-paneer-bowl/2WUYLCKCAIL4DJLMAT7YDKUD"
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
  },
  {
    "name": "Paneer Tikka Masala with Chickpeas Plate",
    "variation": "Regular",
    "price_cents": 1499,
    "currency": "USD",
    "image_url": "https://132496695.cdn6.editmysite.com/uploads/1/3/2/4/132496695/QIROC2W7LUT5SNMHSWPLHLRG.jpeg?width=2400&optimize=medium",
    "ecom_url": "https://www.amboeats.com/product/paneer-tikka-masala-with-chickpeas-plate/J4PZB63L7JO4ADB7ZD7L25QM"
  },
  {
    "name": "Chicken Tikka Masala with Okra Plate",
    "variation": "Regular",
    "price_cents": 1499,
    "currency": "USD",
    "image_url":"https://132496695.cdn6.editmysite.com/uploads/1/3/2/4/132496695/3TB4BVAGP6ZO2EBDIOV2W572.jpeg?width=2400&optimize=medium",
    "ecom_url": "https://www.amboeats.com/product/chicken-tikka-masala-with-okra-plate/PLACEHOLDER"
  },
  {
    "name": "Chicken Tikka Masala with Cauliflower Plate",
    "variation": "Regular",
    "price_cents": 1499,
    "currency": "USD",
    "image_url": "https://132496695.cdn6.editmysite.com/uploads/1/3/2/4/132496695/WXAKIXWDZKY53ANGWR6CDWCS.jpeg?width=2400&optimize=medium",
    "ecom_url": "https://www.amboeats.com/product/chicken-tikka-masala-with-cauliflower-plate/PLACEHOLDER"
  },
  {
    "name": "Low Carb Chicken Tikka with Cauliflower Plate",
    "variation": "Regular",
    "price_cents": 1499,
    "currency": "USD",
    "image_url": "https://132496695.cdn6.editmysite.com/uploads/1/3/2/4/132496695/U7I766YYSKEDXFAGEPUNZNOO.jpeg?width=2400&optimize=medium",
    "ecom_url": "https://www.amboeats.com/product/low-carb-chicken-tikka-with-cauliflower-plate/PLACEHOLDER"
  },
  {
    "name": "Chicken Tikka Masala with Chickpeas Plate",
    "variation": "Regular",
    "price_cents": 1499,
    "currency": "USD",
    "image_url": "https://132496695.cdn6.editmysite.com/uploads/1/3/2/4/132496695/U7G7LBDXPKXBHN26KW25NEDO.jpeg?width=2400&optimize=medium",
    "ecom_url": "https://www.amboeats.com/product/chicken-tikka-masala-with-chickpeas-plate/PLACEHOLDER"
  }
];
  const container = document.getElementById("dish-cards");
  const leftBtn = document.getElementById("leftBtn");
  const rightBtn = document.getElementById("rightBtn");

  // --- Generate Dish Cards ---
  items.forEach((item, index) => {
    const price = (item.price_cents / 100).toFixed(2);
     const cardClass = index === 0 ? 'dish-card' : 'dish-card-un';
      const heartClass = index === 0 ? 'fas' : 'far';

    const cardHTML = `
      <div class="${cardClass}">
        <div class="fav"><i class="${heartClass} fa-heart"></i></div>
        <img src="${item.image_url}" alt="${item.name}">
        <h4>${item.name}</h4>
        <p>${item.variation}</p>
        <div class="price-btn">
          <div class="price">${item.currency} ${price}</div>
          <button onclick="openOrderLink('${item.ecom_url}')" class="btn-order">Order Now</button>
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });

  // --- Carousel Scroll Logic ---
  if (container && leftBtn && rightBtn) {
    const cardWidth = container.querySelector('.dish-card, .dish-card-un').offsetWidth;
    const gap = 20; // Match CSS gap
    const isMobile = window.innerWidth <= 768;
    const scrollAmount = isMobile ? (cardWidth + gap) : (cardWidth + gap) * 3;
// Scroll 3 cards at a time

    leftBtn.addEventListener('click', () => {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    // Enable/disable buttons based on scroll
    container.addEventListener('scroll', () => {
      const scrollLeft = container.scrollLeft;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      leftBtn.disabled = scrollLeft <= 0;
      rightBtn.disabled = scrollLeft >= maxScrollLeft - 1;
    });

    // Initialize button state
    leftBtn.disabled = true;
    rightBtn.disabled = container.scrollWidth <= container.clientWidth;
  }

});

// --- Open Order Link Function ---
function openOrderLink(url) {
  if (url) window.location.href = url; // Open in same tab
}
