import Immutable from 'immutable';

import Home from '../pages/home/home';
import Pricing from '../pages/pricing/pricing';
import Pro from '../pages/pro/pro';
import Features from '../pages/features/features';
import FeaturesApi from '../pages/features/api/features-api';
import Security from '../pages/security/security';
import ContactSales from '../pages/contact-sales/contact-sales';

import PaymentsByDirectDebit from '../pages/payments-by-direct-debit/payments-by-direct-debit';
import Europe from '../pages/europe/europe';
import Refer from '../pages/refer/refer';
import ExampleCheckout from '../pages/example-checkout/example-checkout';

import About from '../pages/about/about';
import Team from '../pages/about/team/team';

import Jobs from '../pages/about/jobs/jobs';
import SalesDevelopmentRepresentative from '../pages/about/jobs/positions/sales-development-representative';
import AccountExecutiveGermany from '../pages/about/jobs/positions/account-executive-germany';
import BusinessDevelopmentGermany from '../pages/about/jobs/positions/business-development-germany';
import SeniorAccountExecutive from '../pages/about/jobs/positions/senior-account-executive';
import ProductEngineer from '../pages/about/jobs/positions/product-engineer';
import DeveloperCommunityManager from '../pages/about/jobs/positions/developer-community-manager';
import EngineeringInternships from '../pages/about/jobs/positions/engineering-internships';
import Designers from '../pages/about/jobs/positions/designers';
import SoftwareEngineer from '../pages/about/jobs/positions/software-engineer';
import SiteReliabilityEngineer from '../pages/about/jobs/positions/site-reliability-engineer';
import DataEngineer from '../pages/about/jobs/positions/data-engineer';
import CustomerSupport from '../pages/about/jobs/positions/customer-support';
import DigitalMarketer from '../pages/about/jobs/positions/digital-marketer';
import CustomerRelationshipMarketer from '../pages/about/jobs/positions/customer-relationship-marketer';
import ContentCommunityManager from '../pages/about/jobs/positions/content-community-manager';
import VPPeople from '../pages/about/jobs/positions/vp-people';

import LegalIntroduction from '../pages/legal/introduction/legal-introduction';
import LegalCustomers from '../pages/legal/customers/legal-customers';
import LegalMerchants from '../pages/legal/merchants/legal-merchants';
import LegalOldRestrictionsIndex from '../pages/legal/old-restrictions/index/legal-old-restrictions-index';
import LegalOldRestrictions20140731 from '../pages/legal/old-restrictions/2014-07-31/legal-old-restrictions-2014-07-31';
import LegalOldRestrictions20140919 from '../pages/legal/old-restrictions/2014-09-19/legal-old-restrictions-2014-09-19';
import LegalPartners from '../pages/legal/partners/legal-partners';
import LegalPrivacy from '../pages/legal/privacy/legal-privacy';
import LegalRestrictions from '../pages/legal/restrictions/legal-restrictions';

import Partners from '../pages/partners/partners';
import PartnersClearBooks from '../pages/partners/clearbooks/partners-clearbooks';

import PartnersGuide from
  '../pages/partners/guide/introduction/partners-guide-introduction';
import PartnersGuideOptions from
  '../pages/partners/guide/options/partners-guide-options';
import PartnersGuideAppIntegration from
  '../pages/partners/guide/app-integration/partners-guide-app-integration';
import PartnersGuideWhiteLabelIntegration from
  '../pages/partners/guide/white-label-integration/partners-guide-white-label-integration';
import PartnersGuideGettingStarted from
  '../pages/partners/guide/getting-started/partners-guide-getting-started';
import PartnersGuideTesting from '../pages/partners/guide/testing/partners-guide-testing';
import PartnersGuideChargebacks from
  '../pages/partners/guide/chargebacks/partners-guide-chargebacks';
import PartnersGuideGettingPaid from
  '../pages/partners/guide/getting-paid/partners-guide-getting-paid';
import PartnersGuideLegal from
  '../pages/partners/guide/legal/partners-guide-legal';
import PartnersGuideMandates from
  '../pages/partners/guide/mandates/partners-guide-mandates';
import PartnersGuideNonUkPayments from
  '../pages/partners/guide/non-uk-payments/partners-guide-non-uk-payments';
import PartnersGuideOurPricing from
  '../pages/partners/guide/our-pricing/partners-guide-our-pricing';
import PartnersGuidePaymentPages from
  '../pages/partners/guide/payment-pages/partners-guide-payment-pages';
import PartnersGuideReporting from
  '../pages/partners/guide/reporting/partners-guide-reporting';
import PartnersGuideRestrictions from
  '../pages/partners/guide/restrictions/partners-guide-restrictions';
import PartnersGuideSecurity from
  '../pages/partners/guide/security/partners-guide-security';


import PartnersFreeagent from '../pages/partners/freeagent/partners-freeagent';
import PartnersKashflow from '../pages/partners/kashflow/partners-kashflow';
import PartnersPitchero from '../pages/partners/pitchero/partners-pitchero';
import PartnersSage from '../pages/partners/sage/partners-sage';
import PartnersXero from '../pages/partners/xero/partners-xero';

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
import FaqMerchantsPartners from '../pages/faq/merchants/partners/faq-merchants-partners';
import FaqMerchantsReferrals from '../pages/faq/merchants/referrals/faq-merchants-referrals';
import FaqMerchantsSecurity from '../pages/faq/merchants/security/faq-merchants-security';
import FaqMerchantsSigningUp from '../pages/faq/merchants/signing-up/faq-merchants-signing-up';
import FaqProDashboard from '../pages/faq/pro-dashboard/setup/faq-pro-dashboard-setup';
import FaqProDashboardMandateCreation from '../pages/faq/pro-dashboard/mandate-creation/faq-pro-dashboard-mandate-creation';
import FaqProDashboardMandateExport from '../pages/faq/pro-dashboard/mandate-export/faq-pro-dashboard-mandate-export';
import FaqProDashboardPaymentCreation from '../pages/faq/pro-dashboard/payment-creation/faq-pro-dashboard-payment-creation';
import FaqProDashboardSubscriptionCreation from '../pages/faq/pro-dashboard/subscription-creation/faq-pro-dashboard-subscription-creation';
import FaqProDashboardPaymentRefund from '../pages/faq/pro-dashboard/payment-refund/faq-pro-dashboard-payment-refund';
import FaqProDashboardPaymentTracking from '../pages/faq/pro-dashboard/payment-tracking/faq-pro-dashboard-payment-tracking';
import FaqProDashboardPaymentRetry from '../pages/faq/pro-dashboard/payment-retry/faq-pro-dashboard-payment-retry';
import FaqProDashboardPayoutTracking from '../pages/faq/pro-dashboard/payout-tracking/faq-pro-dashboard-payout-tracking';

import Stories from '../pages/stories/stories';
import StoriesHasBeanCoffee from '../pages/stories/stories/has-bean-coffee';
import StoriesBlueskyBusiness from '../pages/stories/stories/bluesky-business';
import StoriesCrowdCube from '../pages/stories/stories/crowdcube';
import StoriesMomentum from '../pages/stories/stories/momentum-training';
import StoriesRockChoir from '../pages/stories/stories/rock-choir';
import StoriesSpencerHockey from '../pages/stories/stories/spencer-hockey';
import StoriesFoundationOfHearts from '../pages/stories/stories/foundation-of-hearts';
import StoriesGreaterAnglia from '../pages/stories/stories/greater-anglia';
import Stories1001Menus from '../pages/stories/stories/1001-menus';
import StoriesTheFrenchTalents from '../pages/stories/stories/the-french-talents';

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
      se: {
        path: '/',
      },
      no: {
        path: '/',
      },
      nl: {
        path: '/',
      },
    },
  ],
  [Pricing, { name: 'pricing' }, {
      en: {
        path: '/pricing',
      },
      fr: {
        path: '/tarifs',
      },
      de: {
        path: '/preise',
      },
    },
  ],
  [Pro, { name: 'pro' }, {
      en: {
        path: '/pro',
      },
      fr: {
        path: '/pro',
      },
      de: {
        path: '/pro',
      },
    },
  ],
  [Security, { name: 'security' }, {
      en: {
        path: '/security',
      },
      fr: {
        path: '/securite',
      },
      de: {
        path: '/sicherheit',
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
      fr: {
        path: '/fonctionalites',
      },
      de: {
        path: '/funktionen',
      },
    },
  ],
  [FeaturesApi, { name: 'features_api' }, {
      'en-GB': {
        path: '/features/api',
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
    },
  ],
  [PaymentsByDirectDebit, { name: 'payments_by_direct_debit' }, {
      'en-GB': {
        path: '/payments-by-direct-debit',
      },
    },
  ],
  [Europe, { name: 'europe' }, {
      'en-GB': {
        path: '/europe',
      },
    },
  ],
  [Refer, { name: 'refer' }, {
      'en-GB': {
        path: '/refer',
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
    },
  ],
  [Jobs, { name: 'jobs' }, {
      en: {
        path: '/about/jobs',
      },
    },
  ],
  [ProductEngineer, { name: 'jobs_product_engineer', category: 'jobs.engineering' }, {
      en: {
        path: '/about/jobs/product-engineer',
      },
    },
  ],
  [SoftwareEngineer, { name: 'jobs_software_engineer', category: 'jobs.engineering' }, {
      en: {
        path: '/about/jobs/software-engineer',
      },
    },
  ],
  [DataEngineer, { name: 'jobs_data_engineer', category: 'jobs.engineering' }, {
      en: {
        path: '/about/jobs/data-engineer',
      },
    },
  ],
  [SiteReliabilityEngineer, { name: 'jobs_site_reliability_engineer', category: 'jobs.engineering' }, {
      en: {
        path: '/about/jobs/site-reliability-engineer',
      },
    },
  ],
  [EngineeringInternships, { name: 'jobs_engineering_internships', category: 'jobs.engineering' }, {
      en: {
        path: '/about/jobs/engineering-internships',
      },
    },
  ],
  [DeveloperCommunityManager, { name: 'jobs_developer_community_manager', category: 'jobs.engineering' }, {
      en: {
        path: '/about/jobs/developer-community-manager',
      },
    },
  ],
  [Designers, { name: 'jobs_designers', category: 'jobs.ux_design' }, {
      en: {
        path: '/about/jobs/designers',
      },
    },
  ],
  [SeniorAccountExecutive, { name: 'jobs_senior_account_executive', category: 'jobs.sales' }, {
      en: {
        path: '/about/jobs/senior-account-executive',
      },
    },
  ],
  [SalesDevelopmentRepresentative, { name: 'jobs_sales_development_representative', category: 'jobs.sales' }, {
      en: {
        path: '/about/jobs/sales-development-representative',
      },
    },
  ],
  [AccountExecutiveGermany, { name: 'jobs_account_executive_germany', category: 'jobs.sales' }, {
      en: {
        path: '/about/jobs/account-executive-germany',
      },
    },
  ],
  [DigitalMarketer, { name: 'jobs_digital_marketer', category: 'jobs.marketing' }, {
      en: {
        path: '/about/jobs/digital-marketer',
      },
    },
  ],
  [CustomerRelationshipMarketer, { name: 'jobs_customer_relationship_marketer', category: 'jobs.marketing' }, {
      en: {
        path: '/about/jobs/customer-relationship-marketer',
      },
    },
  ],
  [ContentCommunityManager, { name: 'jobs_content_community_manager', category: 'jobs.marketing' }, {
      en: {
        path: '/about/jobs/content-community-manager',
      },
    },
  ],
  [VPPeople, { name: 'jobs_vp_people', category: 'jobs.operations' }, {
      en: {
        path: '/about/jobs/vp-people',
      },
    },
  ],
  [CustomerSupport, { name: 'jobs_customer_support', category: 'jobs.operations' }, {
      en: {
        path: '/about/jobs/customer-support',
      },
    },
  ],
  [BusinessDevelopmentGermany, { name: 'jobs_business_development_germany', category: 'jobs.business_development' }, {
      en: {
        path: '/about/jobs/business-development-germany',
      },
    },
  ],
  [LegalIntroduction, { name: 'legal', category: 'legal' }, {
      en: {
        path: '/legal',
      },
      fr: {
        path: '/legal',
      },
      de: {
        path: '/rechtliches',
      },
    },
  ],
  [LegalCustomers, { name: 'legal_customers', category: 'legal' }, {
      en: {
        path: '/legal/customers',
      },
    },
  ],
  [LegalMerchants, { name: 'legal_merchants', category: 'legal' }, {
      en: {
        path: '/legal/merchants',
      },
       fr: {
        path: '/legal/marchands',
      },
      de: {
        path: '/rechtliches/agb',
      },
    },
  ],
  [LegalOldRestrictionsIndex, { name: 'legal_old_restrictions' }, {
      en: {
        path: '/legal/old-restrictions',
      },
    },
  ],
  [LegalOldRestrictions20140731, { name: 'legal_old_restrictions_2014_07_31' }, {
      en: {
        path: '/legal/old-restrictions/2014-07-31',
      },
    },
  ],
  [LegalOldRestrictions20140919, { name: 'legal_old_restrictions_2014_09_19' }, {
      en: {
        path: '/legal/old-restrictions/2014-09-19',
      },
    },
  ],
  [LegalPartners, { name: 'legal_partners', category: 'legal' }, {
      en: {
        path: '/legal/partners',
      },
    },
  ],
  [LegalRestrictions, { name: 'legal_restrictions', category: 'legal' }, {
      en: {
        path: '/legal/restrictions',
      },
      fr: {
        path: '/legal/activites-restreintes',
      },
      de: {
        path: '/rechtliches/verbotene-aktivitaeten',
      },
    },
  ],
  [LegalPrivacy, { name: 'legal_privacy', category: 'legal' }, {
      en: {
        path: '/legal/privacy',
      },
      fr: {
        path: '/legal/politique-de-confidentialite',
      },
      de: {
        path: '/rechtliches/datenschutz',
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
      fr: {
        path: '/partenaires',
      },
      de: {
        path: '/partner',
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
        path: '/partners/kashflow',
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
        path: '/partners/xero',
      },
    },
  ],
  [PartnersGuide, { name: 'partners_guide', category: 'partners.overview' }, {
      'en-GB': {
        path: '/partners/guide',
      },
    },
  ],
  [PartnersGuideOptions, { name: 'partners_guide_options', category: 'partners.overview' }, {
      'en-GB': {
        path: '/partners/guide/options',
      },
    },
  ],
  [PartnersGuideAppIntegration, { name: 'partners_guide_app_integration', category: 'partners.overview' }, {
      'en-GB': {
        path: '/partners/guide/app-integration',
      },
    },
  ],
  [PartnersGuideWhiteLabelIntegration, { name: 'partners_guide_white_label_integration', category: 'partners.overview' }, {
      'en-GB': {
        path: '/partners/guide/white-label-integration',
      },
    },
  ],
  [PartnersGuideGettingStarted, { name: 'partners_guide_getting_started', category: 'partners.overview' }, {
      'en-GB': {
        path: '/partners/guide/getting-started',
      },
    },
  ],
  [PartnersGuideTesting, { name: 'partners_guide_testing', category: 'partners.faq' }, {
      'en-GB': {
        path: '/partners/guide/testing',
      },
    },
  ],
  [PartnersGuidePaymentPages, { name: 'partners_guide_payment_pages', category: 'partners.faq' }, {
      'en-GB': {
        path: '/partners/guide/payment-pages',
      },
    },
  ],
  [PartnersGuideNonUkPayments, { name: 'partners_guide_non_uk_payments', category: 'partners.faq' }, {
      'en-GB': {
        path: '/partners/guide/non-uk-payments',
      },
    },
  ],
  [PartnersGuideMandates, { name: 'partners_guide_mandates', category: 'partners.faq' }, {
      'en-GB': {
        path: '/partners/guide/mandates',
      },
    },
  ],
  [PartnersGuideGettingPaid, { name: 'partners_guide_getting_paid', category: 'partners.faq' }, {
      'en-GB': {
        path: '/partners/guide/getting-paid',
      },
    },
  ],
  [PartnersGuideOurPricing, { name: 'partners_guide_our_pricing', category: 'partners.faq' }, {
      'en-GB': {
        path: '/partners/guide/our-pricing',
      },
    },
  ],
  [PartnersGuideChargebacks, { name: 'partners_guide_chargebacks', category: 'partners.faq' }, {
      'en-GB': {
        path: '/partners/guide/chargebacks',
      },
    },
  ],
  [PartnersGuideReporting, { name: 'partners_guide_reporting', category: 'partners.faq' }, {
      'en-GB': {
        path: '/partners/guide/reporting',
      },
    },
  ],
  [PartnersGuideSecurity, { name: 'partners_guide_security', category: 'partners.faq' }, {
      'en-GB': {
        path: '/partners/guide/security',
      },
    },
  ],
  [PartnersGuideRestrictions, { name: 'partners_guide_restrictions', category: 'partners.faq' }, {
      'en-GB': {
        path: '/partners/guide/restrictions',
      },
    },
  ],
  [PartnersGuideLegal, { name: 'partners_guide_legal', category: 'partners.faq' }, {
      'en-GB': {
        path: '/partners/guide/legal',
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
      en: {
        path: '/faq/merchants',
      },
      fr: {
        path: '/faq/commercant',
      },
      de: {
        path: '/faq/haendler',
      },
    },
  ],
  [FaqMerchantsHowItWorks, { name: 'faq_merchants_how_it_works', category: 'faq.merchants' }, {
      en: {
        path: '/faq/merchants/how-it-works',
      },
      fr: {
        path: '/faq/commercant/fonctionnement',
      },
      de: {
        path: '/faq/haendler/wie-es-funktioniert',
      },
    },
  ],
  [FaqMerchantsSigningUp, { name: 'faq_merchants_signing_up', category: 'faq.merchants' }, {
      en: {
        path: '/faq/merchants/signing-up',
      },
      fr: {
        path: '/faq/commercant/inscription',
      },
      de: {
        path: '/faq/haendler/anmelden',
      },
    },
  ],
  [FaqMerchantsDirectDebit, { name: 'faq_merchants_direct_debit', category: 'faq.merchants' }, {
      en: {
        path: '/faq/merchants/direct-debit',
      },
      fr: {
        path: '/faq/commercant/prelevement-bancaire',
      },
      de: {
        path: '/faq/haendler/lastschriftverfahren',
      },
    },
  ],
  [FaqMerchantsSecurity, { name: 'faq_merchants_security', category: 'faq.merchants' }, {
      en: {
        path: '/faq/merchants/security',
      },
      fr: {
        path: '/faq/commercant/securite',
      },
      de: {
        path: '/faq/haendler/sicherheit',
      },
    },
  ],
  [FaqMerchantsCustomerExperience, { name: 'faq_merchants_customer_experience', category: 'faq.merchants' }, {
      en: {
        path: '/faq/merchants/customer-experience',
      },
      fr: {
        path: '/faq/commercant/consommateur',
      },
      de: {
        path: '/faq/haendler/kunden-erlebnis',
      },
    },
  ],
  [FaqMerchantsInternationalPayments, { name: 'faq_merchants_international_payments', category: 'faq.merchants' }, {
      en: {
        path: '/faq/merchants/international-payments',
      },
      fr: {
        path: '/faq/commercant/international',
      },
      de: {
        path: '/faq/haendler/international',
      },
    },
  ],
  [FaqMerchantsDeveloperApi, { name: 'faq_merchants_developer_api', category: 'faq.merchants' }, {
      en: {
        path: '/faq/merchants/developer-api',
      },
      fr: {
        path: '/faq/commercant/api-developpeurs',
      },
      de: {
        path: '/faq/haendler/entwickler-api',
      },
    },
  ],
  [FaqMerchantsPartners, { name: 'faq_merchants_partners', category: 'faq.merchants' }, {
      'en-GB': {
        path: '/faq/merchants/partners',
      },
      fr: {
        path: '/faq/commercant/partenaires',
      },
      de: {
        path: '/faq/haendler/partner',
      },
    },
  ],
  [FaqMerchantsReferrals, { name: 'faq_merchants_referrals', category: 'faq.merchants' }, {
      'en-GB': {
        path: '/faq/merchants/referrals',
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
      fr: {
        path: '/faq/tableau-de-bord-pro',
      },
      de: {
        path: '/faq/dashboard',
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
      fr: {
        path: '/faq/tableau-de-bord-pro/creation-mandat',
      },
      de: {
        path: '/faq/dashboard/mandate-erstellen',
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
      fr: {
        path: '/faq/tableau-de-bord-pro/export-mandat',
      },
      de: {
        path: '/faq/dashboard/mandate-exportieren',
      },
    },
  ],
  [FaqProDashboardPaymentCreation, { name: 'faq_pro_dashboard_payment_creation', category: 'faq.pro_dashboard' }, {
      'en-IE': {
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
    },
  ],
  [FaqProDashboardSubscriptionCreation, { name: 'faq_pro_dashboard_subscription_creation', category: 'faq.pro_dashboard' }, {
      'en-IE': {
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
    },
  ],
  [FaqProDashboardPaymentTracking, { name: 'faq_pro_dashboard_payment_tracking', category: 'faq.pro_dashboard' }, {
      'en-IE': {
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
    },
  ],
  [FaqProDashboardPaymentRefund, { name: 'faq_pro_dashboard_payment_refund', category: 'faq.pro_dashboard' }, {
      'en-IE': {
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
    },
  ],
  [FaqProDashboardPaymentRetry, { name: 'faq_pro_dashboard_payment_retry', category: 'faq.pro_dashboard' }, {
      'en-IE': {
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
    },
  ],
  [FaqProDashboardPayoutTracking, { name: 'faq_pro_dashboard_payout_tracking', category: 'faq.pro_dashboard' }, {
      'en-IE': {
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
    },
  ],
  [Stories, { name: 'stories' }, {
      'en-GB': {
        path: '/stories',
      },
      fr: {
        path: '/references',
      },
    },
  ],
  [StoriesHasBeanCoffee, { name: 'stories_has_bean_coffee', category: 'stories' }, {
      'en-GB': {
        path: '/stories/has-bean-coffee',
      },
    },
  ],
  [StoriesBlueskyBusiness, { name: 'stories_bluesky_business', category: 'stories' }, {
      'en-GB': {
        path: '/stories/bluesky-business',
      },
    },
  ],
  [StoriesCrowdCube, { name: 'stories_crowdcube', category: 'stories' }, {
      'en-GB': {
        path: '/stories/crowdcube',
      },
    },
  ],
  [StoriesMomentum, { name: 'stories_momentum', category: 'stories' }, {
      'en-GB': {
        path: '/stories/momentum',
      },
    },
  ],
  [StoriesRockChoir, { name: 'stories_rock_choir', category: 'stories' }, {
      'en-GB': {
        path: '/stories/rock-choir',
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
    },
  ],
  [StoriesGreaterAnglia, { name: 'stories_greater_anglia', category: 'stories' }, {
      'en-GB': {
        path: '/stories/greater-anglia',
      },
    },
  ],
  [Stories1001Menus, { name: 'stories_1001_menus', category: 'stories' }, {
      fr: {
        path: '/references/1001-menus',
      },
    },
  ],
  [StoriesTheFrenchTalents, { name: 'stories_the_french_talents', category: 'stories' }, {
      fr: {
        path: '/references/the-french-talents',
      },
    },
  ],
]);
