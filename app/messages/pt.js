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
      email_placeholder: 'example@companyname.com',
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
    },
  },
  home: {
    title: 'The easiest way to collect recurring payments',
    description: 'GoCardless is the easy way to collect Direct Debit. Already serving more than 12,000 businesses, perfect for recurring billing and B2B invoicing.',

  },
};
