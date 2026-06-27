// This stores the staff-side version of the customer's order.
let staffSelectedFireworks = {};

// This stores the ticket number from the submitted order.
let staffTicketNumber = "No ticket number";

// This keeps track of the selected staff category.
let activeStaffCategory = "Popular Picks";

let staffSearchScrollTimer;

let pendingStaffRemoveId = null;

// These are quick-pick products for staff.
const staffPopularPickIds = [
  "starshot-rockets",
  "brothers-corona-rockets",
  "screaming-banshee-rockets",
  "bring-the-rain-rockets",
  "black-cat-bottle-rockets",
  "black-cat-whistling-bottle-rockets-with-report",
  "kevin-minion",
  "black-cat-firecracker-roll-1000",
  "magic-whip-with-boom",
  "black-cat-m-150-salute-crackers",
  "mini-tube-smoke",
  "dripping-donut-33-shot",
  "whack-job-7-shot",
  "abduction-20-shot",
  "artillery-shell-6-shot",
  "black-cat-the-beast-assortment"
];

// These are the staff category buttons.
// They match the customer-facing category buttons exactly.
const staffCategoryNames = [
  "Popular Picks",
  "Pop Bottle Rockets",
  "Daytime Fun",
  "Novelties",
  "Sparklers",
  "Smoke",
  "Ground Spinners",
  "Flying Items",
  "Fountains",
  "Firecrackers",
  "Roman Candles",
  "Saturn Missiles",
  "Cakes",
  "Big Show Finale",
  "Girandola",
  "Reloadable Shells",
  "Patriotic",
  "Bundle Packages",
  "Punks",
  "All"
];

// This reads the submitted order from the staff checkout link.
function getStaffOrderFromUrl() {
  const currentUrl = new URL(window.location.href);

  const encodedOrder = currentUrl.searchParams.get("order");

  if (!encodedOrder) {
    return null;
  }

  try {
    const decodedOrderText = decodeURIComponent(atob(encodedOrder));

    return JSON.parse(decodedOrderText);
  } catch (error) {
    console.error("Could not decode staff order link:", error);

    return null;
  }
}

// This loads the submitted customer order into the staff page.
function loadStaffOrder() {
  const staffOrder = getStaffOrderFromUrl();

  const ticketHeading = document.getElementById("staff-ticket-heading");
  const orderList = document.getElementById("staff-order-list");

  if (!staffOrder) {
    ticketHeading.textContent = "Order could not be loaded.";
    orderList.textContent = "This staff checkout link is missing order data or the link was damaged.";
    return;
  }

  staffTicketNumber = staffOrder.ticketNumber || "No ticket number";

  staffSelectedFireworks = staffOrder.items || {};

  updateStaffPage();
}

// This changes the selected category.
function setStaffCategory(categoryName) {
  activeStaffCategory = categoryName;

  const staffSearch = document.getElementById("staff-product-search");

  if (staffSearch) {
    staffSearch.value = "";
    staffSearch.blur();
  }

  updateStaffPage();
}

// This shows all category buttons.
function displayStaffCategoryButtons() {
  const categoryButtonsBox = document.getElementById("staff-category-buttons");

  let categoryButtonHtml = [];

  staffCategoryNames.forEach(function (categoryName) {
    const activeClass = categoryName === activeStaffCategory ? " active-staff-category" : "";

    categoryButtonHtml.push(`
      <button
        type="button"
        class="staff-category-button${activeClass}"
        onclick="setStaffCategory('${categoryName}')"
      >
        ${categoryName}
      </button>
    `);
  });

  categoryButtonsBox.innerHTML = categoryButtonHtml.join("");
}

// This checks if a product belongs in the selected category.
function staffProductMatchesCategory(firework) {
  if (activeStaffCategory === "All") {
    return true;
  }

  if (activeStaffCategory === "Popular Picks") {
    return staffPopularPickIds.includes(firework.id);
  }

  const categoryMatches = firework.category === activeStaffCategory;

  const shopTypeMatches =
    firework.shopTypes !== undefined &&
    firework.shopTypes.includes(activeStaffCategory);

  return categoryMatches || shopTypeMatches;
}

// This checks if a product matches the staff search.
function staffProductMatchesSearch(firework, searchText) {
  const nameMatches = firework.name.toLowerCase().includes(searchText);

  const categoryMatches = firework.category.toLowerCase().includes(searchText);

  const shopTypeMatches =
    firework.shopTypes !== undefined &&
    firework.shopTypes.some(function (shopType) {
      return shopType.toLowerCase().includes(searchText);
    });

  const optionMatches =
    firework.options !== undefined &&
    firework.options.some(function (option) {
      return option.label.toLowerCase().includes(searchText);
    });

  return nameMatches || categoryMatches || shopTypeMatches || optionMatches;
}

// This gets the current quantity for one product or option.
function getStaffQuantity(fireworkId) {
  return staffSelectedFireworks[fireworkId] || 0;
}

// This creates the plus/minus row for one product or option.
function createStaffQuantityControls(fireworkId) {
  const quantity = getStaffQuantity(fireworkId);

  return `
    <div class="staff-product-quantity-row">
      <button type="button" onclick="subtractStaffFirework('${fireworkId}')">-</button>

      <span>${quantity}</span>

      <button type="button" onclick="addStaffFirework('${fireworkId}')">+</button>
    </div>
  `;
}

// This creates price rows for normal products and multi-option products.
function createStaffProductPriceRows(firework) {
  if (firework.options !== undefined) {
    return firework.options.map(function (option) {
      return `
        <div class="staff-product-option-row">
          <div class="staff-product-option-info">
            <p class="staff-product-option-label">${option.label}</p>
            <p class="staff-product-option-price">$${option.price.toFixed(2)}</p>
          </div>

          ${createStaffQuantityControls(option.id)}
        </div>
      `;
    }).join("");
  }

  const unitLabel = firework.unitLabel || "EACH";

  return `
    <div class="staff-product-option-row">
      <div class="staff-product-option-info">
        <p class="staff-product-option-label">${unitLabel}</p>
        <p class="staff-product-option-price">$${firework.price.toFixed(2)}</p>
      </div>

      ${createStaffQuantityControls(firework.id)}
    </div>
  `;
}

// This displays the product cards staff can browse and edit.
function displayStaffProducts() {
  const staffSearch = document.getElementById("staff-product-search");
  const productResults = document.getElementById("staff-product-results");

  const searchText = staffSearch.value.toLowerCase().trim();

  let productsToShow = fireworks.filter(function (firework) {
    if (searchText.length > 0) {
      return staffProductMatchesSearch(firework, searchText);
    }

    return staffProductMatchesCategory(firework);
  });

  if (activeStaffCategory === "Popular Picks" && searchText.length === 0) {
    productsToShow = staffPopularPickIds
      .map(function (fireworkId) {
        return fireworks.find(function (firework) {
          return firework.id === fireworkId;
        });
      })
      .filter(function (firework) {
        return firework !== undefined;
      });
  }

  if (productsToShow.length === 0) {
    productResults.innerHTML = "<p class='staff-empty-message'>No products found.</p>";
    return;
  }

  let productCards = [];

  productsToShow.forEach(function (firework) {
    productCards.push(`
      <div class="staff-product-card">
        <h3>${firework.name}</h3>

        <p class="staff-product-category">${firework.category}</p>

        ${createStaffProductPriceRows(firework)}
      </div>
    `);
  });

  productResults.innerHTML = productCards.join("");
}

// This calculates subtotal, tax, total, and item count.
function calculateStaffTotals() {
  let subtotal = 0;

  let itemCount = 0;

  const selectedIds = Object.keys(staffSelectedFireworks);

  selectedIds.forEach(function (fireworkId) {
    const firework = findFireworkById(fireworkId);

    if (!firework) {
      return;
    }

    const quantity = staffSelectedFireworks[fireworkId];

    if (quantity <= 0) {
      return;
    }

    subtotal = subtotal + quantity * firework.price;

    itemCount = itemCount + quantity;
  });

  const estimatedTax = subtotal * taxRate;

  const estimatedTotal = subtotal + estimatedTax;

  return {
    subtotal: subtotal,
    estimatedTax: estimatedTax,
    estimatedTotal: estimatedTotal,
    itemCount: itemCount
  };
}

function updateStaffFloatingListButton() {
  const floatingLabel = document.getElementById("staff-floating-list-label");
  const floatingCount = document.getElementById("staff-floating-list-count");
  const floatingTotal = document.getElementById("staff-floating-list-total");

  const totals = calculateStaffTotals();

  const itemWord = totals.itemCount === 1 ? "item" : "items";

  floatingLabel.textContent = staffTicketNumber;

  floatingCount.textContent = totals.itemCount + " " + itemWord;

  floatingTotal.textContent = "$" + totals.estimatedTotal.toFixed(2);
}

// This updates the current order list at the bottom.
function updateStaffOrderList() {
  const ticketHeading = document.getElementById("staff-ticket-heading");
  const orderList = document.getElementById("staff-order-list");
  const subtotalText = document.getElementById("staff-subtotal-text");
  const taxText = document.getElementById("staff-tax-text");
  const totalText = document.getElementById("staff-total-text");

  ticketHeading.textContent = "Ticket: " + staffTicketNumber;

  let orderLines = [];

  const selectedIds = Object.keys(staffSelectedFireworks);

  selectedIds.forEach(function (fireworkId) {
    const firework = findFireworkById(fireworkId);

    if (!firework) {
      return;
    }

    const quantity = staffSelectedFireworks[fireworkId];

    if (quantity <= 0) {
      return;
    }

    const itemTotal = quantity * firework.price;

    orderLines.push(`
      <div class="staff-order-card">
        <h3>${firework.name}</h3>

        <p>$${firework.price.toFixed(2)} each</p>

        <div class="staff-order-action-row">
  ${createStaffQuantityControls(firework.id)}

  <button
  class="staff-trash-button ${pendingStaffRemoveId === firework.id ? "staff-trash-confirm" : ""}"
  type="button"
  onclick="removeStaffFirework('${firework.id}')"
  aria-label="Remove ${firework.name}"
>
  ${pendingStaffRemoveId === firework.id ? "Remove?" : "🗑️"}
</button>
</div>

<p>Item Total: $${itemTotal.toFixed(2)}</p>
      </div>
    `);
  });

  if (orderLines.length === 0) {
    orderList.textContent = "No fireworks are currently in this staff order.";
  } else {
    orderList.innerHTML = orderLines.join("");
  }

  const totals = calculateStaffTotals();

  subtotalText.textContent = "Subtotal: $" + totals.subtotal.toFixed(2);
  taxText.textContent = "Estimated Tax: $" + totals.estimatedTax.toFixed(2);
  totalText.textContent = "Estimated Total: $" + totals.estimatedTotal.toFixed(2);
}

// This updates the whole staff page.

// This makes product text safe before putting it into the final order summary.
function escapeStaffText(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// This updates the final order summary at the bottom of the staff checkout page.
function updateFinalStaffOrderSummary() {
  const finalOrderReadable = document.getElementById("final-staff-order-readable");

  if (!finalOrderReadable) {
    return;
  }

  const selectedIds = Object.keys(staffSelectedFireworks);

  const totals = calculateStaffTotals();

  if (totals.itemCount === 0) {
    finalOrderReadable.innerHTML = `
      <div class="final-order-ticket-line">Ticket: ${escapeStaffText(staffTicketNumber)}</div>
      <div class="final-order-empty-line">No items are currently in this order.</div>
    `;

    return;
  }

  let finalOrderHtml = [];

  finalOrderHtml.push(`
    <div class="final-order-ticket-line">
      Ticket: ${escapeStaffText(staffTicketNumber)}
    </div>
  `);

  selectedIds.forEach(function (fireworkId) {
    const firework = findFireworkById(fireworkId);

    if (!firework) {
      return;
    }

    const quantity = staffSelectedFireworks[fireworkId];

    if (quantity <= 0) {
      return;
    }

    const itemTotal = quantity * firework.price;

    finalOrderHtml.push(`
      <div class="final-order-item-line">
        <span>${quantity} x ${escapeStaffText(firework.name)}</span>
        <strong>$${itemTotal.toFixed(2)}</strong>
      </div>
    `);
  });

  finalOrderHtml.push(`
    <div class="final-order-money-line">
      <span>Subtotal:</span>
      <strong>$${totals.subtotal.toFixed(2)}</strong>
    </div>
  `);

  finalOrderHtml.push(`
    <div class="final-order-money-line">
      <span>Estimated Tax:</span>
      <strong>$${totals.estimatedTax.toFixed(2)}</strong>
    </div>
  `);

  finalOrderHtml.push(`
    <div class="final-order-total-line">
      <span>Estimated Total:</span>
      <strong>$${totals.estimatedTotal.toFixed(2)}</strong>
    </div>
  `);

  finalOrderReadable.innerHTML = finalOrderHtml.join("");
}

// This copies the final order summary text.
function copyFinalStaffOrder() {
  const finalOrderReadable = document.getElementById("final-staff-order-readable");
  const copyButton = document.getElementById("copy-final-order-button");

  if (!finalOrderReadable) {
    return;
  }

  const finalOrderText = finalOrderReadable.innerText;

  navigator.clipboard.writeText(finalOrderText).then(function () {
    if (!copyButton) {
      return;
    }

    copyButton.textContent = "Copied!";

    setTimeout(function () {
      copyButton.textContent = "Copy Final Order";
    }, 1800);
  });
}

// This clears the staff search box and shows the current category again.
function clearStaffSearch() {
  const staffSearch = document.getElementById("staff-product-search");

  if (!staffSearch) {
    return;
  }

  staffSearch.value = "";

  staffSearch.blur();

  updateStaffPage();
}

// This scrolls back to the top of the staff checkout page.
function scrollToStaffTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function updateStaffPage() {
  displayStaffCategoryButtons();

  displayStaffProducts();

  updateStaffOrderList();

  updateStaffFloatingListButton();

  updateFinalStaffOrderSummary();
}

// This adds one item.
function addStaffFirework(fireworkId) {
  if (staffSelectedFireworks[fireworkId] === undefined) {
    staffSelectedFireworks[fireworkId] = 0;
  }

  staffSelectedFireworks[fireworkId] = staffSelectedFireworks[fireworkId] + 1;

  updateStaffPage();
}

// This subtracts one item.
function subtractStaffFirework(fireworkId) {
  if (staffSelectedFireworks[fireworkId] === undefined) {
    return;
  }

  staffSelectedFireworks[fireworkId] = staffSelectedFireworks[fireworkId] - 1;

  if (staffSelectedFireworks[fireworkId] <= 0) {
    delete staffSelectedFireworks[fireworkId];
  }

  updateStaffPage();
}

function removeStaffFirework(fireworkId) {
  if (pendingStaffRemoveId !== fireworkId) {
    pendingStaffRemoveId = fireworkId;

    updateStaffPage();

    setTimeout(function () {
      if (pendingStaffRemoveId === fireworkId) {
        pendingStaffRemoveId = null;

        updateStaffPage();
      }
    }, 3000);

    return;
  }

  delete staffSelectedFireworks[fireworkId];

  pendingStaffRemoveId = null;

  updateStaffPage();
}

function scrollToStaffOrder() {
  const currentOrderHeading = document.getElementById("staff-current-order-heading");

  if (!currentOrderHeading) {
    return;
  }

  const headingPosition = currentOrderHeading.getBoundingClientRect().top + window.scrollY;

  const extraSpaceAboveHeading = 220;

  window.scrollTo({
    top: headingPosition - extraSpaceAboveHeading,
    behavior: "smooth"
  });
}

// This starts the staff checkout page.
function startStaffCheckoutPage() {
  const staffSearch = document.getElementById("staff-product-search");

  if (staffSearch) {
  staffSearch.addEventListener("input", function () {
    updateStaffPage();

    clearTimeout(staffSearchScrollTimer);

    staffSearchScrollTimer = setTimeout(function () {
      const productResults = document.getElementById("staff-product-results");

      if (!productResults) {
        return;
      }

      const resultsPosition = productResults.getBoundingClientRect().top + window.scrollY;

      const extraSpaceAboveResults = 170;

      window.scrollTo({
        top: resultsPosition - extraSpaceAboveResults,
        behavior: "smooth"
      });
    }, 450);
  });
}

  loadStaffOrder();
}

// This prevents mobile browsers from pulling past the top or bottom of the staff page.
let staffTouchStartY = 0;

document.addEventListener("touchstart", function (event) {
  if (event.touches.length !== 1) {
    return;
  }

  staffTouchStartY = event.touches[0].clientY;
}, { passive: true });

document.addEventListener("touchmove", function (event) {
  if (event.touches.length !== 1) {
    return;
  }

  const currentTouchY = event.touches[0].clientY;

  const isPullingDown = currentTouchY > staffTouchStartY;

  const isPushingUp = currentTouchY < staffTouchStartY;

  const pageScrollTop = window.scrollY || document.documentElement.scrollTop;

  const pageHeight = document.documentElement.scrollHeight;

  const screenHeight = window.innerHeight;

  const isAtTop = pageScrollTop <= 0;

  const isAtBottom = Math.ceil(pageScrollTop + screenHeight) >= pageHeight;

  if (isAtTop && isPullingDown) {
    event.preventDefault();
    return;
  }

  if (isAtBottom && isPushingUp) {
    event.preventDefault();
  }
}, { passive: false });

// This runs when the page opens.
startStaffCheckoutPage();