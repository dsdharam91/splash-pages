export default {
  country: 'Sweden',
  email: 'sweden@gocardless.com',
  country_properties: {
    local_scheme: 'bg-autogiro',
    has_instant_signup: true,
    has_percentage_pricing: true,
    show_holding_page: false,
  },
  prospect_form: {
    name_placeholder: 'William Johansson',
    email_placeholder: 'example@companyname.se',
    phone_placeholder: '0844 680 379',
  },
  hero: {
    header: 'Accept recurring payments across Europe',
    desc: 'GoCardless allows you to collect Direct Debit (Autogiro) payments from Sweden, the Eurozone and the UK in a single integration.',
  },
  pricing: {
    cost_cap: '20kr',
    description: 'Collect Direct Debit payments online with fees of just 1%, capped at 20kr. Scale pricing is available for larger organisations.',
    pro_cost_per_transaction: '0,50 — 5kr',
    per_transaction_amount_normal: '1%',
    pro_monthly_fee: '2500kr',
    normal_capped_at_amount: '2000kr',
    pro_number_of_monthly_payments: '> 500',
  },
  basic_pricing_cta: {
    main: 'Pay 1%',
    description: 'Just 1% per transaction, capped at 20kr.',
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
    nav_title: 'Autogiro Guide: English',
    path: '/guides/bg-autogiro/',
  },
  guides_sv: {
    title: 'Bg Autogiro guide (Svenska)',
    nav_title: 'Autogiro Guide: Svenska',
    path: '/sv/guider/bg-autogiro/',
  },
  features: {
    nav_title: 'GoCardless',
  },
  pro: {
    nav_title: 'GoCardless Pro',
    explainer: 'Total control over Autogiro',
  },
};
