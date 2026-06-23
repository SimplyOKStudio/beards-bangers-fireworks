// This stores the staff-side version of the customer's order.
let staffSelectedFireworks = {};

// This stores the ticket number from the submitted order.
let staffTicketNumber = "No ticket number";

// This keeps track of the selected staff category.
let activeStaffCategory = "All";

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
const staffCategoryNames = [
  "All",
  "Popular Picks",
  "Firecrackers",
  "Punks",
  "Pop Bottle Rockets",
  "Rockets",
  "Missiles",
  "Reloadable Shells",
  "Cakes",
  "Big Show Finale",
  "Fountains",
  "Smoke",
  "Roman Candles",
  "Sparklers",
  "Novelties",
  "Flying Items",
  "Bundle Packages",
  "Assortments",
  "Patriotic"
];

// This reads the encoded order from the website link.
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

// This loads the submitted order into the staff checkout page.
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

  updateStaffOrder();
}

// This displays the staff category buttons.
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

// This changes the selected staff category.
function setStaffCategory(categoryName) {
  activeStaffCategory = categoryName;

  const staffSearch = document.getElementById("staff-product-search");

  if (staffSearch) {
    staffSearch.value = "";
    staffSearch.blur();
  }

  displayStaffCategoryButtons();
  displayStaffProductResults();
}

// This checks if a product matches the selected staff category.
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

// This checks if a product matches staff search text.
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

// This creates add buttons for normal products and multi-option products.
function createStaffProductAddHtml(firework) {
  if (firework.options !== undefined) {
    return firework.options.map(function (option) {
      return `
        <div class="staff-add-option-row">
          <div>
            <p class="staff-add-option-label">${option.label}</p>
            <p class="staff-add-option-price">$${option.price.toFixed(2)}</p>
          </div>

          <button type="button" onclick="addStaffFirework('${option.id}')">
            Add
          </button>
        </div>
      `;
    }).join("");
  }

  const unitLabel = firework.unitLabel || "EACH";

  return `
    <div class="staff-add-option-row">
      <div>
        <p class="staff-add-option-label">${unitLabel}</p>
        <p class="staff-add-option-price">$${firework.price.toFixed(2)}</p>
      </div>

      <button type="button" onclick="addStaffFirework('${firework.id}')">
        Add
      </button>
    </div>
  `;
}

// This displays products staff can add to the current order.
function displayStaffProductResults() {
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
    productResults.innerHTML = "<p>No products found.</p>";
    return;
  }

  let productCards = [];

  productsToShow.forEach(function (firework) {
    productCards.push(`
      <div class="staff-product-card">
        <h3>${firework.name}</h3>
        <p>${firework.category}</p>

        ${createStaffProductAddHtml(firework)}
      </div>
    `);
  });

  productResults.innerHTML = productCards.join("");
}

// This updates the editable staff order list and totals.
function updateStaffOrder() {
  const ticketHeading = document.getElementById("staff-ticket-heading");
  const orderList = document.getElementById("staff-order-list");
  const subtotalText = document.getElementById("staff-subtotal-text");
  const taxText = document.getElementById("staff-tax-text");
  const totalText = document.getElementById("staff-total-text");

  ticketHeading.textContent = "Ticket: " + staffTicketNumber;

  let subtotal = 0;
  let orderLines = [];

  const selectedIds = Object.keys(staffSelectedFireworks);

  if (selectedIds.length === 0) {
    orderList.textContent = "No fireworks are currently in this staff order.";
    subtotalText.textContent = "Subtotal: $0.00";
    taxText.textContent = "Estimated Tax: $0.00";
    totalText.textContent = "Estimated Total: $0.00";
    return;
  }

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
    subtotal = subtotal + itemTotal;

    orderLines.push(`
      <div class="staff-order-card">
        <h3>${firework.name}</h3>

        <p>$${firework.price.toFixed(2)} each</p>

        <div class="staff-quantity-row">
          <button type="button" onclick="subtractStaffFirework('${firework.id}')">-</button>

          <span>${quantity}</span>

          <button type="button" onclick="addStaffFirework('${firework.id}')">+</button>
        </div>

        <p>Item Total: $${itemTotal.toFixed(2)}</p>

        <button class="staff-remove-button" type="button" onclick="removeStaffFirework('${firework.id}')">
          Remove Item
        </button>
      </div>
    `);
  });

  orderList.innerHTML = orderLines.join("");

  const estimatedTax = subtotal * taxRate;
  const estimatedTotal = subtotal + estimatedTax;

  subtotalText.textContent = "Subtotal: $" + subtotal.toFixed(2);
  taxText.textContent = "Estimated Tax: $" + estimatedTax.toFixed(2);
  totalText.textContent = "Estimated Total: $" + estimatedTotal.toFixed(2);
}

// This adds one item to the staff order.
function addStaffFirework(fireworkId) {
  if (staffSelectedFireworks[fireworkId] === undefined) {
    staffSelectedFireworks[fireworkId] = 0;
  }

  staffSelectedFireworks[fireworkId] = staffSelectedFireworks[fireworkId] + 1;

  updateStaffOrder();

  const orderList = document.getElementById("staff-order-list");

  if (orderList) {
    orderList.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// This subtracts one item from the staff order.
function subtractStaffFirework(fireworkId) {
  if (staffSelectedFireworks[fireworkId] === undefined) {
    return;
  }

  staffSelectedFireworks[fireworkId] = staffSelectedFireworks[fireworkId] - 1;

  if (staffSelectedFireworks[fireworkId] <= 0) {
    delete staffSelectedFireworks[fireworkId];
  }

  updateStaffOrder();
}

// This removes an item completely from the staff order.
function removeStaffFirework(fireworkId) {
  const firework = findFireworkById(fireworkId);

  if (!firework) {
    delete staffSelectedFireworks[fireworkId];
    updateStaffOrder();
    return;
  }

  const shouldRemove = confirm("Remove " + firework.name + " from this staff order?");

  if (shouldRemove === true) {
    delete staffSelectedFireworks[fireworkId];
    updateStaffOrder();
  }
}

// This starts the staff checkout page.
function startStaffCheckoutPage() {
  loadStaffOrder();
  displayStaffCategoryButtons();
  displayStaffProductResults();

  const staffSearch = document.getElementById("staff-product-search");

  if (staffSearch) {
    staffSearch.addEventListener("input", displayStaffProductResults);
  }
}

// This runs when the staff checkout page opens.
startStaffCheckoutPage();