export default {
  country: 'United Kingdom',
  country_properties: {
    local_scheme: 'bacs',
    has_instant_signup: true,
    has_percentage_pricing: true,
    show_holding_page: false,
  },
  phone_local: '020 7183 8674',
  signin: {
    path: '/users/sign_in',
  },
  signup: {
    path: '/merchants/new',
  },
  footer: {
    description: 'GoCardless (company registration number 07495895) is authorised by the Financial Conduct Authority under the Payment Services Regulations 2009, registration number 597190, for the provision of payment services.',
  },
  basic_pricing_cta: {
    description: 'Just 1% per transaction, capped at £2.',
  },
  home: {
    title: 'The easiest way to collect recurring payments',
    trusted_message_scale: 'We’re a Bacs approved bureau that collects millions of pounds for our merchants every day.',
  },
  pricing: {
    cost_cap: '£2',
    description: 'Collect Direct Debit payments online with fees of just 1%, capped at £2. Scale pricing is available for larger organisations.',
    pro_cost_per_transaction: '1p — 60p',
    per_transaction_amount_normal: '1%',
    pro_monthly_fee: '£200',
    normal_capped_at_amount: '£200',
    pro_number_of_monthly_payments: '> 500',
  },
  security: {
    fca_authorised_byline: 'GoCardless is authorised by the Financial Conduct Authority under the Payment Services Regulations 2009.',
    consumer_protection_title: 'Direct Debit Guarantee',
    trusted_by_thousands_byline: 'GoCardless provides access to the Direct Debit network to thousands of businesses in the United Kingdom.',
  },
};
