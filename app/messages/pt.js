export default {
  contact_types: ['customer support', 'sales'],
  postal_address: {
    street_address: '338-346 Goswell Road',
    address_locality: 'London',
    postal_code: 'EC1V 7LQ',
    address_country: 'United Kingdom',
    address_country_iso: 'GB',
  },
  phone_full: '+44 20 7183 8674',
  phone_local: '+44 20 7183 8674',
  email: 'help@gocardless.com',
  prospect_form: {
    sales: {
      name_label: 'Your name',
      name_placeholder: 'John Smith',
      email_label: 'Work email',
      email_placeholder: 'example@companyname.com.br',
      phone_label: 'Work phone',
      phone_placeholder: '02071838674',
      submit: 'Contact',
      success_messages: {
        '0-100': 'Thank you, a member of the GoCardless team will be in touch soon.',
        '100-500': 'Thank you, a member of the GoCardless team will be in touch soon.',
        '500+': 'Thank you, a member of the GoCardless team will be in touch soon.',
        default: 'Thank you, someone will be in touch within 24 hours.',
      },
    },
    holding: {
      submit: 'Notify me',
      success_message: 'Thank you for your interest. We\'ll let you know as soon as we\'ve launched. In the mean time, please visit our UK site to learn more about GoCardless.',
    },
  },
  home: {
    title: 'GoCardless is coming soon to Brazil',
    description: 'GoCardless is the easy way to collect Direct Debit. Register your interest to start taking payments in Brazil.',
  },
  holding_page: {
    headline: 'GoCardless is coming soon to Brazil',
    tagline: 'GoCardless makes collecting by Direct Debit easy for everyone from individuals to multi-national corporations',
    prospect_form_message: 'To be notified when we launch in Brazil, please enter your email address below:',
    benefits_headline: 'Bringing Direct Debit into the 21st century',
    benefit1_headline: 'Built for online',
    benefit1_description: 'Create your account online - there\'s no paperwork required.',
    benefit2_headline: 'One integration',
    benefit2_description: 'Take payments from multiple banks - no need to get an agreement with each one.',
    benefit3_headline: 'Ultra-low fees',
    benefit3_description: 'Less than half the cost of Paypal, with easy-to-understand pricing.',
    global_headline: 'Our global payments network has processed over $1 billion',
    global_description: 'With GoCardless, you can currently take payments from 32 countries including the UK, the Eurozone and Sweden.',
    global_description2: 'We\'ll soon be allowing you to take Direct Debit payments in Brazil. Please leave your e-mail address above to receive updates.',
    trusted_headline: 'You\'ll be in great company: 13,000+ businesses already use GoCardless',
    learn_more_headline: 'Want to learn more about GoCardless?',
    learn_more_link: 'Visit our European web site',
  },
};
