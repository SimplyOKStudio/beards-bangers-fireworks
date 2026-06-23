// This stores the customer's selected quantities.
// It starts empty because the customer has not picked anything yet.
const selectedFireworks = {};

// This keeps track of the currently selected inventory category.
let activeCategory = "Popular Picks";

// These are the product IDs we want to show in the Popular Picks section.
const popularPickIds = [
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

// These are the product IDs we want to show in the Bundle Packages section.
const bundlePackageIds = [
  "black-cat-the-beast-assortment",
  "black-cat-night-display",
  "black-cat-pyro-city",
  "black-cat-party-animal",
  "big-city-assortment",
  "diamond-backyard-6-assortment",
  "party-pack-6",
  "black-cat-pride-and-honor-6",
  "black-cat-celebrate-america-5-assortment",
  "platinum-backyard-5",
  "black-cat-heritage-4",
  "party-pack-4-assortment",
  "neon-surprise-safe-and-sane",
  "black-cat-excellent-bag",
  "black-cat-jr-pyro-assortment",
  "nitro-bag-assortment",
  "black-cat-kids-pack-safe-and-sane",
  "black-cat-jr-pyro-backpack-safe-and-sane",
  "wacky-pack-boys-safe-and-sane",
  "wacky-pack-girls-safe-and-sane",
  "frisbee-assortment"
];

// These are the product IDs we want to show in the Big Show Finale section.
const bigShowFinaleIds = [
  "red-bright-and-blue-660-shot",
  "abduction-20-shot",
  "alien-invasion-21-shot",
  "return-to-roswell-26-shot",
  "whistling-bunghole-21-shot",
  "gigablaster-480-shot",
  "brothers-trophy-wife-480-shot",
  "aerial-privilege-168-shot",
  "amazing-ballet-220-shot",
  "border-patrol-159-shot",
  "capitalists-195-shot",
  "chain-reaction-86-shot",
  "grand-finale-432-shot",
  "maximum-insanity-182-shot",
  "mechapigzilla-136-shot",
  "party-meter-154-shot",
  "pigzilla-142-shot",
  "brothers-rowdy-ride-185-shot",
  "brothers-sassy-600-shot",
  "brothers-sky-wide-204-shot",
  "space-explorer-20-shot",
  "trump-train-250-shot",
  "trumps-revenge-250-shot",
  "usa-conqueror-192-shot",
  "black-cat-american-freedom-train-180-shot",
  "born-leaders-757-shot",
  "vip-180-shot",
  "ammo-mag-6-inch-24-shot",
  "black-cat-the-beast-assortment"
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
// Other fireworks have multiple buying options, like EACH or 1 box.
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
  if (activeCategory === "Popular Picks" && searchText.length === 0) {
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

  const filteredFireworks = fireworksToShow.filter(function (firework) {
  // This checks if the customer has typed anything into the search box.
  const searchIsBeingUsed = searchText.length > 0;

  // This checks the firework name.
  const nameMatches = firework.name.toLowerCase().includes(searchText);

  // This checks the main category.
  const categoryMatches = firework.category.toLowerCase().includes(searchText);

  // This checks the extra shop type labels.
  const shopTypeMatches =
    firework.shopTypes !== undefined &&
    firework.shopTypes.some(function (shopType) {
      return shopType.toLowerCase().includes(searchText);
    });

  // This checks buying option labels if the firework has multiple buying options.
  const optionMatches =
    firework.options !== undefined &&
    firework.options.some(function (option) {
      return option.label.toLowerCase().includes(searchText);
    });

  // This checks if the firework belongs to the selected category button.
  const selectedCategoryMatches =
    activeCategory === "All" ||
    activeCategory === "Popular Picks" ||
    firework.category === activeCategory ||
    firework.shopTypes.includes(activeCategory);

  // This combines all the search checks.
  const searchMatches =
    nameMatches || categoryMatches || shopTypeMatches || optionMatches;

  // If the customer is typing, search the whole catalog and ignore the selected category.
  if (searchIsBeingUsed) {
    return searchMatches;
  }

  // If the customer is not typing, use the selected category button normally.
  return selectedCategoryMatches;
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

// This closes the phone keyboard when the customer presses Enter/Search.
inventorySearch.addEventListener("keydown", function (event) {
  // This checks if the customer pressed the Enter key.
  if (event.key === "Enter") {
    // This tells the search box to stop being active.
    inventorySearch.blur();
  }
});

// This runs the displayFireworks function when the page loads.
displayFireworks();

// This runs the displayTopSections function when the page loads.
displayTopSections();

// This opens the Send List to Stand form.
function showStandListForm() {
  // This gets the selected firework ids from the customer's list.
  const selectedIds = Object.keys(selectedFireworks);

  // This checks if the customer has not selected anything yet.
  if (selectedIds.length === 0) {
    // This tells the customer they need at least one item first.
    alert("Please add at least one firework to your list before sending it to the stand.");

    // This stops the function.
    return;
  }

  // This finds the Send List to Stand form.
  const standListForm = document.getElementById("stand-list-form");

  // This removes the hidden class so the form appears.
  standListForm.classList.remove("hidden");

  // This scrolls the form into view.
  standListForm.scrollIntoView({ behavior: "smooth" });
}

// This creates a simple ticket number like Red 214.
function generateTicketNumber() {
  // This is the list of possible ticket colors.
  const ticketColors = ["Red", "Blue", "Gold", "Green", "Orange", "Purple"];

  // This randomly chooses one color from the list.
  const randomColor = ticketColors[Math.floor(Math.random() * ticketColors.length)];

  // This creates a random number from 100 to 999.
  const randomNumber = Math.floor(Math.random() * 900) + 100;

  // This combines the color and number into one ticket number.
  return randomColor + " " + randomNumber;
}

// This builds a plain-text version of the customer's selected list for the email/submission.
function buildSubmittedListText() {
  // This starts an empty list of text lines.
  let submittedLines = [];

  // This gets all selected firework ids from the selectedFireworks object.
  const selectedIds = Object.keys(selectedFireworks);

  // This goes through each selected firework id.
  selectedIds.forEach(function (fireworkId) {
    // This finds the full firework info using the id.
    const firework = findFireworkById(fireworkId);

    // This gets the selected quantity.
    const quantity = selectedFireworks[fireworkId];

    // This calculates the item total.
    const itemTotal = quantity * firework.price;

    // This adds one clean text line to the submission.
    submittedLines.push(
      quantity +
        " x " +
        firework.name +
        " @ $" +
        firework.price.toFixed(2) +
        " = $" +
        itemTotal.toFixed(2)
    );
  });

  // This combines all lines into one text block.
  return submittedLines.join("\n");
}

// This calculates the current list money totals for the form submission.
function calculateCurrentListTotals() {
  // This starts the subtotal at 0.
  let subtotal = 0;

  // This gets all selected firework ids from the selectedFireworks object.
  const selectedIds = Object.keys(selectedFireworks);

  // This goes through each selected firework id.
  selectedIds.forEach(function (fireworkId) {
    // This finds the full firework info using the id.
    const firework = findFireworkById(fireworkId);

    // This gets the selected quantity.
    const quantity = selectedFireworks[fireworkId];

    // This adds this item total to the subtotal.
    subtotal = subtotal + quantity * firework.price;
  });

  // This calculates the estimated tax.
  const estimatedTax = subtotal * taxRate;

  // This calculates the estimated total.
  const estimatedTotal = subtotal + estimatedTax;

  // This returns all three totals.
  return {
    subtotal: subtotal,
    estimatedTax: estimatedTax,
    estimatedTotal: estimatedTotal
  };
}

// This prepares the hidden Netlify form fields before the list is submitted.
function prepareStandListSubmission() {
  // This gets the selected firework ids from the customer's list.
  const selectedIds = Object.keys(selectedFireworks);

  // This checks if the customer has not selected anything yet.
  if (selectedIds.length === 0) {
    // This tells the customer they need at least one item first.
    alert("Please add at least one firework to your list before submitting.");

    // This stops the form from sending.
    return false;
  }

  // This creates a ticket number for this list.
  const ticketNumber = generateTicketNumber();

  // This builds the plain-text list for the email/submission.
  const submittedListText = buildSubmittedListText();

  // This calculates the current totals.
  const totals = calculateCurrentListTotals();

  // This creates a readable submission time.
  const submittedTime = new Date().toLocaleString();

  // This fills the hidden ticket number field.
  document.getElementById("submitted-ticket-number").value = ticketNumber;

  // This fills the hidden fireworks list field.
  document.getElementById("submitted-list").value = submittedListText;

  // This fills the hidden subtotal field.
  document.getElementById("submitted-subtotal").value = "$" + totals.subtotal.toFixed(2);

  // This fills the hidden tax field.
  document.getElementById("submitted-tax").value = "$" + totals.estimatedTax.toFixed(2);

  // This fills the hidden total field.
  document.getElementById("submitted-total").value = "$" + totals.estimatedTotal.toFixed(2);

  // This fills the hidden submitted time field.
  document.getElementById("submitted-time").value = submittedTime;

  // This saves the ticket number temporarily so the confirmation can use it later if needed.
  sessionStorage.setItem("lastTicketNumber", ticketNumber);

  // This allows the form to submit.
  return true;
}

// Keyboard close helper starts here.

// This closes the phone keyboard when the customer starts touching or scrolling outside the search box.
function closeSearchKeyboardIfNeeded(event) {
  // This finds the search box.
  const inventorySearch = document.getElementById("inventory-search");

  // This stops the function if the search box does not exist.
  if (!inventorySearch) {
    return;
  }

  // This checks if the customer is currently typing in the search box.
  const searchBoxIsActive = document.activeElement === inventorySearch;

  // This stops the function if the search box is not active.
  if (!searchBoxIsActive) {
    return;
  }

  // This checks whether the customer touched inside the search box.
  const touchedInsideSearchBox =
    event &&
    event.target &&
    inventorySearch.contains(event.target);

  // This keeps the keyboard open if the customer touched inside the search box.
  if (touchedInsideSearchBox) {
    return;
  }

  // This removes focus from the search box.
  // On phones, this should close the keyboard.
  inventorySearch.blur();

  // This also tells the browser to move focus away from the input.
  document.body.focus();
}

// This catches the first finger touch outside the search box.
document.addEventListener("touchstart", closeSearchKeyboardIfNeeded, true);

// This catches the drag motion when the customer starts scrolling.
document.addEventListener("touchmove", closeSearchKeyboardIfNeeded, true);

// This catches newer phone browsers that use pointer events.
document.addEventListener("pointerdown", closeSearchKeyboardIfNeeded, true);

// This catches mouse clicks for desktop testing.
document.addEventListener("mousedown", closeSearchKeyboardIfNeeded, true);

// This is a backup for when scrolling has already started.
window.addEventListener(
  "scroll",
  function () {
    closeSearchKeyboardIfNeeded(null);
  },
  true
);

// Keyboard close helper ends here.

// Search Done button helper starts here.

// This finds the Done button beside the search box.
const searchDoneButton = document.getElementById("search-done-button");

// This shows the Done button while the customer is using search.
function showSearchDoneButton() {
  // This stops the function if the Done button does not exist.
  if (!searchDoneButton) {
    return;
  }

  // This shows the Done button.
  searchDoneButton.classList.remove("hidden");
}

// This hides the Done button.
function hideSearchDoneButton() {
  // This stops the function if the Done button does not exist.
  if (!searchDoneButton) {
    return;
  }

  // This hides the Done button.
  searchDoneButton.classList.add("hidden");
}

// This finishes search and closes the phone keyboard.
function finishSearch() {
  // This stops the function if the search box does not exist.
  if (!inventorySearch) {
    return;
  }

  // This removes focus from the search box, which closes the phone keyboard.
  inventorySearch.blur();

  // This hides the Done button after the keyboard closes.
  hideSearchDoneButton();
}

// This shows the Done button when the customer taps into the search box.
inventorySearch.addEventListener("focus", showSearchDoneButton);

// This shows the Done button while the customer types.
inventorySearch.addEventListener("input", function () {
  // This updates the fireworks list.
  displayFireworks();

  // This shows the Done button while searching.
  showSearchDoneButton();
});

// Search Done button helper ends here.