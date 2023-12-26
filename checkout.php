<?php

require_once '../vendor/autoload.php';
require_once '../secrets.php';

$stripe = new \Stripe\StripeClient($stripeSecretKey);
header('Content-Type: application/json');

$checkout_session = $stripe->checkout->sessions->create([
  'ui_mode' => 'embedded',
  'line_items' => [[

    'price' => '{{price_1ORHtUGXP4c2hCVZF0VRURsp}}',
    'quantity' => 1,
  ]],
  'mode' => 'payment',
  'return_url' => 'http://localhost/succes.php',
]);

  echo json_encode(array('clientSecret' => $checkout_session->client_secret));