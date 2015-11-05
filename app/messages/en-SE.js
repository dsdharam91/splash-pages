/*eslint-disable max-len*/

export default {
  country: 'Sweden',
  phone_full: '+46 844 680 379',
  phone_local: '+46 844 680 379',
  email: 'sweden@gocardless.com',
  country_properties: {
    local_scheme: 'bg-autogiro',
    has_instant_signup: false,
    has_percentage_pricing: true,
  },
  prospect_form: {
    intro_message: 'We are currently beta testing our Autogiro service. Participants can collect Autogiro payments for free during the trial.',
    name_placeholder: 'William Johansson',
    email_placeholder: 'example@companyname.se',
    phone_placeholder: '0844 680 379',
  },
  hero: {
    header: 'Accept recurring payments across Europe',
    desc: 'GoCardless allows you to collect Direct Debit (Autogiro) payments from Sweden, the Eurozone and the UK in a single integration.',
  },
  pricing: {
    cost_cap: '20 kr',
    description: 'Collect Direct Debit payments online with fees of just 1%, capped at 20 kr. Scale pricing is available for larger organisations.',
    pro_cost_per_transaction: '0,50 - 6 kr',
    per_transaction_amount_normal: '1%',
    pro_monthly_fee: '2 500 kr',
    normal_capped_at_amount: '2000 kr',
    pro_number_of_monthly_payments: '>500 payments',
  },
  basic_pricing_cta: {
    main: 'Pay 1%',
    description: 'Just 1% per transaction, capped at 20 kr.',
    learn_more: 'Learn about our pricing',
  },
  signin: {
    path: 'https://manage.gocardless.com',
  },
  signup: {
    path: 'https://manage.gocardless.com/signup',
  },
  guides: {
    title: 'Bg Autogiro guide',
    nav_title: 'Bg Autogiro guide',
    path: '/guides/bg-autogiro/',
  },
};