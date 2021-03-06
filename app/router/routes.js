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
import LandingPageJAndSProducts from '../pages/payments-by-direct-debit/j-and-s-products';

import Accountants from '../pages/industries/accountants';
import Charities from '../pages/industries/charities';
import DigitalAgencies from '../pages/industries/digital-agencies';
import Education from '../pages/industries/education';
import Finance from '../pages/industries/finance';
import LocalGovernment from '../pages/industries/local-government';
import SaaS from '../pages/industries/saas';
import Telcos from '../pages/industries/telcos';
import Utilities from '../pages/industries/utilities';

import Europe from '../pages/europe/europe';
import ExampleCheckout from '../pages/example-checkout/example-checkout';
import CustomerOffers from '../pages/customer-offers/customer-offers';

import About from '../pages/about/about';
import Team from '../pages/about/team/team';
import Press from '../pages/about/press/press';
import PressHiroki from '../pages/about/press/press-hiroki';

import Jobs from '../pages/about/jobs/jobs';
import SoftwareEngineer from '../pages/about/jobs/positions/software-engineer';
import DevopsEngineer from '../pages/about/jobs/positions/devops-engineer.js';
import DataEngineer from '../pages/about/jobs/positions/data-engineer';
import LeadDataEngineer from '../pages/about/jobs/positions/lead-data-engineer.js';
import EngineeringManager from '../pages/about/jobs/positions/engineering-manager.js';
import ProductManager from '../pages/about/jobs/positions/product-manager.js';
import HeadofSalesFrance from '../pages/about/jobs/positions/head-of-sales-france';
import SalesDevelopmentRepresentativeInbound from '../pages/about/jobs/positions/sales-development-representative-inbound.js';
import SalesDevelopmentRepresentativeOutbound from '../pages/about/jobs/positions/sales-development-representative-outbound.js';
import CustomerSuccessManagerFrance from '../pages/about/jobs/positions/customer-success-france.js';
import CustomerSuccessManager from '../pages/about/jobs/positions/customer-success-manager.js';
import HeadofOperations from '../pages/about/jobs/positions/head-of-operations';
import RiskComplianceAnalyst from '../pages/about/jobs/positions/risk-compliance-analyst.js';
import EngineeringInternships from '../pages/about/jobs/positions/engineering-internships.js';
import CustomerSupport from '../pages/about/jobs/positions/customer-support.js';
import DeveloperSupportLead from '../pages/about/jobs/positions/developer-support-lead.js';
import PartnershipsDevelopmentManager from '../pages/about/jobs/positions/partnerships-development.js';
import PartnershipsSuccessManager from '../pages/about/jobs/positions/partnerships-success.js';
import MarketAnalystInternship from '../pages/about/jobs/positions/market-analyst.js';
import HeadofEnterpriseSales from '../pages/about/jobs/positions/head-enterprise-sales.js';
import PartnershipMarketingManager from '../pages/about/jobs/positions/partnership-marketing-manager.js';
import MarketingManagerAccountants from '../pages/about/jobs/positions/marketing-manager-accountants.js';
import ProductMarketingExecuitve from '../pages/about/jobs/positions/product-marketing-exec.js';
import SolutionEngineer from '../pages/about/jobs/positions/solution-engineer.js';
import DeveloperSupport from '../pages/about/jobs/positions/developer-support.js';

import LegalIntroduction from '../pages/legal/introduction/legal-introduction';
import LegalCustomers from '../pages/legal/customers/legal-customers';
import LegalMerchants from '../pages/legal/merchants/legal-merchants';
import LegalOldTermsIndex from '../pages/legal/old-terms/index/legal-old-terms-index';
import LegalOldRestrictions20140731 from '../pages/legal/old-terms/old-restrictions/2014-07-31/legal-old-restrictions-2014-07-31';
import LegalOldRestrictions20140919 from '../pages/legal/old-terms/old-restrictions/2014-09-19/legal-old-restrictions-2014-09-19';
import LegalOldRestrictions20160920 from '../pages/legal/old-terms/old-restrictions/2016-09-20/legal-old-restrictions-2016-09-20';
import LegalOldRestrictions20170103 from '../pages/legal/old-terms/old-restrictions/2017-01-03/legal-old-restrictions-2017-01-03';
import LegalOldMerchantAgreements20160920 from '../pages/legal/old-terms/old-merchant-agreements/2016-09-20/legal-old-merchant-agreements-2016-09-20';
import LegalOldPartnerAgreements20160920 from '../pages/legal/old-terms/old-partner-agreements/2016-09-20/legal-old-partner-agreements-2016-09-20';
import LegalOldPrivacyPolicies20160923 from '../pages/legal/old-terms/old-privacy-policies/2016-09-23/legal-old-privacy-policy-2016-09-23';
import LegalPartners from '../pages/legal/partners/legal-partners';
import LegalPrivacy from '../pages/legal/privacy/legal-privacy';
import LegalRestrictions from '../pages/legal/restrictions/legal-restrictions';
import LegalPaymentTimings from '../pages/legal/payment-timings/legal-payment-timings';

import PartnerWithUs from '../pages/partner-with-us/partner-with-us';

import Partners from '../pages/partners/partners.en';
import PartnersBillin from '../pages/partners/billin/partners-billin';
import PartnersClearBooks from '../pages/partners/clearbooks/partners-clearbooks';
import PartnersDebitoor from '../pages/partners/debitoor/partners-debitoor';
import PartnersFreeagent from '../pages/partners/freeagent/partners-freeagent';
import PartnersKashflow from '../pages/partners/kashflow/partners-kashflow';
import PartnersPitchero from '../pages/partners/pitchero/partners-pitchero';
import PartnersQuickbooks from '../pages/partners/quickbooks/partners-quickbooks';
import PartnersSage from '../pages/partners/sage/partners-sage';
import PartnersXero from '../pages/partners/xero/partners-xero';
import PartnersZuora from '../pages/partners/zuora/partners-zuora';

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

import NewToDirectDebit from '../pages/new-to-direct-debit/new-to-direct-debit';
import ExistingDirectDebitUser from '../pages/existing-direct-debit-user/existing-direct-debit-user';
import SmallMediumBusinesses from '../pages/small-medium-businesses/small-medium-businesses';
import Developers from '../pages/developers/developers';
import DirectDebitApi from '../pages/direct-debit-api/direct-debit-api';

import Stories from '../pages/stories/stories';

import StoriesBoostCapital from '../pages/stories/stories/boost-capital';
import StoriesBulbEnergy from '../pages/stories/stories/bulb-energy';
import StoriesConnexin from '../pages/stories/stories/connexin';
import StoriesFdWorks from '../pages/stories/stories/fd-works';
import StoriesHasBeanCoffee from '../pages/stories/stories/has-bean-coffee';
import StoriesHotpodYoga from '../pages/stories/stories/hotpod-yoga';
import StoriesNutmeg from '../pages/stories/stories/nutmeg';
import StoriesPeterboroughCouncil from '../pages/stories/stories/peterborough-council';
import StoriesRAndWMedia from '../pages/stories/stories/randw-media';
import StoriesRockChoir from '../pages/stories/stories/rock-choir';
import StoriesLylesSutherland from '../pages/stories/stories/lyles-sutherland';
import StoriesSlmConnect from '../pages/stories/stories/slm-connect';
import StoriesSmartPension from '../pages/stories/stories/smart-pension';
import StoriesSoaringFalcon from '../pages/stories/stories/soaring-falcon';
import StoriesTeamUp from '../pages/stories/stories/team-up';
import StoriesWowCompany from '../pages/stories/stories/wow-company';
import StoriesYourParkingSpace from '../pages/stories/stories/your-parking-space';

import StoriesDigidom from '../pages/stories/stories/digidom.fr';
import StoriesHabitat from '../pages/stories/stories/habitat.fr';
import StoriesZenchef from '../pages/stories/stories/zenchef.fr';

import StoriesCrossfitOldenburg from '../pages/stories/stories/crossfit-oldenburg';
import StoriesGastrofix from '../pages/stories/stories/gastrofix';
import StoriesPicDrop from '../pages/stories/stories/picdrop';
import StoriesStudyClever from '../pages/stories/stories/study-clever';

import StoriesAcumbamail from '../pages/stories/stories/acumbamail.es';
import StoriesImpactHub from '../pages/stories/stories/impact-hub.es';
import StoriesMonras from '../pages/stories/stories/monras.es';

import StoriesBlueskyBusiness from '../pages/stories/stories/bluesky-business';
import StoriesSpencerHockey from '../pages/stories/stories/spencer-hockey';
import StoriesFoundationOfHearts from '../pages/stories/stories/foundation-of-hearts';
import StoriesGreaterAnglia from '../pages/stories/stories/greater-anglia';

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
      'fr-FR': {
        path: '/paiements-recurrents',
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
  [Education, { name: 'education', category: 'industries' }, {
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
  [NewToDirectDebit, { name: 'new_to_direct_debit'}, {
      'en-GB': {
        path: '/new-to-direct-debit',
      },
    },
  ],
  [ExistingDirectDebitUser, { name: 'existing_direct_debit_user'}, {
      'en-GB': {
        path: '/better-direct-debit',
      },
    },
  ],
  [SmallMediumBusinesses, { name: 'small_medium_businesses'}, {
      'en-GB': {
        path: '/features',
      },
    },
  ],
  [Developers, { name: 'developers'}, {
      'en-GB': {
        path: '/developers',
      },
      fr: {
        path: '/developpeurs',
      },
    },
  ],
  [DirectDebitApi, { name: 'direct_debit_api'}, {
      'en-GB': {
        path: '/direct-debit-api',
      },
      fr: {
        path: '/api-prelevement-automatique',
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
  [CustomerOffers, { name: 'customer_offers' }, {
      'en-GB': {
        path: '/customer-offers',
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
      fr: {
        path: '/a-propos/presse',
      },
      de: {
        path: '/ueber-uns/presse',
      },
      es: {
        path: '/sobre-nosotros/prensa',
      },
    },
  ],
  [PressHiroki, { name: 'press_hiroki' }, {
      en: {
        path: '/about/press/hiroki',
      },
    },
  ],
  [Jobs, { name: 'jobs' }, {
      en: {
        path: '/about/jobs',
      },
      fr: {
        path: '/a-propos/recrutement',
      },
    },
  ],
  [DataEngineer, { name: 'jobs_data_engineer', category: 'jobs.engineering' }, {
      en: {
        path: '/about/jobs/data-engineer',
      },
    },
  ],
  [LeadDataEngineer, { name: 'jobs_lead_data_engineer', category: 'jobs.engineering' }, {
      en: {
        path: '/about/jobs/lead_data_engineer',
      },
    },
  ],
  [DevopsEngineer, { name: 'jobs_devops_engineer', category: 'jobs.engineering' }, {
      en: {
        path: '/about/jobs/devops-engineer',
      },
    },
  ],
  [EngineeringManager, { name: 'jobs_engineering_manager', category: 'jobs.engineering' }, {
      en: {
        path: '/about/jobs/engineering-manager',
      },
    },
  ],
  [EngineeringInternships, { name: 'jobs_engineering_internships', category: 'jobs.engineering' }, {
      en: {
        path: '/about/jobs/engineering-internships',
      },
    },
  ],
  [SoftwareEngineer, { name: 'jobs_software_engineer', category: 'jobs.engineering' }, {
      en: {
        path: '/about/jobs/software-engineer',
      },
    },
  ],
  [ProductManager, { name: 'jobs_product_manager', category: 'jobs.product' }, {
      en: {
        path: '/about/jobs/product-manager',
      },
    },
  ],
  [HeadofSalesFrance, { name: 'jobs_head_of_sales_france', category: 'jobs.sales' }, {
      en: {
        path: '/about/jobs/head-of-sales-france',
      },
      fr: {
        path: '/a-propos/recrutement/head-of-sales-france',
      },
    },
  ],
  [SalesDevelopmentRepresentativeInbound, { name: 'jobs_sales_development_representative_inbound', category: 'jobs.sales' }, {
      en: {
        path: '/about/jobs/sales-development-representative-inbound',
      },
    },
  ],
  [SalesDevelopmentRepresentativeOutbound, { name: 'jobs_sales_development_representative_outbound', category: 'jobs.sales' }, {
      en: {
        path: '/about/jobs/sales-development-representative-outbound',
      },
    },
  ],
  [CustomerSuccessManager, { name: 'jobs_customer_success_manager', category: 'jobs.sales' }, {
      en: {
        path: '/about/jobs/customer-success-manager',
      },
    },
  ],
      [CustomerSuccessManagerFrance, { name: 'jobs_customer_success_manager_france', category: 'jobs.sales' }, {
          en: {
            path: '/about/jobs/customer-success-manager-france',
          },
        },
  ],
  [HeadofOperations, { name: 'jobs_head_of_operations', category: 'jobs.operations' }, {
      en: {
        path: '/about/jobs/head-of-operations',
      },
    },
  ],
  [RiskComplianceAnalyst, { name: 'jobs_risk_compliance_analyst', category: 'jobs.operations' }, {
      en: {
        path: '/about/jobs/risk-compliance-analyst',
      },
    },
  ],
  [CustomerSupport, { name: 'jobs_customer_support', category: 'jobs.operations' }, {
      en: {
        path: '/about/jobs/customer-support',
      },
    },
  ],
  [DeveloperSupport, { name: 'jobs_developer_support', category: 'jobs.operations' }, {
      en: {
        path: '/about/jobs/developer-support',
      },
    },
  ],
  [DeveloperSupportLead, { name: 'jobs_developer_support_lead', category: 'jobs.operations' }, {
      en: {
        path: '/about/jobs/developer-support-lead',
      },
    },
  ],
  [PartnershipsDevelopmentManager, { name: 'jobs_partnerships_development_manager', category: 'jobs.sales' }, {
      en: {
        path: '/about/jobs/parternships-development-manager',
      },
    },
  ],
  [PartnershipsSuccessManager, { name: 'jobs_partnerships_success_manager', category: 'jobs.sales' }, {
      en: {
        path: '/about/jobs/parternships-success-manager',
      },
    },
  ],
  [MarketAnalystInternship, { name: 'jobs_market_analyst_internship', category: 'jobs.sales' }, {
      en: {
        path: '/about/jobs/market-analyst-internship',
      },
    },
  ],
  [HeadofEnterpriseSales, { name: 'jobs_head_of_enterprise_sales', category: 'jobs.sales' }, {
      en: {
        path: '/about/jobs/head-of-enterprise-sales',
      },
    },
  ],
  [PartnershipMarketingManager, { name: 'jobs_partnership_marketing_manager', category: 'jobs.marketing' }, {
      en: {
        path: '/about/jobs/partnership-marketing-manager',
      },
    },
  ],
  [MarketingManagerAccountants, { name: 'jobs_marketing_manager_accountants', category: 'jobs.marketing' }, {
      en: {
        path: '/about/jobs/marketing-manager-accountants',
      },
    },
  ],
  [ProductMarketingExecuitve, { name: 'jobs_product_marketing_executive', category: 'jobs.marketing' }, {
      en: {
        path: '/about/jobs/product-marketing-exectuive',
      },
    },
  ],
  [SolutionEngineer, { name: 'jobs_solutions_engineer', category: 'jobs.sales' }, {
      en: {
        path: '/about/jobs/solution-engineer',
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
  [LegalOldTermsIndex, { name: 'legal_old_terms' }, {
      'en-GB': {
        path: '/legal/old-terms',
      },
      'en-EU': {
        path: '/legal/old-terms',
      },
      'en-IE': {
        path: '/legal/old-terms',
      },
      'en-SE': {
        path: '/legal/old-terms',
      },
    },
  ],
  [LegalOldRestrictions20140731, { name: 'legal_old_restrictions_2014_07_31' }, {
      'en-GB': {
        path: '/legal/old-terms/old-restrictions/2014-07-31',
      },
      'en-EU': {
        path: '/legal/old-terms/old-restrictions/2014-07-31',
      },
      'en-IE': {
        path: '/legal/old-terms/old-restrictions/2014-07-31',
      },
      'en-SE': {
        path: '/legal/old-terms/old-restrictions/2014-07-31',
      },
    },
  ],
  [LegalOldRestrictions20140919, { name: 'legal_old_restrictions_2014_09_19' }, {
      'en-GB': {
        path: '/legal/old-terms/old-restrictions/2014-09-19',
      },
      'en-EU': {
        path: '/legal/old-terms/old-restrictions/2014-09-19',
      },
      'en-IE': {
        path: '/legal/old-terms/old-restrictions/2014-09-19',
      },
      'en-SE': {
        path: '/legal/old-terms/old-restrictions/2014-09-19',
      },
    },
  ],
  [LegalOldRestrictions20160920, { name: 'legal_old_restrictions_2016_09_20' }, {
      'en-GB': {
        path: '/legal/old-terms/old-restrictions/2016-09-20',
      },
      'en-EU': {
        path: '/legal/old-terms/old-restrictions/2016-09-20',
      },
      'en-IE': {
        path: '/legal/old-terms/old-restrictions/2016-09-20',
      },
      'en-SE': {
        path: '/legal/old-terms/old-restrictions/2016-09-20',
      },
    },
  ],
  [LegalOldRestrictions20170103, { name: 'legal_old_restrictions_2017_01_03' }, {
      'en-GB': {
        path: '/legal/old-terms/old-restrictions/2017-01-03',
      },
      'en-EU': {
        path: '/legal/old-terms/old-restrictions/2017-01-03',
      },
      'en-IE': {
        path: '/legal/old-terms/old-restrictions/2017-01-03',
      },
      'en-SE': {
        path: '/legal/old-terms/old-restrictions/2017-01-03',
      },
    },
  ],
  [LegalOldMerchantAgreements20160920, { name: 'legal_old_merchant_agreements_2016_09_20' }, {
      'en-GB': {
        path: '/legal/old-terms/old-merchant-agreements/2016-09-20',
      },
      'en-EU': {
        path: '/legal/old-terms/old-merchant-agreements/2016-09-20',
      },
      'en-IE': {
        path: '/legal/old-terms/old-merchant-agreements/2016-09-20',
      },
      'en-SE': {
        path: '/legal/old-terms/old-merchant-agreements/2016-09-20',
      },
    },
  ],
  [LegalOldPartnerAgreements20160920, { name: 'legal_old_partner_agreements_2016_09_20' }, {
      'en-GB': {
        path: '/legal/old-terms/old-partner-agreements/2016-09-20',
      },
      'en-EU': {
        path: '/legal/old-terms/old-partner-agreements/2016-09-20',
      },
      'en-IE': {
        path: '/legal/old-terms/old-partner-agreements/2016-09-20',
      },
      'en-SE': {
        path: '/legal/old-terms/old-partner-agreements/2016-09-20',
      },
    },
  ],
  [LegalOldPrivacyPolicies20160923, { name: 'legal_old_privacy_policies_2016_09_23' }, {
      'en-GB': {
        path: '/legal/old-terms/old-privacy-policies/2016-09-23',
      },
      'en-EU': {
        path: '/legal/old-terms/old-privacy-policies/2016-09-23',
      },
      'en-IE': {
        path: '/legal/old-terms/old-privacy-policies/2016-09-23',
      },
      'en-SE': {
        path: '/legal/old-terms/old-privacy-policies/2016-09-23',
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
  [PartnerWithUs, { name: 'partner_with_us' }, {
      'en-GB': {
        path: '/partner-with-us',
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
  [PartnersDebitoor, { name: 'partners_debitoor' }, {
      de: {
        path: '/partner/debitoor',
      },
      es: {
        path: '/asociados/debitoor',
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
  [PartnersZuora, { name: 'partners_zuora' }, {
      'en-GB': {
        path: '/zuora',
      },
    },
  ],
  [PartnersQuickbooks, { name: 'partners_quickbooks' }, {
      'en-GB': {
        path: '/quickbooks',
      },
    },
  ],
  [PartnersBillin, { name: 'partners_billin' }, {
      es: {
        path: '/asociados/billin',
      },
    },
  ],
  [Partners, { name: 'partners_accounting' }, {
      'en-GB': {
        path: '/partners/accounting',
      },
    },
  ],
  [Partners, { name: 'partners_charities' }, {
      'en-GB': {
        path: '/partners/charities',
      },
    },
  ],
  [Partners, { name: 'partners_crm' }, {
      'en-GB': {
        path: '/partners/crm',
      },
    },
  ],
  [Partners, { name: 'partners_ecommerce' }, {
      'en-GB': {
        path: '/partners/ecommerce',
      },
    },
  ],
  [Partners, { name: 'partners_education' }, {
      'en-GB': {
        path: '/partners/education',
      },
    },
  ],
  [Partners, { name: 'partners_health' }, {
      'en-GB': {
        path: '/partners/health',
      },
    },
  ],
  [Partners, { name: 'partners_media' }, {
      'en-GB': {
        path: '/partners/media',
      },
    },
  ],
  [Partners, { name: 'partners_membership' }, {
      'en-GB': {
        path: '/partners/membership',
      },
    },
  ],
  [Partners, { name: 'partners_new' }, {
      'en-GB': {
        path: '/partners/new',
      },
    },
  ],
  [Partners, { name: 'partners_other' }, {
      'en-GB': {
        path: '/partners/other',
      },
    },
  ],
  [Partners, { name: 'partners_subscription' }, {
      'en-GB': {
        path: '/partners/subscription',
      },
    },
  ],
  [Partners, { name: 'partners_utilities' }, {
      'en-GB': {
        path: '/partners/utilities',
      },
    },
  ],
  [Partners, { name: 'partners' }, {
      'en-GB': {
        path: '/partners/?:category?', // Takes optional `category` param
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
        path: '/temoignages',
      },
      de: {
        path: '/kundenstimmen',
      },
      es: {
        path: '/referencias',
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
  [StoriesPeterboroughCouncil, { name: 'stories_peterborough_council', category: 'stories' }, {
      'en-GB': {
        path: '/stories/peterborough-council',
      },
    },
  ],
  [StoriesRAndWMedia, { name: 'stories_randw_media', category: 'stories' }, {
      'en-GB': {
        path: '/stories/randw-media',
      },
    },
  ],
  [StoriesRockChoir, { name: 'stories_rock_choir', category: 'stories' }, {
      'en-GB': {
        path: '/stories/rock-choir',
      },
    },
  ],
  [StoriesSlmConnect, { name: 'stories_slm_connect', category: 'stories' }, {
      'en-GB': {
        path: '/stories/slm-connect',
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
  [StoriesTeamUp, { name: 'stories_teamup', category: 'stories' }, {
      'en-GB': {
        path: '/stories/teamup',
      },
    },
  ],
  [StoriesWowCompany, { name: 'stories_wow_company', category: 'stories' }, {
      'en-GB': {
        path: '/stories/wow-company',

      },
    },
  ],
  [StoriesYourParkingSpace, { name: 'stories_your_parking_space', category: 'stories' }, {
      'en-GB': {
        path: '/stories/your-parking-space',
      },
    },
  ],

  // French Case Studies
  [StoriesDigidom, { name: 'stories_digidom', category: 'stories' }, {
      fr: {
        path: '/temoignages/digidom',
      },
    },
  ],
  [StoriesHabitat, { name: 'stories_habitat', category: 'stories' }, {
      fr: {
        path: '/temoignages/habitat',
      },
    },
  ],
  [StoriesZenchef, { name: 'stories_zenchef', category: 'stories' }, {
      fr: {
        path: '/temoignages/zenchef',
      },
    },
  ],

  // German Case Studies
  [StoriesCrossfitOldenburg, { name: 'stories_crossfit_oldenburg', category: 'stories' }, {
      de: {
        path: '/kundenstimmen/crossfit-oldenburg',
      },
    },
  ],
  [StoriesGastrofix, { name: 'stories_gastrofix', category: 'stories' }, {
      de: {
        path: '/kundenstimmen/gastrofix',
      },
    },
  ],
  [StoriesPicDrop, { name: 'stories_picdrop', category: 'stories' }, {
      de: {
        path: '/kundenstimmen/picdrop',
      },
    },
  ],
  [StoriesStudyClever, { name: 'stories_study_clever', category: 'stories' }, {
      de: {
        path: '/kundenstimmen/study-clever',
      },
    },
  ],

  // Spanish Case Studies
  [StoriesAcumbamail, { name: 'stories_acumbamail', category: 'stories' }, {
      es: {
        path: '/referencias/acumbamail',
      },
    },
  ],
  [StoriesImpactHub, { name: 'stories_impact_hub', category: 'stories' }, {
      es: {
        path: '/referencias/impact-hub',
      },
    },
  ],
  [StoriesMonras, { name: 'stories_monras', category: 'stories' }, {
      es: {
        path: '/referencias/monras',
      },
    },
  ],

  // Legacy Case Studies
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
    },
  ],
  [StoriesGreaterAnglia, { name: 'stories_greater_anglia', category: 'stories' }, {
      'en-GB': {
        path: '/stories/greater-anglia',
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
