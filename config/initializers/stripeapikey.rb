if Rails.env.development? || Rails.env.test?
  Stripe.api_key = STRIPE_SECRET_KEY
  STRIPECONNECTCLIENTID = STRIPE_CONNECT_CLIENT_ID
else
  Stripe.api_key = Rails.application.credentials.STRIPE_SECRET_KEY
  STRIPECONNECTCLIENTID = Rails.application.credentials.STRIPE_CONNECT_CLIENT_ID
end