// This is your test publishable API key.
const stripe = Stripe("pk_test_51LRrWXGXP4c2hCVZ6MpWqjIw9k182lJSoX6GIokOad7HbzijVURNE9uV3KPPjYkWLl8pLzWgfXOLvIGFdBTZlsmQ001Ts00WaR");

initialize();

// Create a Checkout Session as soon as the page loads
async function initialize() {
  const response = await fetch("checkout.php", {
    method: "POST",
  });

  const { clientSecret } = await response.json();

  const checkout = await stripe.initEmbeddedCheckout({
    clientSecret,
  });

  // Mount Checkout
  checkout.mount('#checkout');
}