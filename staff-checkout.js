// This stores the staff-side version of the customer's order.
let staffSelectedFireworks = {};

// This reads the encoded order from the website link.
function getStaffOrderFromUrl() {
  // This reads the current page URL.
  const currentUrl = new URL(window.location.href);

  // This gets the encoded order part after ?order=.
  const encodedOrder = currentUrl.searchParams.get("order");

  // This checks if the link does not contain order data.
  if (!encodedOrder) {
    return null;
  }

  try {
    // This decodes the order text from the link.
    const decodedOrderText = decodeURIComponent(atob(encodedOrder));

    // This turns the decoded text back into a JavaScript object.
    return JSON.parse(decodedOrderText);
  } catch (error) {
    // This shows an error in the console if the link cannot be decoded.
    console.error("Could not decode staff order link:", error);

    // This tells the rest of the code the order could not be loaded.
    return null;
  }
}

// This displays the staff order on the page.
function displayStaffOrder() {
  // This gets the order from the link.
  const staffOrder = getStaffOrderFromUrl();

  // This finds the page areas we need to update.
  const ticketHeading = document.getElementById("staff-ticket-heading");
  const orderList = document.getElementById("staff-order-list");
  const subtotalText = document.getElementById("staff-subtotal-text");
  const taxText = document.getElementById("staff-tax-text");
  const totalText = document.getElementById("staff-total-text");

  // This handles a missing or broken order link.
  if (!staffOrder) {
    ticketHeading.textContent = "Order could not be loaded.";
    orderList.textContent = "This staff checkout link is missing order data or the link was damaged.";
    return;
  }

  // This saves the submitted items into the staff order object.
  staffSelectedFireworks = staffOrder.items || {};

  // This shows the ticket number.
  ticketHeading.textContent = "Ticket: " + staffOrder.ticketNumber;

  // This starts the subtotal at 0.
  let subtotal = 0;

  // This starts an empty list of order item cards.
  let orderLines = [];

  // This gets all selected item ids.
  const selectedIds = Object.keys(staffSelectedFireworks);

  // This handles an empty order.
  if (selectedIds.length === 0) {
    orderList.textContent = "No fireworks were found in this order.";
    subtotalText.textContent = "Subtotal: $0.00";
    taxText.textContent = "Estimated Tax: $0.00";
    totalText.textContent = "Estimated Total: $0.00";
    return;
  }

  // This loops through every selected item.
  selectedIds.forEach(function (fireworkId) {
    // This finds the product info from the shared catalog.
    const firework = findFireworkById(fireworkId);

    // This skips broken or missing product ids.
    if (!firework) {
      return;
    }

    // This gets the quantity.
    const quantity = staffSelectedFireworks[fireworkId];

    // This calculates this item's total.
    const itemTotal = quantity * firework.price;

    // This adds this item total to the subtotal.
    subtotal = subtotal + itemTotal;

    // This creates one readable staff item card.
    orderLines.push(`
      <div class="staff-order-card">
        <h3>${firework.name}</h3>
        <p>Quantity: ${quantity}</p>
        <p>$${firework.price.toFixed(2)} each</p>
        <p>Item Total: $${itemTotal.toFixed(2)}</p>
      </div>
    `);
  });

  // This displays all the staff order cards.
  orderList.innerHTML = orderLines.join("");

  // This calculates tax and total.
  const estimatedTax = subtotal * taxRate;
  const estimatedTotal = subtotal + estimatedTax;

  // This updates the totals on the page.
  subtotalText.textContent = "Subtotal: $" + subtotal.toFixed(2);
  taxText.textContent = "Estimated Tax: $" + estimatedTax.toFixed(2);
  totalText.textContent = "Estimated Total: $" + estimatedTotal.toFixed(2);
}

// This loads the staff order when the page opens.
displayStaffOrder();