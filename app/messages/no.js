/*eslint-disable max-len*/

export default {
  contact_types: ['sales'],
  home: {
    title: 'The easy way to collect recurring payments',
    nav_title: 'Home',
    description: 'GoCardless',
    link: 'home page',
    trusted_message_scale: 'We collects millions of pounds for our merchants every day.',
  },
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
};
