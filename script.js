// This is the tax rate used for the estimated total.
// Example: 0.0825 means 8.25% tax.
// Later, change this to your real local tax rate.
const taxRate = 0.0825;

const fireworks = [
  {
    itemNumber: 5,
    id: "standard-firecrackers-16-count",
    name: "STANDARD FIRECRACKERS - 16 COUNT PACKS",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "standard-firecrackers-16-count-pack",
        label: "1 PACK OF 16",
        price: 0.50
      },
      {
        id: "standard-firecrackers-16-count-bundle",
        label: "1 BUNDLE OF 40 PACKS",
        price: 10.00
      }
    ]
  },
  {
    itemNumber: 10,
    id: "standard-firecrackers-50-count",
    name: "STANDARD FIRECRACKERS - 50 COUNT PACKS",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "standard-firecrackers-50-count-pack",
        label: "1 PACK OF 50",
        price: 1.50
      },
      {
        id: "standard-firecrackers-50-count-bundle",
        label: "1 BUNDLE OF 40 PACKS",
        price: 30.00
      }
    ]
  },
  {
    itemNumber: 15,
    id: "standard-firecrackers-100-count",
    name: "STANDARD FIRECRACKERS - 100 COUNT PACKS",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "standard-firecrackers-100-count-pack",
        label: "1 PACK OF 100",
        price: 3.00
      },
      {
        id: "standard-firecrackers-100-count-bundle",
        label: "1 BUNDLE OF 20 PACKS",
        price: 30.00
      }
    ]
  },
  {
    itemNumber: 20,
    id: "standard-firecracker-roll-500",
    name: "STANDARD FIRECRACKER ROLL - 500 COUNT",
    price: 7.50,
    unitLabel: "1 ROLL",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"]
  },
  {
    itemNumber: 25,
    id: "standard-firecracker-roll-1000",
    name: "STANDARD FIRECRACKER ROLL - 1000 COUNT",
    price: 15.00,
    unitLabel: "1 ROLL",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"]
  },
  {
    itemNumber: 30,
    id: "black-cat-firecrackers-16-count",
    name: "BLACK CAT FIRECRACKERS - 16 COUNT PACKS",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "black-cat-firecrackers-16-count-pack",
        label: "1 PACK OF 16",
        price: 0.65
      },
      {
        id: "black-cat-firecrackers-16-count-bundle",
        label: "1 BUNDLE OF 40 PACKS",
        price: 13.00
      }
    ]
  },
  {
    itemNumber: 35,
    id: "black-cat-firecrackers-50-count",
    name: "BLACK CAT FIRECRACKERS - 50 COUNT PACKS",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "black-cat-firecrackers-50-count-pack",
        label: "1 PACK OF 50",
        price: 2.00
      },
      {
        id: "black-cat-firecrackers-50-count-bundle",
        label: "1 BUNDLE OF 40 PACKS",
        price: 40.00
      }
    ]
  },
  {
    itemNumber: 40,
    id: "black-cat-firecrackers-100-count",
    name: "BLACK CAT FIRECRACKERS - 100 COUNT PACKS",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "black-cat-firecrackers-100-count-pack",
        label: "1 PACK OF 100",
        price: 4.00
      },
      {
        id: "black-cat-firecrackers-100-count-bundle",
        label: "1 BUNDLE OF 20 PACKS",
        price: 40.00
      }
    ]
  },
  {
    itemNumber: 45,
    id: "black-cat-firecrackers-200-count",
    name: "BLACK CAT FIRECRACKERS - 200 COUNT PACKS",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "black-cat-firecrackers-200-count-pack",
        label: "1 PACK OF 200",
        price: 8.00
      },
      {
        id: "black-cat-firecrackers-200-count-bundle",
        label: "1 BUNDLE OF 10 PACKS",
        price: 40.00
      }
    ]
  },
  {
    itemNumber: 50,
    id: "black-cat-firecrackers-400-count",
    name: "BLACK CAT FIRECRACKERS - 400 COUNT PACKS",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "black-cat-firecrackers-400-count-pack",
        label: "1 PACK OF 400",
        price: 16.00
      },
      {
        id: "black-cat-firecrackers-400-count-bundle",
        label: "1 BUNDLE OF 5 PACKS",
        price: 40.00
      }
    ]
  },
  {
    itemNumber: 55,
    id: "black-cat-firecracker-roll-1000",
    name: "BLACK CAT FIRECRACKER ROLL - 1000 COUNT",
    price: 20.00,
    unitLabel: "1 ROLL",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"]
  },
  {
    itemNumber: 60,
    id: "black-cat-firecracker-roll-2000",
    name: "BLACK CAT FIRECRACKER ROLL - 2000 COUNT",
    price: 40.00,
    unitLabel: "1 ROLL",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"]
  },
  {
    itemNumber: 65,
    id: "m-60-m-90-crackers",
    name: "M-60 / M-90 CRACKERS",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "m-60-m-90-crackers-piece",
        label: "1 PIECE",
        price: 0.60
      },
      {
        id: "m-60-m-90-crackers-box",
        label: "1 BOX OF 36",
        price: 10.00
      }
    ]
  },
  {
    itemNumber: 70,
    id: "black-cat-m-150-salute-crackers",
    name: "BLACK CAT M-150 SALUTE CRACKERS",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "black-cat-m-150-salute-crackers-piece",
        label: "1 PIECE",
        price: 0.60
      },
      {
        id: "black-cat-m-150-salute-crackers-box",
        label: "1 BOX OF 36",
        price: 10.00
      }
    ]
  },
  {
    itemNumber: 75,
    id: "bunker-buster-crackers",
    name: "BUNKER BUSTER CRACKERS",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "bunker-buster-crackers-box",
        label: "1 BOX",
        price: 5.00
      },
      {
        id: "bunker-buster-crackers-pack",
        label: "1 PACK OF 4 BOXES",
        price: 10.00
      }
    ]
  },
  {
    itemNumber: 80,
    id: "black-cat-little-dynamite",
    name: "BLACK CAT LITTLE DYNAMITE",
    price: 3.00,
    unitLabel: "1 BOX",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"]
  },
  {
    itemNumber: 85,
    id: "magic-whip-with-boom",
    name: "MAGIC WHIP WITH BOOM",
    price: 7.50,
    unitLabel: "1 BOX",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"]
  }
];

// This stores the customer's selected quantities.
// It starts empty because the customer has not picked anything yet.
const selectedFireworks = {};

// This keeps track of the currently selected inventory category.
let activeCategory = "Popular Picks";

// These are the product IDs we want to show in the Popular Picks section.
const popularPickIds = [
  "8-inch-colored-sparklers",
  "clay-colored-smoke-balls",
  "snappers",
  "ground-bloom-flowers",
  "black-cat-morning-glory-sparklers",
  "black-cat-artillery-shell-6-shot",
  "25-saturn-missile-battery-single",
  "black-cat-color-pearl-48-shot"
];

// These are the product IDs we want to show in the Bundle Packages section.
const bundlePackageIds = [
  "black-cat-the-beast",
  "black-cat-night-display",
  "black-cat-pyro-city",
  "black-cat-party-animal",
  "big-city-assortment",
  "diamond-backyard-6",
  "party-pack-6",
  "black-cat-pride-and-honor-6"
];

// These are the product IDs we want to show in the Big Show Finale section.
const bigShowFinaleIds = [
  "black-cat-american-freedom-train-180-shot",
  "born-leaders-757-shot",
  "red-white-and-brew-84-shot",
  "vip-180-shot",
  "grand-finale-432-shot",
  "trump-train-250-shot",
  "trumps-revenge-250-shot",
  "usa-conqueror-192-shot"
];

// This finds the empty box in index.html where firework cards will be placed.
const fireworksContainer = document.getElementById("fireworks-container");

// This finds the Full Inventory search box.
const inventorySearch = document.getElementById("inventory-search");

// This finds the Popular Picks section box.
const popularPicksContainer = document.getElementById("popular-picks-container");

// This finds the Bundle Packages section box.
const bundlePackagesContainer = document.getElementById("bundle-packages-container");

// This finds the Big Show Finale section box.
const bigShowFinaleContainer = document.getElementById("big-show-finale-container");

// This finds the box that shows the customer's selected fireworks.
const customerListText = document.getElementById("customer-list-text");

// This finds the subtotal paragraph.
const subtotalText = document.getElementById("subtotal-text");

// This finds the estimated tax paragraph.
const taxText = document.getElementById("tax-text");

// This finds the estimated total paragraph.
const totalText = document.getElementById("total-text");

// This finds the floating item count text.
const floatingItemCount = document.getElementById("floating-item-count");

// This finds the floating estimated total text.
const floatingTotalText = document.getElementById("floating-total-text");

// This creates the plus and minus button rows for a firework card.
// Some fireworks have one buying option.
// Other fireworks have multiple buying options, like 1 piece or 1 box.
function createBuyingOptionsHtml(firework) {
  // This checks if this firework has multiple buying options.
  if (firework.options !== undefined) {
    // This creates one row for each buying option.
    return firework.options.map(function (option) {
      // This gets the current selected quantity for this option, or 0 if none is selected.
      const currentQuantity = selectedFireworks[option.id] || 0;

      // This returns the HTML for one buying option row.
      return `
        <div class="buying-option-row">
          <div class="buying-option-info">
            <p class="buying-option-label">${option.label}</p>
            <p class="buying-option-price">$${option.price.toFixed(2)}</p>
          </div>

          <div class="buying-option-buttons">
            <button onclick="subtractFirework('${option.id}')">-</button>
            <span class="quantity-text" data-firework-id="${option.id}">${currentQuantity}</span>
            <button onclick="addFirework('${option.id}')">+</button>
          </div>
        </div>
      `;
    }).join("");
  }

   // This gets the current selected quantity for a normal one-option firework.
  const currentQuantity = selectedFireworks[firework.id] || 0;

  // This uses the product's unit label if it has one.
  // If it does not have one yet, it falls back to "1 ITEM".
  const unitLabel = firework.unitLabel || "1 ITEM";

  // This returns the normal one-option button layout.
  return `
    <p class="buying-option-label">${unitLabel}</p>
    <p>$${firework.price.toFixed(2)}</p>

    <button onclick="subtractFirework('${firework.id}')">-</button>
    <span class="quantity-text" data-firework-id="${firework.id}">${currentQuantity}</span>
    <button onclick="addFirework('${firework.id}')">+</button>
  `;
}

// This displays the fireworks in the Full Inventory section.
function displayFireworks() {
  // This clears the current Full Inventory cards before rebuilding them.
  fireworksContainer.innerHTML = "";

  // This gets whatever the customer typed into the search box.
  const searchText = inventorySearch.value.toLowerCase();

      // This chooses which fireworks should be shown before search is applied.
  let fireworksToShow = fireworks;

  // This shows only Popular Picks when the Popular Picks button is selected.
  if (activeCategory === "Popular Picks") {
    fireworksToShow = popularPickIds
      .map(function (fireworkId) {
        return fireworks.find(function (firework) {
          return firework.id === fireworkId;
        });
      })
      .filter(function (firework) {
        return firework !== undefined;
      });
  }

  // This keeps only fireworks that match the search text and selected category.
  const filteredFireworks = fireworksToShow.filter(function (firework) {
    // This checks the firework name.
    const nameMatches = firework.name.toLowerCase().includes(searchText);

    // This checks the firework category.
    const categoryMatches = firework.category.toLowerCase().includes(searchText);

    // This checks the buying option labels if this firework has multiple buying options.
    const optionMatches =
      firework.options !== undefined &&
      firework.options.some(function (option) {
        return option.label.toLowerCase().includes(searchText);
      });

    // This checks whether the selected shopping type matches this firework.
    const selectedShopTypeMatches =
      activeCategory === "All" ||
      activeCategory === "Popular Picks" ||
      firework.category === activeCategory ||
      firework.shopTypes.includes(activeCategory);

    // This keeps the firework if it matches the search and the selected shopping type.
    return (nameMatches || categoryMatches || optionMatches) && selectedShopTypeMatches;
  });
  // This shows a message if no fireworks match the search.
  if (filteredFireworks.length === 0) {
    // This tells the customer nothing matched their search.
    fireworksContainer.innerHTML = "<p>No fireworks found.</p>";

    // This stops the function here.
    return;
  }

  // This loops through each filtered firework.
  filteredFireworks.forEach(function (firework) {
    // This creates a new div for one firework card.
    const fireworkCard = document.createElement("div");

    // This gives the firework card a class name so CSS can style inventory cards only.
    fireworkCard.className = "inventory-card";

    // This fills the firework card with the product name, category, and buying option buttons.
    fireworkCard.innerHTML = `
      <h3>${firework.name}</h3>
      <p>${firework.category}</p>

      ${createBuyingOptionsHtml(firework)}
    `;

    // This places the firework card inside the Full Inventory section.
    fireworksContainer.appendChild(fireworkCard);
  });
}

// This displays a small group of featured fireworks in one of the top sections.
function displayFeaturedFireworks(container, featuredIds) {
  // This clears out the "coming soon" text inside the section.
  container.innerHTML = "";

  // This loops through each featured product ID.
  featuredIds.forEach(function (fireworkId) {
    // This finds the full firework object that matches the ID.
    const firework = findFireworkById(fireworkId);

    // This stops the code from breaking if an ID is typed wrong.
    if (firework === undefined) {
      return;
    }

    // This creates a new div for one featured firework card.
    const fireworkCard = document.createElement("div");

    // This gives the featured card the same style as our inventory cards.
    fireworkCard.className = "inventory-card";

    // This fills the featured card with product info and buying option buttons.
    fireworkCard.innerHTML = `
      <h3>${firework.name}</h3>
      <p>${firework.category}</p>

      ${createBuyingOptionsHtml(firework)}
    `;

    // This places the featured card inside the correct top section.
    container.appendChild(fireworkCard);
  });
}

// This fills the three top shopping sections with featured products.
function displayTopSections() {
  // This fills the Popular Picks section.
  displayFeaturedFireworks(popularPicksContainer, popularPickIds);

  // This fills the Bundle Packages section.
  displayFeaturedFireworks(bundlePackagesContainer, bundlePackageIds);

  // This fills the Big Show Finale section.
  displayFeaturedFireworks(bigShowFinaleContainer, bigShowFinaleIds);
}

// This gives a small phone vibration when the customer adds or subtracts an item.
function playHapticTap() {
  // This checks if the phone/browser supports vibration.
  if (navigator.vibrate) {
    // This makes a short 20 millisecond vibration.
    navigator.vibrate(20);
  }
}

// This function finds one firework or one buying option by its id.
function findFireworkById(fireworkId) {
  // This first checks normal one-option fireworks.
  const normalFirework = fireworks.find(function (firework) {
    // This checks if the current firework id matches the id we are looking for.
    return firework.id === fireworkId;
  });

  // This returns the normal firework if it was found.
  if (normalFirework !== undefined) {
    return normalFirework;
  }

  // This checks fireworks that have multiple buying options.
  for (let i = 0; i < fireworks.length; i++) {
    // This gets one firework from the list.
    const firework = fireworks[i];

    // This skips this firework if it does not have buying options.
    if (firework.options === undefined) {
      continue;
    }

    // This looks for the matching buying option.
    const matchingOption = firework.options.find(function (option) {
      // This checks if the option id matches the id we are looking for.
      return option.id === fireworkId;
    });

    // This returns a customer-list version of the option if it was found.
    if (matchingOption !== undefined) {
      return {
        id: matchingOption.id,
        name: firework.name + " - " + matchingOption.label,
        price: matchingOption.price,
        category: firework.category,
        shopTypes: firework.shopTypes
      };
    }
  }

  // This returns undefined if nothing was found.
  return undefined;
}

// This function adds one firework to the customer's list.
function addFirework(fireworkId) {
  // This checks if this firework is not already in the selected list.
  if (selectedFireworks[fireworkId] === undefined) {
    // This starts the quantity at 0 if it does not exist yet.
    selectedFireworks[fireworkId] = 0;
  }

  // This increases the selected firework quantity by 1.
  selectedFireworks[fireworkId] = selectedFireworks[fireworkId] + 1;

    // This plays a small haptic tap when an item is added.
  playHapticTap();

  // This updates the quantity number beside the firework in the main product list.
  updateQuantityText(fireworkId);

  // This updates the My Fireworks List area.
  updateCustomerList();
}

// This function subtracts one firework from the customer's list.
function subtractFirework(fireworkId) {
  // This checks if this firework is not already in the selected list.
  if (selectedFireworks[fireworkId] === undefined) {
    // This starts the quantity at 0 if it does not exist yet.
    selectedFireworks[fireworkId] = 0;
  }

    // This only subtracts if the quantity is above 0.
  if (selectedFireworks[fireworkId] > 0) {
    // This subtracts 1 from the selected firework quantity.
    selectedFireworks[fireworkId] = selectedFireworks[fireworkId] - 1;

    // This plays a small haptic tap when an item is subtracted.
    playHapticTap();
  }

  // This updates the quantity number beside the firework in the main product list.
  updateQuantityText(fireworkId);

  // This updates the My Fireworks List area.
  updateCustomerList();
}

// This function removes one firework completely from My Fireworks List.
function removeFirework(fireworkId) {
  // This finds the full firework info using the id.
  const firework = findFireworkById(fireworkId);

  // This asks the customer/team member to confirm before removing the item.
  const shouldRemove = confirm("Remove " + firework.name + " from list?");

  // This checks if they clicked OK.
  if (shouldRemove === true) {
    // This deletes the firework from the selected list completely.
    delete selectedFireworks[fireworkId];

    // This updates the quantity number beside the firework in the main product list.
    updateQuantityText(fireworkId);

    // This updates the My Fireworks List area.
    updateCustomerList();
  }
}

// This updates every visible quantity number for one firework.
function updateQuantityText(fireworkId) {
  // This finds every quantity number connected to this firework ID.
  const quantityTexts = document.querySelectorAll(`[data-firework-id="${fireworkId}"]`);

  // This gets the current selected quantity, or uses 0 if none exists.
  const currentQuantity = selectedFireworks[fireworkId] || 0;

  // This loops through every matching quantity number on the page.
  quantityTexts.forEach(function (quantityText) {
    // This updates the visible number.
    quantityText.textContent = currentQuantity;
  });
}

// This function updates the My Fireworks List section.
function updateCustomerList() {
  // This starts the subtotal at 0.
  let subtotal = 0;

  // This counts the total number of selected items.
let totalItems = 0;

  // This starts an empty list of HTML chunks for selected fireworks.
  let selectedLines = [];

  // This gets all selected firework ids from the selectedFireworks object.
  const selectedIds = Object.keys(selectedFireworks);

  // This goes through each selected firework id.
  selectedIds.forEach(function (fireworkId) {
    // This finds the full firework info using the id.
    const firework = findFireworkById(fireworkId);

    // This gets the selected quantity for this firework.
    const quantity = selectedFireworks[fireworkId];

    // This adds this quantity to the total item count.
totalItems = totalItems + quantity;

    // This calculates the total price for this one firework.
    const itemTotal = quantity * firework.price;

    // This adds this item total to the subtotal.
    subtotal = subtotal + itemTotal;

    // This creates one selected item card for My Fireworks List.
    selectedLines.push(`
      <div class="selected-list-card">
        <h3>${firework.name}</h3>
        <p>$${firework.price.toFixed(2)} each</p>

        <button onclick="subtractFirework('${firework.id}')">-</button>
        <span>${quantity}</span>
        <button onclick="addFirework('${firework.id}')">+</button>

        <p>Item Total: $${itemTotal.toFixed(2)}</p>

        <button onclick="removeFirework('${firework.id}')">Remove</button>
      </div>
    `);
  });

  // This checks if the customer has any fireworks on their list.
  if (selectedLines.length > 0) {
    // This shows all selected firework cards in My Fireworks List.
    customerListText.innerHTML = selectedLines.join("");
  } else {
    // This shows the empty message if nothing is selected.
    customerListText.textContent = "No fireworks selected yet.";
  }

  // This calculates the estimated tax.
  const estimatedTax = subtotal * taxRate;

  // This calculates the estimated total.
  const estimatedTotal = subtotal + estimatedTax;

  // This updates the subtotal text.
  subtotalText.textContent = "Subtotal: $" + subtotal.toFixed(2);

  // This updates the estimated tax text.
  taxText.textContent = "Estimated Tax: $" + estimatedTax.toFixed(2);

  // This updates the estimated total text.
  totalText.textContent = "Estimated Total: $" + estimatedTotal.toFixed(2);

  // This updates the floating item count.
floatingItemCount.textContent = totalItems + " items";

// This updates the floating total.
floatingTotalText.textContent = "$" + estimatedTotal.toFixed(2);
}

// This scrolls the customer down to the My Fireworks List section.
function scrollToCustomerList() {
  // This finds the My Fireworks List section.
  const myListSection = document.getElementById("my-list-section");

  // This scrolls smoothly to that section.
  myListSection.scrollIntoView({ behavior: "smooth" });
}

// This changes the selected category filter.
function setCategoryFilter(categoryName) {
  // This updates the active category value.
  activeCategory = categoryName;

    // This clears the search box when the customer chooses a new category.
  inventorySearch.value = "";

    // This closes the phone keyboard after choosing a category.
  inventorySearch.blur();

  // This finds all category buttons.
  const categoryButtons = document.querySelectorAll(".category-button");

  // This loops through every category button.
  categoryButtons.forEach(function (button) {
    // This removes the active look from every button.
    button.classList.remove("active-category");
  });

  // This finds the button the customer clicked by checking its text.
  categoryButtons.forEach(function (button) {
    // This checks if this button text matches the selected category.
    if (button.textContent === categoryName) {
      // This gives the selected button the active look.
      button.classList.add("active-category");
    }
  });

  // This rebuilds the Full Inventory list using the selected category.
  displayFireworks();
}

// This reruns the Full Inventory display every time the customer types in the search box.
inventorySearch.addEventListener("input", displayFireworks);

// This hides the My List bar while the customer is typing in the search box.
inventorySearch.addEventListener("focus", function () {
  // This adds a class to the page body.
  document.body.classList.add("search-is-active");
});

// This brings the My List bar back when the customer leaves the search box.
inventorySearch.addEventListener("blur", function () {
  // This removes the class from the page body.
  document.body.classList.remove("search-is-active");
});

// This closes the phone keyboard when the customer presses Enter/Search.
inventorySearch.addEventListener("keydown", function (event) {
  // This checks if the customer pressed the Enter key.
  if (event.key === "Enter") {
    // This tells the search box to stop being active.
    inventorySearch.blur();
  }
});

// This closes the phone keyboard when the customer scrolls down the page.
window.addEventListener("scroll", function () {
  // This checks if the search box is currently active.
  if (document.activeElement === inventorySearch) {
    // This tells the search box to stop being active.
    inventorySearch.blur();
  }
});

// This runs the displayFireworks function when the page loads.
displayFireworks();

// This runs the displayTopSections function when the page loads.
displayTopSections();



