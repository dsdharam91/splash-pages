import React from 'react';
import Href from '../../../components/href/href';
import InlineMessage from '../../../components/inline-message/inline-message';
import Page from '../../../components/page/page';
import Translation from '../../../components/translation/translation';
import AboutHeader from '../about-header';

let pressArticles = [
  {
    vendor: 'Startup Valley News',
    title: '5 Tipps für mehr Kundenzufriedenheit durch intelligentes Churnmanagement',
    link: 'http://www.startupvalley.news/de/kundenzufriedenheit-durch-intelligentes-churnmanagement/',
    date: '29.11.16',
    locales: ['de'],
  },
  {
    vendor: 'TechCrunch',
    title: 'GoCardless spies a glimmer of hope for UK fintech amid the Brexit gloom',
    link: 'https://techcrunch.com/2016/11/24/gocardless-spies-a-glimmer-of-hope-for-uk-fintech-amid-the-brexit-gloom/',
    date: '25.11.16',
    locales: ['en'],
  },
  {
    vendor: 'La Razón',
    title: 'La solución para que las empresas cobren a su clientes de manera rápida y sencilla',
    link: 'http://www.larazon.es/economia/la-solucion-para-que-las-empresas-cobren-a-su-clientes-de-manera-rapida-y-sencilla-AI13931010#.Ttt1QtBuNkEFPnm',
    date: '14.11.16',
    locales: ['es'],
  },
  {
    vendor: 'Gründerfreunde.de',
    title: 'GoCardless - Bezahlen geht auch ohne Karte',
    link: 'http://gruenderfreunde.de/2016/10/17/gocardless/',
    date: '17.10.16',
    locales: ['de'],
  },
  {
    vendor: 'CincoDías',
    title: 'El mercado europeo de ‘start-ups’ está que arde',
    link: 'http://cincodias.com/cincodias/2016/10/05/empresas/1475672955_890779.html',
    date: '05.10.16',
    locales: ['es'],
  },
  {
    vendor: 'CardRates',
    title: '$2B+ Direct Debit Payments Processed: How GoCardless is Building a Global Payments Platform',
    link: 'http://www.cardrates.com/news/gocardless-direct-debit-payments-platform/',
    date: '27.09.16',
    locales: ['en','fr','de'],
  },
  {
    vendor: 'Innovaspain',
    title: 'GoCardless, la alternativa online a la tarjeta de crédito',
    link: 'http://www.innovaspain.com/gocardless-la-alternativa-online-la-tarjeta-credito/',
    date: '19.09.16',
    locales: ['es'],
  },
  {
    vendor: 'Gründerszene',
    title: 'Europäische Fintech-Initiative gegründet',
    link: 'http://www.gruenderszene.de/allgemein/efa-european-fintech-alliance-berlin-gruendung',
    date: '12.07.16',
    locales: ['de'],
  },
  {
    vendor: 'FINTECHINSIDER',
    title: 'Wird Deutschland der nächste Fintech-Hub? 5 FinTech-Experten antworten',
    link: 'http://fintechinsider.de/deutschland-fintech-hub',
    date: '05.07.16',
    locales: ['de'],
  },
  {
    vendor: 't3n',
    title: 'Millionen für DoorDash, GoCardless und BigBasket',
    link: 'http://t3n.de/news/doordash-startup-news-691699/',
    date: '23.03.16',
    locales: ['de'],
  },
  {
    vendor: 'FinanzNachrichten.de',
    title: 'GoCardless: 13 Mio Dollar für Fintech Start-up in Serie-C',
    link: 'http://www.finanznachrichten.de/nachrichten-2016-03/36855943-gocardless-13-mio-dollar-fuer-fintech-start-up-in-serie-c-095.htm',
    date: '23.03.16',
    locales: ['de'],
  },
  {
    vendor: 'Foreign and Commonwealth Office',
    title: 'Why Global Britain is driving the fintech revolution',
    link: 'http://blogs.fco.gov.uk/guestpost/2016/08/31/why-global-britain-is-driving-the-fintech-revolution/',
    date: '31.08.16',
    locales: ['en'],
  },
  {
    vendor: 'The Guardian',
    title: 'Should UK fintech startups get into bed with the banks?',
    link: 'https://www.theguardian.com/media-network/2015/jun/30/fintech-startups-incubators-banks',
    date: '30.06.16',
    locales: ['en'],
  },
  {
    vendor: 'VentureBeat',
    title: 'UK entrepreneurs react to Brexit vote',
    link: 'http://venturebeat.com/2016/06/24/u-k-entrepreneurs-react-to-brexit-vote/',
    date: '24.06.16',
    locales: ['en'],
  },
  {
    vendor: 'Business Insider',
    title: '16 hot UK fintech startups that could one day be worth $1 billion',
    link: 'http://uk.businessinsider.com/uk-fintech-startups-1-billion-unicorns-2016-5',
    date: '08.06.16',
    locales: ['en'],
  },
  {
    vendor: 'TechCrunch',
    title: 'London fintech startup GoCardless raises $13M to bring recurring payments platform to more countries',
    link: 'http://techcrunch.com/2016/03/23/go-get-funding/',
    date: '23.03.16',
    locales: ['en','fr','de','es'],
  },
  {
    vendor: 'The Drum',
    title: 'How to get clients to pay you faster',
    link: 'http://www.thedrum.com/opinion/2016/03/09/how-get-clients-pay-you-faster',
    date: '09.03.16',
    locales: ['en','fr','de'],
  },
  {
    vendor: 'The Telegraph',
    title: 'Two-thirds of Europe’s young tech champions hail from UK',
    link: 'http://www.telegraph.co.uk/finance/businessclub/technology/12107371/Two-thirds-of-Europes-young-tech-champions-hail-from-UK.html',
    date: '19.01.16',
    locales: ['en'],
  },
  {
    vendor: 'Payment Week',
    date: '15.01.16',
    title: 'Thomas Cook Partners with GoCardless to Offer Direct Debit and Installment Payment Option',
    link: 'http://paymentweek.com/2016-1-15-thomas-cook-partners-with-gocardless-to-offer-direct-debit-and-installment-payment-option-9384/',
    locales: ['en','fr','de','es'],
  },
  {
    vendor: 'Forbes',
    title: 'The Upward March Of Fin Tech - GoCardless Breaks The $1B Barrier',
    link: 'http://www.forbes.com/sites/trevorclawson/2015/07/24/the-upward-march-of-fin-tech-gocardless-breaks-the-1bn-barrier/',
    date: '24.07.15',
    locales: ['en','fr','de','es'],
  },
  {
    vendor: 'Wired',
    title: 'How We Beat The Banks With Design',
    link: 'http://www.wired.co.uk/article/gocardless-hiroki-takeuchi-wired-money-2015',
    date: '08.07.15',
    locales: ['en','fr','de','es'],
  },
  {
    vendor: 'Tech.eu',
    title: 'Inside GoCardless: Meet the quiet Londoners who want to help you get paid faster (and more)',
    link: 'http://tech.eu/features/2699/gocardless-profile/',
    date: '16.09.14',
    locales: ['en','fr','de'],
  },
];

export default class Press extends React.Component {
  displayName = 'Press'

  render() {
    return (
      <Page>
        <AboutHeader />
          <div className='site-container u-padding-Vxxl'>
            <div className='grid u-padding-Vxl'>
              <div className='grid__cell u-size-1of4 u-padding-Rl'>
                <div className='u-margin-Bxl'>
                  <h3 className='u-text-heading-light u-text-m u-color-dark-gray u-margin-Bs'>
                    <InlineMessage pointer='press.contact.header' locale='en'>Contact</InlineMessage>
                  </h3>
                  <p className='u-color-dark-gray'>
                    <InlineMessage pointer='press.contact.text' locale='en'>For any press enquiries, please contact the</InlineMessage>
                    &nbsp;<Href to='press_email' pointer='press.contact.gocardless_pr_team' />.
                  </p>
                </div>
                <div>
                  <h3 className='u-text-heading-light u-text-m u-color-dark-gray u-margin-Bs'>
                    <InlineMessage pointer='press.resources.header' locale='en'>Resources</InlineMessage>
                  </h3>
                  <p className='u-color-dark-gray'>
                    <InlineMessage pointer='press.resources.text' locale='en'>Download logos, photos and other resources</InlineMessage>
                    &nbsp;<a href='https://www.dropbox.com/sh/4i9h27y8oaa3hcq/AABWlVX0T44UBFb4bh78Y5HVa?dl=0' target='_blank'>
                      <InlineMessage pointer='press.resources.here' locale='en'>here</InlineMessage>
                    </a>
                    <Translation locales='de'>
                       &nbsp;herunter
                     </Translation>
                    .
                  </p>
                </div>
              </div>
              <div className='grid__cell u-size-3of4'>
                <h2 className='u-text-heading u-color-dark-gray u-text-light u-margin-Bm'>
                  <InlineMessage pointer='press.articles.header' locale='en'>Articles</InlineMessage>
                </h2>
                { pressArticles.map((pressArticle) => {
                  return (
                    <Translation locales={ pressArticle.locales } key={ pressArticle.link }>
                      <div className='press-article grid u-margin-Bm'>
                        <span className='grid__cell u-size-2of8 u-color-dark-gray'>{ pressArticle.vendor }</span>
                        <a href={ pressArticle.link } className='grid__cell u-size-5of8'>{ pressArticle.title }</a>
                        <span className='grid__cell u-size-1of8 u-color-medium-gray u-text-end'>{ pressArticle.date }</span>
                      </div>
                    </Translation>
                  );
                }) }
              </div>
            </div>
          </div>
      </Page>
    );
  }
}
