/*eslint-disable max-len*/

export default {
  country: 'Netherlands',
  phone_full: '+44 20 7183 8674',
  phone_local: '+44 20 7183 8674',
  country_properties: {
    local_scheme: 'sepa',
    has_instant_signup: false,
    has_percentage_pricing: false,
  },
  hero: {
    header: 'Accept recurring payments across Europe',
    desc: 'GoCardless allows you to collect Direct Debit payments from Neterlands, the UK and the Eurozone in a single integration.',
  },
  pricing: {
    cost_cap: '€2',
    description: 'Collect Direct Debit payments online with fees of just 1%, capped at €2. Scale pricing is available for larger organisations.',
    pro_cost_per_transaction: '0,01 — 0,60 €',
    per_transaction_amount_normal: '1%',
    pro_monthly_fee: '€250',
    normal_capped_at_amount: '€200',
    pro_number_of_monthly_payments: '> 500',
  },
  signin: {
    path: 'https://manage.gocardless.com',
  },
  signup: {
    path: 'https://manage.gocardless.com/signup',
  },
};
