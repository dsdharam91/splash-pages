import _ from 'lodash';

const CATEGORY_NAMES = {
  ACCOUNTING: 'accounting',
  CHARITIES: 'charities',
  CRM: 'crm',
  ECOMMERCE: 'ecommerce',
  EDUCATION: 'education',
  HEALTH: 'health',
  MEDIA: 'media',
  MEMBERSHIP: 'membership',
  NEW: 'new',
  SUBSCRIPTION: 'subscription',
  UTILITIES: 'utilities',
  OTHER: 'other',
};

export const CATEGORIES = [
  {
    name: CATEGORY_NAMES.ACCOUNTING,
    label: 'Accounting',
    isFeaturedOnHome: true,
    hasFeaturedSection: false,
  },
  {
    name: CATEGORY_NAMES.CHARITIES,
    label: 'Charity & not-for-profit',
    isFeaturedOnHome: false,
    hasFeaturedSection: false,
  },
  {
    name: CATEGORY_NAMES.CRM,
    label: 'CRM',
    isFeaturedOnHome: false,
    hasFeaturedSection: false,
  },
  {
    name: CATEGORY_NAMES.ECOMMERCE,
    label: 'E-commerce',
    isFeaturedOnHome: false,
    hasFeaturedSection: false,
  },
  {
    name: CATEGORY_NAMES.EDUCATION,
    label: 'Education',
    isFeaturedOnHome: false,
    hasFeaturedSection: false,
  },
  {
    name: CATEGORY_NAMES.HEALTH,
    label: 'Heath & fitness',
    isFeaturedOnHome: false,
    hasFeaturedSection: false,
  },
  {
    name: CATEGORY_NAMES.MEDIA,
    label: 'Media',
    isFeaturedOnHome: false,
    hasFeaturedSection: false,
  },
  {
    name: CATEGORY_NAMES.MEMBERSHIP,
    label: 'Membership',
    isFeaturedOnHome: true,
    hasFeaturedSection: false,
  },
  {
    name: CATEGORY_NAMES.SUBSCRIPTION,
    label: 'Subscription billing',
    isFeaturedOnHome: true,
    hasFeaturedSection: false,
  },
  {
    name: CATEGORY_NAMES.UTILITIES,
    label: 'Utilities',
    isFeaturedOnHome: false,
    hasFeaturedSection: false,
  },
  {
    name: CATEGORY_NAMES.OTHER,
    label: 'Other',
    isFeaturedOnHome: false,
    hasFeaturedSection: false,
  },
  {
    name: CATEGORY_NAMES.NEW,
    label: 'Featured',
    isFeaturedOnHome: true,
    hasFeaturedSection: false,
    isHiddenFromNav: true,
  },
];

export const PARTNERS = [
  {
    name: 'Quickbooks',
    categories: [
      {
        name: CATEGORY_NAMES.ACCOUNTING,
        isFeaturedOnCategory: true,
        isFeaturedOnHome: true,
      },
    ],
    logo: {
      source: '/images/partners/logos/quickbooks-logo.jpg',
      width: 140,
      marginTop: 2,
    },
    link: 'https://apps.intuit.com/gocardless?locale=en-gb',
  },
  {
    name: 'Xero',
    categories: [
      {
        name: CATEGORY_NAMES.ACCOUNTING,
        isFeaturedOnCategory: true,
        isFeaturedOnHome: true,
      },
    ],
    logo: {
      source: '/images/partners/logos/xero-logo.jpg',
      width: 60,
    },
    link: 'partners_xero',
  },
  {
    name: 'Clear Books',
    categories: [
      {
        name: CATEGORY_NAMES.ACCOUNTING,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
    ],
    logo: {
      source: '/images/partners/logos/clearbooks-logo.jpg',
      width: 140,
      marginTop: 2,
    },
    link: 'https://www.clearbooks.co.uk/support/guides/integrations/clear-books-gocardless-integration-setup/',
  },
  {
    name: 'FreeAgent',
    categories: [
      {
        name: CATEGORY_NAMES.ACCOUNTING,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: true,
      },
    ],
    logo: {
      source: '/images/partners/logos/freeagent-logo.jpg',
      width: 125,
      marginTop: 3,
    },
    link: 'https://www.freeagent.com/support/kb/integrations/gocardless-setting-up-the-integration/',
  },
  {
    name: 'KashFlow',
    categories: [
      {
        name: CATEGORY_NAMES.ACCOUNTING,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: true,
      },
    ],
    logo: {
      source: '/images/partners/logos/kashflow-logo.jpg',
      width: 140,
      marginTop: 4,
    },
    link: 'partners_kashflow',
  },
  {
    name: 'Quick File Ltd',
    categories: [
      {
        name: CATEGORY_NAMES.ACCOUNTING,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: true,
      },
    ],
    logo: {
      source: '/images/partners/logos/quickfile-logo.jpg',
      width: 140,
      marginTop: 2,
    },
    link: 'http://community.quickfile.co.uk/t/setting-up-direct-debits/8883',
  },
  {
    name: 'Sage 50',
    categories: [
      {
        name: CATEGORY_NAMES.ACCOUNTING,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: true,
      },
    ],
    logo: {
      source: '/images/partners/logos/sage50-logo.jpg',
      width: 110,
      marginTop: 6,
    },
    link: 'partners_sage',
  },
  {
    name: 'Zuora',
    categories: [
      {
        name: CATEGORY_NAMES.SUBSCRIPTION,
        isFeaturedOnCategory: true,
        isFeaturedOnHome: true,
      },
      {
        name: CATEGORY_NAMES.UTILITIES,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
      {
        name: CATEGORY_NAMES.MEDIA,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
    ],
    logo: {
      source: '/images/partners/logos/zuora-logo.jpg',
      width: 90,
      marginTop: 4,
    },
    link: 'partners_zuora',
  },
  {
    name: 'Chargebee',
    categories: [
      {
        name: CATEGORY_NAMES.SUBSCRIPTION,
        isFeaturedOnCategory: true,
        isFeaturedOnHome: true,
      },
    ],
    logo: {
      source: '/images/partners/logos/chargebee-logo.jpg',
      width: 120,
      marginTop: 8,
    },
    link: 'https://www.chargebee.com/docs/gocardless.html',
  },
  {
    name: 'Ensek',
    categories: [
      {
        name: CATEGORY_NAMES.SUBSCRIPTION,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
      {
        name: CATEGORY_NAMES.UTILITIES,
        isFeaturedOnCategory: true,
        isFeaturedOnHome: false,
      },
      {
        name: CATEGORY_NAMES.NEW,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: true,
      },
    ],
    logo: {
      source: '/images/partners/logos/ensek-logo.jpg',
      width: 130,
      marginTop: -4,
    },
    link: 'http://www.ensek.co.uk/',
  },
  {
    name: 'Junifer',
    categories: [
      {
        name: CATEGORY_NAMES.SUBSCRIPTION,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: true,
      },
      {
        name: CATEGORY_NAMES.UTILITIES,
        isFeaturedOnCategory: true,
        isFeaturedOnHome: false,
      },
    ],
    logo: {
      source: '/images/partners/logos/junifer-logo.jpg',
      width: 100,
    },
    link: 'https://www.junifersystems.com/',
  },
  {
    name: 'TeamUp',
    categories: [
      {
        name: CATEGORY_NAMES.MEMBERSHIP,
        isFeaturedOnCategory: true,
        isFeaturedOnHome: true,
      },
      {
        name: CATEGORY_NAMES.HEALTH,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
    ],
    logo: {
      source: '/images/partners/logos/teamup-logo.jpg',
      width: 65,
    },
    link: 'https://support.goteamup.com/hc/en-us/articles/203406632-Enabling-Direct-Debit-Payments-via-GoCardless-For-UK-Businesses-',
  },
  {
    name: 'Pitchero',
    categories: [
      {
        name: CATEGORY_NAMES.MEMBERSHIP,
        isFeaturedOnCategory: true,
        isFeaturedOnHome: true,
      },
      {
        name: CATEGORY_NAMES.HEALTH,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
    ],
    logo: {
      source: '/images/partners/logos/pitchero-logo.jpg',
      width: 110,
    },
    link: 'https://www.pitchero.com/user-guides/club-website/payments/set-up/gocardless',
  },
  {
    name: 'Azolve',
    categories: [
      {
        name: CATEGORY_NAMES.MEMBERSHIP,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
      {
        name: CATEGORY_NAMES.HEALTH,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
    ],
    logo: {
      source: '/images/partners/logos/azolve-logo.jpg',
      width: 110,
      marginTop: -6,
    },
    link: 'http://www.azolve.com/',
  },
  {
    name: 'ChurchApp',
    categories: [
      {
        name: CATEGORY_NAMES.MEMBERSHIP,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
      {
        name: CATEGORY_NAMES.CHARITIES,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
    ],
    logo: {
      source: '/images/partners/logos/churchapp-logo.jpg',
      width: 135,
    },
    link: 'https://www.pitchero.com/user-guides/club-website/payments/set-up/gocardless',
  },
  {
    name: 'Club Manager Ltd',
    categories: [
      {
        name: CATEGORY_NAMES.MEMBERSHIP,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: true,
      },
      {
        name: CATEGORY_NAMES.HEALTH,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
    ],
    logo: {
      source: '/images/partners/logos/clubmanager-logo.jpg',
      width: 135,
      marginTop: 2,
    },
    link: 'http://www.clubmanagercentral.com/uk/',
  },
  {
    name: 'ClubBuzz',
    categories: [
      {
        name: CATEGORY_NAMES.MEMBERSHIP,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
      {
        name: CATEGORY_NAMES.HEALTH,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
    ],
    logo: {
      source: '/images/partners/logos/clubbuzz-logo.jpg',
      width: 100,
      marginTop: -10,
    },
    link: 'http://www.clubbuzz.co.uk/',
  },
  {
    name: 'Libacura',
    categories: [
      {
        name: CATEGORY_NAMES.MEMBERSHIP,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
      {
        name: CATEGORY_NAMES.EDUCATION,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
    ],
    logo: {
      source: '/images/partners/logos/libacura-logo.jpg',
      width: 130,
    },
    link: 'https://libacura.co.uk/',
  },
  {
    name: 'Online Scout Manager',
    categories: [
      {
        name: CATEGORY_NAMES.MEMBERSHIP,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: true,
      },
    ],
    logo: {
      source: '/images/partners/logos/onlinescoutmanager-logo.jpg',
      width: 60,
    },
    link: 'https://www.onlinescoutmanager.co.uk/paymentinfo.php',
  },
  {
    name: 'paysubsonline',
    categories: [
      {
        name: CATEGORY_NAMES.MEMBERSHIP,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: true,
      },
      {
        name: CATEGORY_NAMES.HEALTH,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
    ],
    logo: {
      source: '/images/partners/logos/paysubsonline-logo.jpg',
      width: 140,
      marginTop: 2,
    },
    link: 'https://paysubsonline.com/',
  },
  {
    name: 'ClubSpark',
    categories: [
      {
        name: CATEGORY_NAMES.MEMBERSHIP,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
      {
        name: CATEGORY_NAMES.HEALTH,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
    ],
    logo: {
      source: '/images/partners/logos/clubspark-logo.jpg',
      width: 138,
    },
    link: 'http://clubspark.co.uk/#online-bookings',
  },
  {
    name: 'WebCollect',
    categories: [
      {
        name: CATEGORY_NAMES.MEMBERSHIP,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: true,
      },
      {
        name: CATEGORY_NAMES.HEALTH,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
    ],
    logo: {
      source: '/images/partners/logos/webcollect-logo.jpg',
      width: 120,
      marginTop: 4,
    },
    link: 'https://webcollect.org.uk/help-topic/direct-debit-set-up-guide',
  },
  {
    name: 'Asperato',
    categories: [
      {
        name: CATEGORY_NAMES.CRM,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
      {
        name: CATEGORY_NAMES.CHARITIES,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
    ],
    logo: {
      source: '/images/partners/logos/asperato-logo.jpg',
      width: 120,
    },
    link: 'https://appexchange.salesforce.com/listingDetail?listingId=a0N30000005v1zEEAQ',
  },
  {
    name: 'Donorfy',
    categories: [
      {
        name: CATEGORY_NAMES.CRM,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
      {
        name: CATEGORY_NAMES.CHARITIES,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
    ],
    logo: {
      source: '/images/partners/logos/donorfy-logo.jpg',
      width: 125,
    },
    link: 'https://donorfy.zendesk.com/hc/en-us/articles/204883331-Connecting-to-GoCardless',
  },
  {
    name: 'ZenDebit',
    categories: [
      {
        name: CATEGORY_NAMES.CRM,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
      {
        name: CATEGORY_NAMES.CHARITIES,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
    ],
    logo: {
      source: '/images/partners/logos/zendebit-logo.jpg',
      width: 105,
    },
    link: 'https://www.zengage.co/zendebit',
  },
  {
    name: 'Total Giving',
    categories: [
      {
        name: CATEGORY_NAMES.CHARITIES,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
    ],
    logo: {
      source: '/images/partners/logos/totalgiving-logo.jpg',
      width: 105,
    },
    link: 'http://www.totalgiving.co.uk/',
  },
  {
    name: 'Magento',
    categories: [
      {
        name: CATEGORY_NAMES.ECOMMERCE,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
    ],
    logo: {
      source: '/images/partners/logos/magento-logo.jpg',
      width: 130,
    },
    link: 'https://www.magentocommerce.com/magento-connect/gocardless-payment-gateway.html',
  },
  {
    name: 'WooCommerce',
    categories: [
      {
        name: CATEGORY_NAMES.ECOMMERCE,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
      {
        name: CATEGORY_NAMES.SUBSCRIPTION,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
      {
        name: CATEGORY_NAMES.NEW,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: true,
      },
    ],
    logo: {
      source: '/images/partners/logos/woocommerce-logo.jpg',
      width: 135,
      marginTop: 6,
    },
    link: 'https://woocommerce.com/products/gocardless/',
  },
  {
    name: 'Charity Checkout',
    categories: [
      {
        name: CATEGORY_NAMES.CHARITIES,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
    ],
    logo: {
      source: '/images/partners/logos/charitycheckout-logo.jpg',
      width: 80,
    },
    link: 'https://www.charitycheckout.co.uk/payments/',
  },
  {
    name: 'Bookings Plus',
    categories: [
      {
        name: CATEGORY_NAMES.EDUCATION,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
    ],
    logo: {
      source: '/images/partners/logos/bookingsplus-logo.jpg',
      width: 140,
    },
    link: 'http://www.bookingsplus.co.uk/',
  },
  {
    name: 'TutorCruncher',
    categories: [
      {
        name: CATEGORY_NAMES.EDUCATION,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
    ],
    logo: {
      source: '/images/partners/logos/tutorcruncher-logo.jpg',
      width: 150,
    },
    link: 'https://help.tutorcruncher.com/tutorial_videos/gocardless/',
  },
  {
    name: 'BookingBug',
    categories: [
      {
        name: CATEGORY_NAMES.OTHER,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
    ],
    logo: {
      source: '/images/partners/logos/bookingbug-logo.jpg',
      width: 135,
    },
    link: 'https://feedback.bookingbug.com/hc/en-gb/articles/204134012-How-do-I-take-online-payments-with-GoCardless-',
  },
  {
    name: 'Cleaner Planner',
    categories: [
      {
        name: CATEGORY_NAMES.OTHER,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
      {
        name: CATEGORY_NAMES.NEW,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: true,
      },
    ],
    logo: {
      source: '/images/partners/logos/cleanerplanner-logo.jpg',
      width: 135,
      marginTop: -2,
    },
    link: 'http://help.cleanerplanner.com/article/56-how-do-i-start-a-gocardless-payment',
  },
  {
    name: 'Cobot',
    categories: [
      {
        name: CATEGORY_NAMES.OTHER,
        isFeaturedOnCategory: false,
        isFeaturedOnHome: false,
      },
    ],
    logo: {
      source: '/images/partners/logos/cobot-logo.jpg',
      width: 90,
    },
    link: 'https://www.cobot.me/guides/credit-cards-&-direct-debit',
  },
];

export const filterPartnersByCategory = (category) => {
  return _.filter(PARTNERS, (partner) => {
    return _.find(partner.categories, { name: category });
  });
};

export const getCategory = (category) => {
  return _.find(CATEGORIES, { name: category });
};
