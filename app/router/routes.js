import Immutable from 'immutable';

import Home from '../pages/home/home';
import Pricing from '../pages/pricing/pricing';
import Pro from '../pages/pro/pro';
import Features from '../pages/features/features';
import Security from '../pages/security/security';
import ContactSales from '../pages/contact-sales/contact-sales';
import HowTo from '../pages/how-to/how-to';

import PaymentsByDirectDebit from '../pages/payments-by-direct-debit/payments-by-direct-debit';
import PaymentsByDirectDebitVariationB from '../pages/payments-by-direct-debit/payments-by-direct-debit-variation-b';
import AuddisDirectDebit from '../pages/payments-by-direct-debit/auddis-direct-debit';
import EasierDirectDebit from '../pages/payments-by-direct-debit/easier-direct-debit';
import BusinessDM from '../pages/payments-by-direct-debit/business-dm';
import EducationDM from '../pages/industries/education-dm';
import LandingPageJAndSProducts from '../pages/payments-by-direct-debit/j-and-s-products';

import Accountants from '../pages/industries/accountants';
import Charities from '../pages/industries/charities';
import DigitalAgencies from '../pages/industries/digital-agencies';
import Finance from '../pages/industries/finance';
import LocalGovernment from '../pages/industries/local-government';
import SaaS from '../pages/industries/saas';
import Telcos from '../pages/industries/telcos';
import Utilities from '../pages/industries/utilities';

import Europe from '../pages/europe/europe';
import ExampleCheckout from '../pages/example-checkout/example-checkout';

import About from '../pages/about/about';
import Team from '../pages/about/team/team';
import Press from '../pages/about/press/press';

import Jobs from '../pages/about/jobs/jobs';
import SoftwareEngineer from '../pages/about/jobs/positions/software-engineer';
import DevopsEngineer from '../pages/about/jobs/positions/devops-engineer.js';
import DataEngineer from '../pages/about/jobs/positions/data-engineer';
import DataTeamLead from '../pages/about/jobs/positions/data-team-lead';
import EnterpriseAccountExecutive from '../pages/about/jobs/positions/enterprise-account-executive';
import InsideAccountExecutiveSpain from '../pages/about/jobs/positions/inside-account-executive-spain.js';
import HeadofSalesFrance from '../pages/about/jobs/positions/head-of-sales-france';
import EuropeanMarketingManager from '../pages/about/jobs/positions/european-marketing-manager.js';
import SalesDevelopmentRepresentativeGermany from '../pages/about/jobs/positions/sales-development-representative-germany.js';
import PartnershipsDevelopmentManager from '../pages/about/jobs/positions/partnerships-development-manager.js';
import HeadofFinance from '../pages/about/jobs/positions/head-of-finance.js';
import HeadofOperations from '../pages/about/jobs/positions/head-of-operations';
import PersonalAssistant from '../pages/about/jobs/positions/personal-assistant.js';
import FEDesigner from '../pages/about/jobs/positions/front-end-designer.js';
import PartnershipsSuccessManager from '../pages/about/jobs/positions/partnerships-success-manager.js';
import CustomerSupportFrance from '../pages/about/jobs/positions/customer-support-france.js';

import LegalIntroduction from '../pages/legal/introduction/legal-introduction';
import LegalCustomers from '../pages/legal/customers/legal-customers';
import LegalMerchants from '../pages/legal/merchants/legal-merchants';
import LegalOldRestrictionsIndex from '../pages/legal/old-restrictions/index/legal-old-restrictions-index';
import LegalOldRestrictions20140731 from '../pages/legal/old-restrictions/2014-07-31/legal-old-restrictions-2014-07-31';
import LegalOldRestrictions20140919 from '../pages/legal/old-restrictions/2014-09-19/legal-old-restrictions-2014-09-19';
import LegalPartners from '../pages/legal/partners/legal-partners';
import LegalPrivacy from '../pages/legal/privacy/legal-privacy';
import LegalRestrictions from '../pages/legal/restrictions/legal-restrictions';
import LegalPaymentTimings from '../pages/legal/payment-timings/legal-payment-timings';

import Partners from '../pages/partners/partners';
import PartnersClearBooks from '../pages/partners/clearbooks/partners-clearbooks';
import PartnersFreeagent from '../pages/partners/freeagent/partners-freeagent';
import PartnersKashflow from '../pages/partners/kashflow/partners-kashflow';
import PartnersPitchero from '../pages/partners/pitchero/partners-pitchero';
import PartnersSage from '../pages/partners/sage/partners-sage';
import PartnersXero from '../pages/partners/xero/partners-xero';
import PartnersQuickbooks from '../pages/partners/quickbooks/partners-quickbooks';
import PartnersBillin from '../pages/partners/billin/partners-billin';

import FaqCustomersHowItWorks from '../pages/faq/customers/how-it-works/faq-customers-how-it-works';
import FaqCustomers from '../pages/faq/customers/overview/faq-customers-overview';
import FaqCustomersRefunds from '../pages/faq/customers/refunds/faq-customers-refunds';
import FaqCustomersSecurity from '../pages/faq/customers/security/faq-customers-security';
import FaqMerchantsCustomerExperience from '../pages/faq/merchants/customer-experience/faq-merchants-customer-experience';
import FaqMerchantsDeveloperApi from '../pages/faq/merchants/developer-api/faq-merchants-developer-api';
import FaqMerchantsDirectDebit from '../pages/faq/merchants/direct-debit/faq-merchants-direct-debit';
import FaqMerchantsHowItWorks from '../pages/faq/merchants/how-it-works/faq-merchants-how-it-works';
import FaqMerchantsInternationalPayments from '../pages/faq/merchants/international-payments/faq-merchants-international-payments';
import FaqMerchants from '../pages/faq/merchants/overview/faq-merchants-overview';
import FaqMerchantsReferrals from '../pages/faq/merchants/referrals/faq-merchants-referrals';
import FaqMerchantsSecurity from '../pages/faq/merchants/security/faq-merchants-security';
import FaqMerchantsSigningUp from '../pages/faq/merchants/signing-up/faq-merchants-signing-up';
import FaqMerchantsVerification from '../pages/faq/merchants/verification/faq-merchants-verification';
import FaqProDashboard from '../pages/faq/pro-dashboard/setup/faq-pro-dashboard-setup';
import FaqProDashboardMandateCreation from '../pages/faq/pro-dashboard/mandate-creation/faq-pro-dashboard-mandate-creation';
import FaqProDashboardMandateExport from '../pages/faq/pro-dashboard/mandate-export/faq-pro-dashboard-mandate-export';
import FaqProDashboardPaymentCreation from '../pages/faq/pro-dashboard/payment-creation/faq-pro-dashboard-payment-creation';
import FaqProDashboardSubscriptionCreation from '../pages/faq/pro-dashboard/subscription-creation/faq-pro-dashboard-subscription-creation';
import FaqProDashboardPaymentRefund from '../pages/faq/pro-dashboard/payment-refund/faq-pro-dashboard-payment-refund';
import FaqProDashboardPaymentTracking from '../pages/faq/pro-dashboard/payment-tracking/faq-pro-dashboard-payment-tracking';
import FaqProDashboardPaymentRetry from '../pages/faq/pro-dashboard/payment-retry/faq-pro-dashboard-payment-retry';
import FaqProDashboardPayoutTracking from '../pages/faq/pro-dashboard/payout-tracking/faq-pro-dashboard-payout-tracking';
import FaqProDashboardPlanCreation from '../pages/faq/pro-dashboard/plan-creation/faq-pro-dashboard-plan-creation';
import FaqProDashboardPaylinksCreation from '../pages/faq/pro-dashboard/paylinks-creation/faq-pro-dashboard-paylinks-creation';

import Stories from '../pages/stories/stories';
import StoriesBoostCapital from '../pages/stories/stories/boost-capital';
import StoriesBulbEnergy from '../pages/stories/stories/bulb-energy';
import StoriesConnexin from '../pages/stories/stories/connexin';
import StoriesFdWorks from '../pages/stories/stories/fd-works';
import StoriesHasBeanCoffee from '../pages/stories/stories/has-bean-coffee';
import StoriesHotpodYoga from '../pages/stories/stories/hotpod-yoga';
import StoriesImpactHub from '../pages/stories/stories/impact-hub';
import StoriesNutmeg from '../pages/stories/stories/nutmeg';
import StoriesRockChoir from '../pages/stories/stories/rock-choir';
import StoriesLylesSutherland from '../pages/stories/stories/lyles-sutherland';
import StoriesSmartPension from '../pages/stories/stories/smart-pension';
import StoriesSoaringFalcon from '../pages/stories/stories/soaring-falcon';

import StoriesBlueskyBusiness from '../pages/stories/stories/bluesky-business';
import StoriesSpencerHockey from '../pages/stories/stories/spencer-hockey';
import StoriesFoundationOfHearts from '../pages/stories/stories/foundation-of-hearts';
import StoriesGreaterAnglia from '../pages/stories/stories/greater-anglia';
import StoriesZenchef from '../pages/stories/stories/zenchef';
import StoriesTheFrenchTalents from '../pages/stories/stories/the-french-talents';
import StoriesHabitat from '../pages/stories/stories/habitat';
import StoriesPicDrop from '../pages/stories/stories/picdrop';
import StoriesGastrofix from '../pages/stories/stories/gastrofix';
import StoriesCrossfitOldenburg from '../pages/stories/stories/crossfit-oldenburg';

export var homeRoute = 'home';

export const config = Immutable.fromJS([
  [Home, { name: homeRoute }, {
      en: {
        path: '/',
      },
      fr: {
        path: '/',
      },
      de: {
        path: '/',
      },
      es: {
        path: '/',
      },
      nl: {
        path: '/',
      },
      pt: {
        path: '/',
      },
    },
  ],
  [Pricing, { name: 'pricing' }, {
      'en-GB': {
        path: '/pricing',
      },
      'en-EU': {
        path: '/pricing',
      },
      'en-IE': {
        path: '/pricing',
      },
      'en-SE': {
        path: '/pricing',
      },
      fr: {
        path: '/tarifs',
      },
      de: {
        path: '/preise',
      },
      es: {
        path: '/tarifas',
      },
      nl: {
        path: '/tarieven',
      },
    },
  ],
  [Pro, { name: 'pro' }, {
      'en-GB': {
        path: '/pro',
      },
      'en-EU': {
        path: '/pro',
      },
      'en-IE': {
        path: '/pro',
      },
      'en-SE': {
        path: '/pro',
      },
      fr: {
        path: '/pro',
      },
      de: {
        path: '/pro',
      },
      es: {
        path: '/pro',
      },
      nl: {
        path: '/pro',
      },
    },
  ],
  [Security, { name: 'security' }, {
      'en-GB': {
        path: '/security',
      },
      'en-EU': {
        path: '/security',
      },
      'en-IE': {
        path: '/security',
      },
      'en-SE': {
        path: '/security',
      },
      fr: {
        path: '/securite',
      },
      de: {
        path: '/sicherheit',
      },
      es: {
        path: '/seguridad',
      },
      nl: {
        path: '/veiligheid',
      },
    },
  ],
  [Features, { name: 'features' }, {
      'en-GB': {
        path: '/features',
      },
      'en-IE': {
        path: '/features',
      },
      'en-SE': {
        path: '/features',
      },
      fr: {
        path: '/fonctionalites',
      },
      de: {
        path: '/funktionen',
      },
      es: {
        path: '/funcionalidades',
      },
      nl: {
        path: '/kenmerken',
      },
    },
  ],
  [ContactSales, { name: 'contact_sales' }, {
      en: {
        path: '/contact-sales',
      },
      fr: {
        path: '/contactez-nous',
      },
      de: {
        path: '/kontakt',
      },
      es: {
        path: '/contacto',
      },
      nl: {
        path: '/contact',
      },
    },
  ],
  [PaymentsByDirectDebit, { name: 'payments_by_direct_debit' }, {
      'en-GB': {
        path: '/payments-by-direct-debit',
      },
      'fr-FR': {
        path: '/prelevement-sepa',
      },
      'es-ES': {
        path: '/domiciliacion-bancaria-sepa',
      },
    },
  ],
  [PaymentsByDirectDebitVariationB, { name: 'payments_by_direct_debit_variation_b' }, {
      'en-GB': {
        path: '/payments-by-direct-debit-b',
      },
    },
  ],
  [AuddisDirectDebit, { name: 'auddis_direct_debit' }, {
      'en-GB': {
        path: '/auddis-direct-debit',
      },
    },
  ],
  [EasierDirectDebit, { name: 'easier_direct_debit' }, {
      'en-GB': {
        path: '/easier-direct-debit',
      },
    },
  ],
  [LandingPageJAndSProducts, { name: 'jandsproducts' }, {
      'en-GB': {
        path: '/jandsproducts',
      },
    },
  ],
  [BusinessDM, { name: 'business_dm' }, {
      'en-GB': {
        path: '/business',
      },
    },
  ],
  [Accountants, { name: 'accountants', category: 'industries' }, {
      'en-GB': {
        path: '/accountants',
      },
    },
  ],
  [Accountants, { name: 'bookkeepers' }, {
      'en-GB': {
        // The same React component is used on /accountants/ and /bookkeepers/
        path: '/bookkeepers',
      },
    },
  ],
  [Charities, { name: 'charities', category: 'industries' }, {
      'en-GB': {
        path: '/charities',
      },
    },
  ],
  [DigitalAgencies, { name: 'digital_agencies', category: 'industries' }, {
      'en-GB': {
        path: '/agencies',
      },
    },
  ],
  [EducationDM, { name: 'education_dm', category: 'industries' }, {
      'en-GB': {
        path: '/education',
      },
    },
  ],
  [Finance, { name: 'finance', category: 'industries' }, {
      'en-GB': {
        path: '/finance',
      },
    },
  ],
  [LocalGovernment, { name: 'local_government', category: 'industries' }, {
      'en-GB': {
        path: '/local-government',
      },
    },
  ],
  [SaaS, { name: 'saas', category: 'industries' }, {
      'en-GB': {
        path: '/saas',
      },
    },
  ],
  [Telcos, { name: 'telcos', category: 'industries' }, {
      'en-GB': {
        path: '/telcos',
      },
    },
  ],
  [Utilities, { name: 'utilities', category: 'industries' }, {
      'en-GB': {
        path: '/utilities',
      },
    },
  ],
  [Europe, { name: 'europe' }, {
      'en-GB': {
        path: '/europe',
      },
    },
  ],
  [ExampleCheckout, { name: 'example_checkout' }, {
      'en-GB': {
        path: '/example-checkout',
      },
    },
  ],
  [About, { name: 'about' }, {
      en: {
        path: '/about',
      },
      fr: {
        path: '/a-propos',
      },
      de: {
        path: '/ueber-uns',
      },
      es: {
        path: '/sobre-nosotros',
      },
      nl: {
        path: '/over-ons',
      },
    },
  ],
  [Team, { name: 'team' }, {
      en: {
        path: '/about/team',
      },
      fr: {
        path: '/a-propos/equipe',
      },
      de: {
        path: '/ueber-uns/team',
      },
      es: {
        path: '/sobre-nosotros/equipo',
      },
      nl: {
        path: '/over-ons/team',
      },
    },
  ],
  [Press, { name: 'press' }, {
      en: {
        path: '/about/press',
      },
    },
  ],
  [Jobs, { name: 'jobs' }, {
      en: {
        path: '/about/jobs',
      },
    },
  ],
  [DataEngineer, { name: 'jobs_data_engineer', category: 'jobs.engineering' }, {
      en: {
        path: '/about/jobs/data-engineer',
      },
    },
  ],
  [DataTeamLead, { name: 'jobs_data_team_lead', category: 'jobs.engineering' }, {
      en: {
        path: '/about/jobs/data-team-lead',
      },
    },
  ],
  [DevopsEngineer, { name: 'jobs_devops_engineer', category: 'jobs.engineering' }, {
      en: {
        path: '/about/jobs/devops-engineer',
      },
    },
  ],
  [FEDesigner, { name: 'jobs_front_end_designer', category: 'jobs.ux_design' }, {
      en: {
        path: '/about/jobs/front-end-designer',
      },
    },
  ],
  [SoftwareEngineer, { name: 'jobs_software_engineer', category: 'jobs.engineering' }, {
      en: {
        path: '/about/jobs/software-engineer',
      },
    },
  ],
  [EnterpriseAccountExecutive, { name: 'jobs_enterprise_account_executive', category: 'jobs.sales' }, {
      en: {
        path: '/about/jobs/enterprise-account-executive',
      },
    },
  ],
  [InsideAccountExecutiveSpain, { name: 'jobs_inside_account_executive_spain', category: 'jobs.sales' }, {
      en: {
        path: '/about/jobs/inside-account-executive-spain',
      },
    },
  ],
  [HeadofSalesFrance, { name: 'jobs_head_of_sales_france', category: 'jobs.sales' }, {
      en: {
        path: '/about/jobs/head-of-sales-france',
      },
    },
  ],
  [SalesDevelopmentRepresentativeGermany, { name: 'jobs_sales_development_representative_germany', category: 'jobs.sales' }, {
      en: {
        path: '/about/jobs/sales-development-representative-germany',
      },
    },
  ],
  [EuropeanMarketingManager, { name: 'jobs_european_marketing_manager', category: 'jobs.marketing' }, {
      en: {
        path: '/about/jobs/european-marketing-manager',
      },
    },
  ],
  [HeadofFinance, { name: 'jobs_head_of_finance', category: 'jobs.operations' }, {
      en: {
        path: '/about/jobs/head-of-finance',
      },
    },
  ],
  [HeadofOperations, { name: 'jobs_head_of_operations', category: 'jobs.operations' }, {
      en: {
        path: '/about/jobs/head-of-operations',
      },
    },
  ],
  [PersonalAssistant, { name: 'jobs_personal_assistant', category: 'jobs.operations' }, {
      en: {
        path: '/about/jobs/personal-assistant',
      },
    },
  ],
  [PartnershipsDevelopmentManager, { name: 'jobs_partnerships_development_manager', category: 'jobs.marketing' }, {
      en: {
        path: '/about/jobs/partnerships-development-manager',
      },
    },
  ],
  [PartnershipsSuccessManager, { name: 'jobs_partnerships_success_manager', category: 'jobs.marketing' }, {
      en: {
        path: '/about/jobs/partnerships-success-manager',
      },
    },
  ],
  [CustomerSupportFrance, { name: 'jobs_customer_support_france', category: 'jobs.operations' }, {
      en: {
        path: '/about/jobs/customer-support-france',
      },
    },
  ],
  [LegalIntroduction, { name: 'legal', category: 'legal' }, {
      'en-GB': {
        path: '/legal',
      },
      'en-EU': {
        path: '/legal',
      },
      'en-IE': {
        path: '/legal',
      },
      'en-SE': {
        path: '/legal',
      },
      fr: {
        path: '/legal',
      },
      de: {
        path: '/rechtliches',
      },
      es: {
        path: '/legal',
      },
    },
  ],
  [LegalCustomers, { name: 'legal_customers', category: 'legal' }, {
      'en-GB': {
        path: '/legal/customers',
      },
      'en-EU': {
        path: '/legal/customers',
      },
      'en-IE': {
        path: '/legal/customers',
      },
      'en-SE': {
        path: '/legal/customers',
      },
    },
  ],
  [LegalMerchants, { name: 'legal_merchants', category: 'legal' }, {
      'en-GB': {
        path: '/legal/merchants',
      },
      'en-EU': {
        path: '/legal/merchants',
      },
      'en-IE': {
        path: '/legal/merchants',
      },
      'en-SE': {
        path: '/legal/merchants',
      },
      fr: {
        path: '/legal/marchands',
      },
      de: {
        path: '/rechtliches/agb',
      },
      es: {
        path: '/legal/empresas',
      },
    },
  ],
  [LegalOldRestrictionsIndex, { name: 'legal_old_restrictions' }, {
      'en-GB': {
        path: '/legal/old-restrictions',
      },
      'en-EU': {
        path: '/legal/old-restrictions',
      },
      'en-IE': {
        path: '/legal/old-restrictions',
      },
      'en-SE': {
        path: '/legal/old-restrictions',
      },
    },
  ],
  [LegalOldRestrictions20140731, { name: 'legal_old_restrictions_2014_07_31' }, {
      'en-GB': {
        path: '/legal/old-restrictions/2014-07-31',
      },
      'en-EU': {
        path: '/legal/old-restrictions/2014-07-31',
      },
      'en-IE': {
        path: '/legal/old-restrictions/2014-07-31',
      },
      'en-SE': {
        path: '/legal/old-restrictions/2014-07-31',
      },
    },
  ],
  [LegalOldRestrictions20140919, { name: 'legal_old_restrictions_2014_09_19' }, {
      'en-GB': {
        path: '/legal/old-restrictions/2014-09-19',
      },
      'en-EU': {
        path: '/legal/old-restrictions/2014-09-19',
      },
      'en-IE': {
        path: '/legal/old-restrictions/2014-09-19',
      },
      'en-SE': {
        path: '/legal/old-restrictions/2014-09-19',
      },
    },
  ],
  [LegalPartners, { name: 'legal_partners', category: 'legal' }, {
      'en-GB': {
        path: '/legal/partners',
      },
      'en-EU': {
        path: '/legal/partners',
      },
      'en-IE': {
        path: '/legal/partners',
      },
      'en-SE': {
        path: '/legal/partners',
      },
    },
  ],
  [LegalRestrictions, { name: 'legal_restrictions', category: 'legal' }, {
      'en-GB': {
        path: '/legal/restrictions',
      },
      'en-EU': {
        path: '/legal/restrictions',
      },
      'en-IE': {
        path: '/legal/restrictions',
      },
      'en-SE': {
        path: '/legal/restrictions',
      },
      fr: {
        path: '/legal/activites-restreintes',
      },
      de: {
        path: '/rechtliches/verbotene-aktivitaeten',
      },
      es: {
        path: '/legal/actividades-restringidas',
      },
    },
  ],
  [LegalPrivacy, { name: 'legal_privacy', category: 'legal' }, {
      'en-GB': {
        path: '/legal/privacy',
      },
      'en-EU': {
        path: '/legal/privacy',
      },
      'en-IE': {
        path: '/legal/privacy',
      },
      'en-SE': {
        path: '/legal/privacy',
      },
      fr: {
        path: '/legal/politique-de-confidentialite',
      },
      de: {
        path: '/rechtliches/datenschutz',
      },
      es: {
        path: '/legal/privacidad',
      },
    },
  ],
  // Payment timings route doesn't have category because it shouldn't
  // appear in sidebar for the time being
  [LegalPaymentTimings, { name: 'legal_payment_timings' }, {
      'en-GB': {
        path: '/legal/payment-timings',
      },
      'en-EU': {
        path: '/legal/payment-timings',
      },
      'en-IE': {
        path: '/legal/payment-timings',
      },
      'en-SE': {
        path: '/legal/payment-timings',
      },
    },
  ],
  [Partners, { name: 'partners' }, {
      'en-GB': {
        path: '/partners',
      },
      'en-IE': {
        path: '/partners',
      },
      'en-SE': {
        path: '/partners',
      },
      fr: {
        path: '/partenaires',
      },
      de: {
        path: '/partner',
      },
      es: {
        path: '/asociados',
      },
      nl: {
        path: '/partners',
      },
    },
  ],
  [PartnersClearBooks, { name: 'partners_clearbooks' }, {
      'en-GB': {
        path: '/partners/clearbooks',
      },
    },
  ],
  [PartnersFreeagent, { name: 'partners_freeagent' }, {
      'en-GB': {
        path: '/partners/freeagent',
      },
    },
  ],
  [PartnersKashflow, { name: 'partners_kashflow' }, {
      'en-GB': {
        path: '/kashflow',
      },
    },
  ],
  [PartnersPitchero, { name: 'partners_pitchero' }, {
      'en-GB': {
        path: '/partners/pitchero',
      },
    },
  ],
  [PartnersSage, { name: 'partners_sage' }, {
      'en-GB': {
        path: '/partners/sage',
      },
    },
  ],
  [PartnersXero, { name: 'partners_xero' }, {
      'en-GB': {
        path: '/xero',
      },
    },
  ],
  [PartnersQuickbooks, { name: 'partners_quickbooks' }, {
      'en-GB': {
        path: '/partners/quickbooks',
      },
    },
  ],
  [PartnersBillin, { name: 'partners_billin' }, {
      es: {
        path: '/asociados/billin',
      },
    },
  ],
  [FaqCustomers, { name: 'faq_customers', category: 'faq.customers' }, {
      en: {
        path: '/faq/customers',
      },
    },
  ],
  [FaqCustomersHowItWorks, { name: 'faq_customers_how_it_works', category: 'faq.customers' }, {
      en: {
        path: '/faq/customers/how-it-works',
      },
    },
  ],
  [FaqCustomersRefunds, { name: 'faq_customers_refunds', category: 'faq.customers' }, {
      en: {
        path: '/faq/customers/refunds',
      },
    },
  ],
  [FaqCustomersSecurity, { name: 'faq_customers_security', category: 'faq.customers' }, {
      en: {
        path: '/faq/customers/security',
      },
    },
  ],
  [FaqMerchants, { name: 'faq_merchants', category: 'faq.merchants' }, {
      'en-GB': {
        path: '/faq/merchants',
      },
      'en-IE': {
        path: '/faq/merchants',
      },
      'en-EU': {
        path: '/faq/merchants',
      },
      'en-SE': {
        path: '/faq/merchants',
      },
      fr: {
        path: '/faq/commercant',
      },
      de: {
        path: '/faq/haendler',
      },
      es: {
        path: '/faq/empresas',
      },
    },
  ],
  [FaqMerchantsHowItWorks, { name: 'faq_merchants_how_it_works', category: 'faq.merchants' }, {
      'en-GB': {
        path: '/faq/merchants/how-it-works',
      },
      'en-IE': {
        path: '/faq/merchants/how-it-works',
      },
      'en-EU': {
        path: '/faq/merchants/how-it-works',
      },
      'en-SE': {
        path: '/faq/merchants/how-it-works',
      },
      fr: {
        path: '/faq/commercant/fonctionnement',
      },
      de: {
        path: '/faq/haendler/wie-es-funktioniert',
      },
      es: {
        path: '/faq/empresas/como-funciona',
      },
    },
  ],
  [FaqMerchantsSigningUp, { name: 'faq_merchants_signing_up', category: 'faq.merchants' }, {
      'en-GB': {
        path: '/faq/merchants/signing-up',
      },
      'en-IE': {
        path: '/faq/merchants/signing-up',
      },
      'en-EU': {
        path: '/faq/merchants/signing-up',
      },
      'en-SE': {
        path: '/faq/merchants/signing-up',
      },
      fr: {
        path: '/faq/commercant/inscription',
      },
      de: {
        path: '/faq/haendler/anmelden',
      },
      es: {
        path: '/faq/empresas/registro',
      },
    },
  ],
  [FaqMerchantsDirectDebit, { name: 'faq_merchants_direct_debit', category: 'faq.merchants' }, {
      'en-GB': {
        path: '/faq/merchants/direct-debit',
      },
      'en-IE': {
        path: '/faq/merchants/direct-debit',
      },
      'en-EU': {
        path: '/faq/merchants/direct-debit',
      },
      'en-SE': {
        path: '/faq/merchants/direct-debit',
      },
      fr: {
        path: '/faq/commercant/prelevement-bancaire',
      },
      de: {
        path: '/faq/haendler/lastschriftverfahren',
      },
      es: {
        path: '/faq/empresas/domiciliacion-bancaria',
      },
    },
  ],
  [FaqMerchantsSecurity, { name: 'faq_merchants_security', category: 'faq.merchants' }, {
      'en-GB': {
        path: '/faq/merchants/security',
      },
      'en-IE': {
        path: '/faq/merchants/security',
      },
      'en-EU': {
        path: '/faq/merchants/security',
      },
      'en-SE': {
        path: '/faq/merchants/security',
      },
      fr: {
        path: '/faq/commercant/securite',
      },
      de: {
        path: '/faq/haendler/sicherheit',
      },
      es: {
        path: '/faq/empresas/seguridad',
      },
    },
  ],
  [FaqMerchantsCustomerExperience, { name: 'faq_merchants_customer_experience', category: 'faq.merchants' }, {
      'en-GB': {
        path: '/faq/merchants/customer-experience',
      },
      'en-IE': {
        path: '/faq/merchants/customer-experience',
      },
      'en-EU': {
        path: '/faq/merchants/customer-experience',
      },
      'en-SE': {
        path: '/faq/merchants/customer-experience',
      },
      fr: {
        path: '/faq/commercant/consommateur',
      },
      de: {
        path: '/faq/haendler/kunden-erlebnis',
      },
      es: {
        path: '/faq/empresas/experiencia-usuario',
      },
    },
  ],
  [FaqMerchantsInternationalPayments, { name: 'faq_merchants_international_payments', category: 'faq.merchants' }, {
      'en-GB': {
        path: '/faq/merchants/international-payments',
      },
      'en-IE': {
        path: '/faq/merchants/international-payments',
      },
      'en-EU': {
        path: '/faq/merchants/international-payments',
      },
      'en-SE': {
        path: '/faq/merchants/international-payments',
      },
      fr: {
        path: '/faq/commercant/international',
      },
      de: {
        path: '/faq/haendler/international',
      },
      es: {
        path: '/faq/empresas/cobros-internationales',
      },
    },
  ],
  [FaqMerchantsDeveloperApi, { name: 'faq_merchants_developer_api', category: 'faq.merchants' }, {
      'en-GB': {
        path: '/faq/merchants/developer-api',
      },
      'en-IE': {
        path: '/faq/merchants/developer-api',
      },
      'en-EU': {
        path: '/faq/merchants/developer-api',
      },
      'en-SE': {
        path: '/faq/merchants/developer-api',
      },
      fr: {
        path: '/faq/commercant/api-developpeurs',
      },
      de: {
        path: '/faq/haendler/entwickler-api',
      },
      es: {
        path: '/faq/empresas/desarrollador-api',
      },
    },
  ],
  [FaqMerchantsReferrals, { name: 'faq_merchants_referrals', category: 'faq.merchants' }, {
      'en-GB': {
        path: '/faq/merchants/referrals',
      },
    },
  ],
  [FaqMerchantsVerification, { name: 'faq_merchants_verification', category: 'faq.merchants' }, {
      es: {
        path: '/faq/empresas/verificacion',
      },
    },
  ],
  [FaqProDashboard, { name: 'faq_pro_dashboard', category: 'faq.pro_dashboard' }, {
      'en-IE': {
        path: '/faq/pro-dashboard',
      },
      'en-EU': {
        path: '/faq/pro-dashboard',
      },
      'en-SE': {
        path: '/faq/pro-dashboard',
      },
      fr: {
        path: '/faq/tableau-de-bord-pro',
      },
      de: {
        path: '/faq/dashboard',
      },
      es: {
        path: '/faq/panel-control',
      },
    },
  ],
  [FaqProDashboardMandateCreation, { name: 'faq_pro_dashboard_mandate_creation', category: 'faq.pro_dashboard' }, {
      'en-IE': {
        path: '/faq/pro-dashboard/mandate-creation',
      },
      'en-EU': {
        path: '/faq/pro-dashboard/mandate-creation',
      },
      'en-SE': {
        path: '/faq/pro-dashboard/mandate-creation',
      },
      fr: {
        path: '/faq/tableau-de-bord-pro/creation-mandat',
      },
      de: {
        path: '/faq/dashboard/mandate-erstellen',
      },
      es: {
        path: '/faq/panel-control/creacion-mandatos',
      },
    },
  ],
  [FaqProDashboardPlanCreation, { name: 'faq_pro_dashboard_plan_creation', category: 'faq.pro_dashboard' }, {
      fr: {
        path: '/faq/tableau-de-bord-pro/creation-plan',
      },
      es: {
        path: '/faq/panel-control/creacion-planes',
      },
    },
  ],
  [FaqProDashboardPaylinksCreation, { name: 'faq_pro_dashboard_paylinks_creation', category: 'faq.pro_dashboard' }, {
      fr: {
        path: '/faq/tableau-de-bord-pro/creation-paylinks',
      },
      es: {
        path: '/faq/panel-control/paylinks',
      },
    },
  ],
  [FaqProDashboardPaymentCreation, { name: 'faq_pro_dashboard_payment_creation', category: 'faq.pro_dashboard' }, {
      'en-IE': {
        path: '/faq/pro-dashboard/payment-creation',
      },
      'en-SE': {
        path: '/faq/pro-dashboard/payment-creation',
      },
      'en-EU': {
        path: '/faq/pro-dashboard/payment-creation',
      },
      fr: {
        path: '/faq/tableau-de-bord-pro/creation-paiement',
      },
      de: {
        path: '/faq/dashboard/zahlungen-erstellen',
      },
      es: {
        path: '/faq/panel-control/creación-cobros',
      },
    },
  ],
  [FaqProDashboardSubscriptionCreation, { name: 'faq_pro_dashboard_subscription_creation', category: 'faq.pro_dashboard' }, {
      'en-IE': {
        path: '/faq/pro-dashboard/subscription-creation',
      },
      'en-SE': {
        path: '/faq/pro-dashboard/subscription-creation',
      },
      'en-EU': {
        path: '/faq/pro-dashboard/subscription-creation',
      },
      fr: {
        path: '/faq/tableau-de-bord-pro/creation-abonnement',
      },
      de: {
        path: '/faq/dashboard/abonnements-erstellen',
      },
      es: {
        path: '/faq/panel-control/suscripciones-creacion',
      },
    },
  ],
  [FaqProDashboardPaymentTracking, { name: 'faq_pro_dashboard_payment_tracking', category: 'faq.pro_dashboard' }, {
      'en-IE': {
        path: '/faq/pro-dashboard/payment-tracking',
      },
      'en-SE': {
        path: '/faq/pro-dashboard/payment-tracking',
      },
      'en-EU': {
        path: '/faq/pro-dashboard/payment-tracking',
      },
      fr: {
        path: '/faq/tableau-de-bord-pro/suivi-paiements',
      },
      de: {
        path: '/faq/dashboard/zahlungen-verfolgen',
      },
      es: {
        path: '/faq/panel-control/seguimiento-cobros',
      },
    },
  ],
  [FaqProDashboardPaymentRefund, { name: 'faq_pro_dashboard_payment_refund', category: 'faq.pro_dashboard' }, {
      'en-IE': {
        path: '/faq/pro-dashboard/payment-refund',
      },
      'en-SE': {
        path: '/faq/pro-dashboard/payment-refund',
      },
      'en-EU': {
        path: '/faq/pro-dashboard/payment-refund',
      },
      fr: {
        path: '/faq/tableau-de-bord-pro/remboursement-paiement',
      },
      de: {
        path: '/faq/dashboard/zahlungen-erstatten',
      },
      es: {
        path: '/faq/panel-control/devolucion-cobros',
      },
    },
  ],
  [FaqProDashboardPaymentRetry, { name: 'faq_pro_dashboard_payment_retry', category: 'faq.pro_dashboard' }, {
      'en-IE': {
        path: '/faq/pro-dashboard/payment-retry',
      },
      'en-SE': {
        path: '/faq/pro-dashboard/payment-retry',
      },
      'en-EU': {
        path: '/faq/pro-dashboard/payment-retry',
      },
      fr: {
        path: '/faq/tableau-de-bord-pro/representation-paiements',
      },
      de: {
        path: '/faq/dashboard/zahlungen-wiederversuchen',
      },
      es: {
        path: '/faq/panel-control/reintento-cobros',
      },
    },
  ],
  [FaqProDashboardPayoutTracking, { name: 'faq_pro_dashboard_payout_tracking', category: 'faq.pro_dashboard' }, {
      'en-IE': {
        path: '/faq/pro-dashboard/payout-tracking',
      },
      'en-SE': {
        path: '/faq/pro-dashboard/payout-tracking',
      },
      'en-EU': {
        path: '/faq/pro-dashboard/payout-tracking',
      },
      fr: {
        path: '/faq/tableau-de-bord-pro/suivi-encaissements',
      },
      de: {
        path: '/faq/dashboard/auszahlungen-verfolgen',
      },
      es: {
        path: '/faq/panel-control/seguimiento-transferidos',
      },
    },
  ],
  [FaqProDashboardMandateExport, { name: 'faq_pro_dashboard_mandate_export', category: 'faq.pro_dashboard' }, {
      'en-IE': {
        path: '/faq/pro-dashboard/mandate-export',
      },
      'en-EU': {
        path: '/faq/pro-dashboard/mandate-export',
      },
      'en-SE': {
        path: '/faq/pro-dashboard/mandate-export',
      },
      fr: {
        path: '/faq/tableau-de-bord-pro/export-mandat',
      },
      de: {
        path: '/faq/dashboard/mandate-exportieren',
      },
      es: {
        path: '/faq/panel-control/exportar-mandatos',
      },
    },
  ],
  [Stories, { name: 'stories' }, {
      'en-GB': {
        path: '/stories',
      },
      fr: {
        path: '/references',
      },
      de: {
        path: '/kundenstimmen',
      },
    },
  ],
  [StoriesBoostCapital, { name: 'stories_boost_capital', category: 'stories' }, {
      'en-GB': {
        path: '/stories/boost-capital',
      },
    },
  ],
  [StoriesBulbEnergy, { name: 'stories_bulb_energy', category: 'stories' }, {
      'en-GB': {
        path: '/stories/bulb-energy',
      },
    },
  ],
  [StoriesConnexin, { name: 'stories_connexin', category: 'stories' }, {
      'en-GB': {
        path: '/stories/connexin',
      },
    },
  ],
  [StoriesFdWorks, { name: 'stories_fd_works', category: 'stories' }, {
      'en-GB': {
        path: '/stories/fd-works',
      },
    },
  ],
  [StoriesHasBeanCoffee, { name: 'stories_has_bean_coffee', category: 'stories' }, {
      'en-GB': {
        path: '/stories/has-bean-coffee',
      },
    },
  ],
  [StoriesHotpodYoga, { name: 'stories_hotpod_yoga', category: 'stories' }, {
      'en-GB': {
        path: '/stories/hotpod-yoga',
      },
    },
  ],
  [StoriesImpactHub, { name: 'stories_impact_hub', category: 'stories' }, {
      es: {
        path: '/referencias/impact-hub',
      },
    },
  ],
  [StoriesNutmeg, { name: 'stories_nutmeg', category: 'stories' }, {
      'en-GB': {
        path: '/stories/nutmeg',
      },
    },
  ],
  [StoriesLylesSutherland, { name: 'stories_lyles_sutherland', category: 'stories' }, {
      'en-GB': {
        path: '/stories/lyles-sutherland',
      },
    },
  ],
  [StoriesRockChoir, { name: 'stories_rock_choir', category: 'stories' }, {
      'en-GB': {
        path: '/stories/rock-choir',
      },
    },
  ],
  [StoriesSmartPension, { name: 'stories_smart_pension', category: 'stories' }, {
      'en-GB': {
        path: '/stories/smart-pension',
      },
    },
  ],
  [StoriesSoaringFalcon, { name: 'stories_soaring_falcon', category: 'stories' }, {
      'en-GB': {
        path: '/stories/soaring-falcon',
      },
    },
  ],
  [StoriesBlueskyBusiness, { name: 'stories_bluesky_business', category: 'stories' }, {
      'en-GB': {
        path: '/stories/bluesky-business',
      },
    },
  ],
  [StoriesSpencerHockey, { name: 'stories_spencer_hockey', category: 'stories' }, {
      'en-GB': {
        path: '/stories/spencer-hockey',
      },
    },
  ],
  [StoriesFoundationOfHearts, { name: 'stories_foundation_of_hearts', category: 'stories' }, {
      'en-GB': {
        path: '/stories/foundation-of-hearts',
      },
      fr: {
        path: '/references/foundation-of-hearts',
      },
    },
  ],
  [StoriesGreaterAnglia, { name: 'stories_greater_anglia', category: 'stories' }, {
      'en-GB': {
        path: '/stories/greater-anglia',
      },
    },
  ],
  [StoriesZenchef, { name: 'stories_zenchef', category: 'stories' }, {
      fr: {
        path: '/references/zenchef',
      },
    },
  ],
  [StoriesPicDrop, { name: 'stories_picdrop', category: 'stories' }, {
      de: {
        path: '/kundenstimmen/picdrop',
      },
    },
  ],
  [StoriesGastrofix, { name: 'stories_gastrofix', category: 'stories' }, {
      de: {
        path: '/kundenstimmen/gastrofix',
      },
    },
  ],
  [StoriesCrossfitOldenburg, { name: 'stories_crossfit_oldenburg', category: 'stories' }, {
      de: {
        path: '/kundenstimmen/crossfit-oldenburg',
      },
    },
  ],
  [StoriesTheFrenchTalents, { name: 'stories_the_french_talents', category: 'stories' }, {
      fr: {
        path: '/references/the-french-talents',
      },
    },
  ],
  [StoriesHabitat, { name: 'stories_habitat', category: 'stories' }, {
      fr: {
        path: '/references/habitat',
      },
    },
  ],
  [HowTo, { name: 'how-to' }, {
      'en-GB': {
        path: '/how-to',
      },
    },
  ],
]);
