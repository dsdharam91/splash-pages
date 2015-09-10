import React from 'react';
import Translation from '../../components/translation/translation';
import Message from '../../components/message/message';

import TickIcon from '../../icons/svg/tick';
import ImproveCashflowIcon from '../../icons/svg/improve-cashflow';
import CustomerIcon from '../../icons/svg/customer';
import AddPartnerIcon from '../../icons/svg/add-partner';

import PropertyIcon from '../../icons/svg/property';
import CharityIcon from '../../icons/svg/charity';
import BanksIcon from '../../icons/svg/banks';
import ManageSoftwareIcon from '../../icons/svg/manage-software';
import MoneyFlowerIcon from '../../icons/svg/money-flower';
import NewIndustryIcon from '../../icons/svg/new-industry';
import WhiteLabelIcon from '../../icons/svg/white-label';
import MembershipIcon from '../../icons/svg/membership';

import Link from '../../components/link/link';
import StickyNav from '../../components/sticky-nav/sticky-nav';

export default class PartnersDe extends React.Component {
  displayName = 'PartnersDe'

  render() {
    return (
      <Translation locales='de'>
        <div className='page-hero page-hero--medium page-hero--partners u-size-full u-relative'>
          <div className='site-container page-hero__container u-text-center'>
            <div className='page-hero__inner'>
              <div className='page-hero__text'>
                <h1 className='u-text-heading u-color-invert u-text-light u-padding-Tm'>Helfen Sie Ihren
                Kunden, Zahlungen einzuziehen</h1>
                  <p className='u-text-heading-light u-text-m u-color-invert u-padding-Vs'>
                    Werden Sie Partner von GoCardless und erleichtern Sie Ihren Kunden, wiederkehrende Zahlungen in
                    Deutschland und anderen Ländern einzuziehen
                  </p>
               </div>
            </div>
          </div>
        </div>
        <StickyNav>
          <div className='site-container u-padding-Vm'>
            <ul className='u-pull-start u-margin-Txxs'>
              <li className='sticky-nav__item'>
                <a href='#features' id='track-sticky-nav-overview' className='sticky-nav__link'>
                  Funktionen
                </a>
              </li>
              <li className='sticky-nav__item'>
                <a href='#pricing' id='track-sticky-nav-pricing' className='sticky-nav__link'>
                  Preise
                </a>
              </li>
              <li className='sticky-nav__item'>
                <a href='#examples' id='track-sticky-nav-features' className='sticky-nav__link'>
                  Beispiele
                </a>
              </li>
            </ul>
            <Link to='contact_sales' query={{ s: 'partners' }}
            id='track-partners-sticky-nav-contact-sales'
            className={
              'sticky-nav__cta btn btn--small btn--hollow u-pull-end ' +
              'u-text-transform-none u-text-light u-text-xxs u-text-no-smoothing'
            }>
              <Message pointer='cta.pro' />
            </Link>
          </div>
        </StickyNav>
        <div className='section-scroll-target' id='features'>
          <div className='site-container u-padding-Vxxl u-text-center'>
            <div className='u-padding-Vxl'>
              <h2 className='u-text-heading u-color-heading u-text-light'>
                Warum sollten Sie Partner werden?
              </h2>
              <p className='u-size-2of3 u-center u-color-p u-padding-Ts'>
                Mit GoCardless profitieren Sie von den niedrigen Gebühren und geringen Fehlerquoten des
                Lastschriftverfahrens und sparen sich gleichzeitig den operativen Mehraufwand,
                der bei der Arbeit mit herkömmlichen Anbietern entsteht.
              </p>
              <div className='site-container u-padding-Txxl'>
                <div className='grid u-padding-Txl'>
                  <div className='grid__cell u-text-center u-size-1of3'>
                    <figure className='svg-icon u-center'>
                      <MembershipIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                      <MembershipIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                      Gewinnen Sie noch mehr Kunden
                    </h2>
                    <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                      Steigern Sie die Nachfrage und die Anzahl zahlender Kunden.
                    </p>
                  </div>
                  <div className='grid__cell u-text-center u-size-1of3'>
                    <figure className='svg-icon u-center'>
                      <TickIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                      <TickIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                      Stärken Sie Ihre Kundenbindung
                    </h2>
                    <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                      Bauen Sie langfristige Beziehungen zu Ihren Kunden auf, indem Sie sie mit Ihrer Lösung begeistern.
                    </p>
                  </div>
                  <div className='grid__cell u-text-center u-size-1of3'>
                    <figure className='svg-icon u-center'>
                      <ImproveCashflowIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                      <ImproveCashflowIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                      Schaffen Sie neue Einnahmequellen
                    </h2>
                    <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                      Empfehlen Sie uns an Ihre Kunden weiter und erhalten Sie eine Provision auf unsere Transaktionsgebühren.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='u-padding-Vxl'>
              <div className='grid__cell u-size-2of3 u-text-center'>
                <img src='/images/partners/partners-map@2x.jpg' />
              </div>
              <div className='grid__cell u-size-1of3 u-text-center partners-page__global-text'>
                <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing'>
                  Globale Reichweite für Ihre Kunden
                </h2>
                <p className='u-size-4of5 u-center u-color-p u-margin-Vxs'>
                  Ermöglichen Sie Ihren Kunden, Zahlungen aus immer mehr Ländern einzuziehen,
                  und das völlig ohne Mehraufwand.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='section-scroll-target' id='pricing'>
          <div className='u-text-center u-padding-Vxxl u-background-light-gray'>
            <div className='u-padding-Vxl'>
              <div className='u-size-2of3 u-center'>
                <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                  Ihre Kunden zahlen nur <Message pointer='pricing.per_transaction_amount_normal' />
                </h2>
                <p className='u-text-s u-color-p u-margin-Vxs'>
                  Keine Gebühren für Einrichtung oder fehlgeschlagene Lastschriften, keine monatlichen Gebühren.
                  <br/> Nur 1  % pro erfolgreicher Transaktion und höchstens <Message pointer="pricing.cost_cap" />.
                </p>
                <Link to='contact_sales'
                query={{ s: 'partners' }}
                id='track-partners-find-out-more'
                className='btn btn--hollow u-margin-Ts'>
                  Erfahren Sie mehr
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='section-scroll-target' id='examples'>
          <div className='u-padding-Vxxl'>
            <div className='site-container u-padding-Vxl'>
              <h2 className='u-text-heading u-color-heading u-text-light u-text-center u-padding-Bxxl u-margin-Bxl'>
                Branchen, die bereits auf GoCardless setzen
              </h2>
              <div className='grid__cell u-size-1of2 partners-page__accountancy-text'>
                <h2 className='u-text-heading u-color-heading u-text-light u-text-l u-margin-Bl'>
                  Buchführung
                </h2>
                <p className='u-text-s u-color-p u-margin-Bm'>
                  KashFlow hat GoCardless integriert, um seinen Kunden schnelle und einfache
                  Lastschrifteinzüge über deren KashFlow-Account zu ermöglichen.
                </p>
                <p className='u-text-s u-text-italic u-margin-Bxs partners-page__quote'>
                  “GoCardless-Nutzer sind uns länger treu und profitieren stärker von ihrem Abonnement.”
                </p>
                <p className='u-text-s u-margin-Bm u-color-p'>Duane Jackson, Gründer</p>
                <img src='/images/partners/kashflow-logo@2x.png' className='partners-page__partner-logo' />
              </div>
              <div className='grid__cell u-size-1of2 partners-page__illustration'>
                <img src='/images/partners/oauth-illustration@2x.png'
                className='partners-page__browser-image'/>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='grid__cell u-size-1of2 partners-page__illustration u-text-start'>
              <img src='/images/partners/take-payment-illustration@2x.png'
              className='partners-page__browser-image'/>
            </div>
            <div className='grid__cell u-size-1of2 partners-page__clubs-text'>
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l u-margin-Bl'>
                Clubs &amp; Vereine
              </h2>
              <p className='u-text-s u-color-p u-margin-Bm'>
                teamup wurde Partner von GoCardless, um Fitnessstudios und Clubs das Management
                von Mitgliedern und Abo-Zahlungen zu erleichtern.
              </p>
              <p className='u-text-s u-text-light u-text-italic u-margin-Bxs partners-page__quote'>
                “Unsere Kunden schätzen die Benutzerfreundlichkeit von GoCardless sehr. Als Partner haben sie uns
                in Großbritannien und Europa entscheidend zu mehr Wachstum verholfen.”
              </p>
              <p className='u-text-s u-margin-Bm u-color-p'>Matt Pegler, Mitgründer</p>
              <img src='/images/partners/teamup-logo@2x.png' className='partners-page__partner-logo' />
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-padding-Txxl'>
          <div className='site-container u-padding-Txl'>
            <div className='grid__cell u-size-1of2 partners-page__billing-text u-margin-Txs'>
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l u-margin-Bl'>
                Finanz- und Rechnungswesen
              </h2>
              <p className='u-text-s u-color-p u-margin-Bl'>
                In Sachen Lastschriftverfahren vertraut Zuora auf das Know-how von GoCardless und macht seinen Kunden
                so das Einziehen von Zahlungen auf der ganzen Welt möglich.
              </p>
              <p className='u-text-s u-text-light u-text-italic u-margin-Bxs partners-page__quote'>
                “Als einer der wichtigsten Partner von Zuora bietet GoCardless unseren Kunden ein unvergleichlich
                einfaches Lastschriftverfahren. Die Zuora-GoCardless-Lösung ermöglicht Abo-Anbietern in ganz Europa,
                ihren Kunden eine nahtlose Zahlungsabwicklung anzubieten.”
              </p>
              <p className='u-text-s u-margin-Bm u-color-p'>Tamsyn Attiwell, VP Global Services EMEA</p>
              <img src='/images/partners/zuora-logo@2x.png' className='partners-page__partner-logo' />
            </div>
            <div className='grid__cell u-size-1of2 partners-page__illustration u-text-center'>
              <img src='/images/partners/pay-via-mobile-illustration@2x.png'
              className='partners-page__mobile-image'/>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l  u-padding-Bxl'>
                Bei uns sind Sie in bester Gesellschaft
              </h2>
              <img src='/images/partners/partner-logos@2x.png' className='partners-page__partner-logo-group' />
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-padding-Vxxl u-text-center u-background-light-gray'>
          <div className='site-container u-padding-Vxl'>
            <h2 className='u-text-heading u-color-heading u-text-light u-padding-Bxl'>
              GoCardless – der ideale Partner für zahlreiche weitere Branchen
            </h2>
            <div className='grid integrations-grid'>
              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='partners-page__container u-border-gray u-shadow-small u-text-center
                u-padding-Vl u-padding-Hm u-background-white'>
                  <figure className='svg-icon svg-icon--small u-center'>
                    <PropertyIcon className='svg-icon__image svg-icon__image--small svg-icon__image--shadow u-fill-green' />
                    <PropertyIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Ts'>
                    Immobilien
                  </h2>
                  <p className='u-text-s u-color-p u-margin-Txs'>
                    Helfen Sie Ihren Maklern, Vermietern und Coworking Spaces beim Kassieren ihrer Mieten und Gebühren.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='partners-page__container u-border-gray u-shadow-small u-text-center
                u-padding-Vl u-padding-Hm u-background-white'>
                  <figure className='svg-icon svg-icon--small u-center'>
                    <ManageSoftwareIcon className='svg-icon__image svg-icon__image--small svg-icon__image--shadow u-fill-blue' />
                    <ManageSoftwareIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Ts'>
                    Softwareanbieter
                  </h2>
                  <p className='u-text-s u-color-p u-margin-Txs'>
                    Verhelfen Sie Ihren Kunden zu Wachstum, indem Sie auch die Zahlungsabwicklung anbieten.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='partners-page__container u-border-gray u-shadow-small u-text-center
                u-padding-Vl u-padding-Hm u-background-white'>
                  <figure className='svg-icon svg-icon--small u-center'>
                    <CharityIcon className='svg-icon__image svg-icon__image--small svg-icon__image--shadow u-fill-yellow' />
                    <CharityIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Ts'>
                    Wohltätige Organisationen
                  </h2>
                  <p className='u-text-s u-color-p u-margin-Txs'>
                    Helfen Sie wohltätigen Einrichtungen und Hilfsorganisationen beim Sammeln von Spenden.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='partners-page__container u-border-gray u-shadow-small u-text-center
                u-padding-Vl u-padding-Hm u-background-white'>
                  <figure className='svg-icon svg-icon--small u-center'>
                    <BanksIcon className='svg-icon__image svg-icon__image--small svg-icon__image--shadow u-fill-yellow' />
                    <BanksIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Ts'>
                    Banken
                  </h2>
                  <p className='u-text-s u-color-p u-margin-Txs'>
                    Empfehlen Sie uns an Ihre Kunden weiter oder nutzen Sie direkt unsere White-Label-Lösung.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='partners-page__container u-border-gray u-shadow-small u-text-center
                u-padding-Vl u-padding-Hm u-background-white'>
                  <figure className='svg-icon svg-icon--small u-center'>
                    <MoneyFlowerIcon className='svg-icon__image svg-icon__image--small svg-icon__image--shadow u-fill-green' />
                    <MoneyFlowerIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Ts'>
                    Zahlungsdienstleister
                  </h2>
                  <p className='u-text-s u-color-p u-margin-Txs'>
                    Nutzen Sie unseren Service und bieten Sie das Lastschriftverfahren in
                    Deutschland und Europa an.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='partners-page__container u-border-gray u-shadow-small u-text-center
                u-padding-Vl u-padding-Hm u-background-white'>
                  <figure className='svg-icon svg-icon--small u-center'>
                    <NewIndustryIcon className='svg-icon__image svg-icon__image--small svg-icon__image--shadow u-fill-blue' />
                    <NewIndustryIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Ts'>
                    Und noch viele mehr...
                  </h2>
                  <p className='u-text-s u-color-p u-margin-Txs'>
                    GoCardless kann zahlreichen Branchen auf der ganzen Welt Vorteile verschaffen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='section-scroll-target' id='options'>
          <div className='u-padding-Vxxl u-text-center'>
            <div className='site-container u-padding-Vxl'>
              <h2 className='u-text-heading u-color-heading u-text-light'>
                Welcher Typ Partner sind Sie?
              </h2>
              <div className='grid integrations-grid u-padding-Txl'>
                <div className='grid__cell u-text-center u-size-1of3'>
                  <figure className='svg-icon u-center'>
                    <CustomerIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                    <CustomerIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                    Affiliate-Programm
                  </h2>
                  <p className='u-text-s u-color-p u-size4of5 u-margin-Txs'>
                    Werben Sie neue GoCardless-Kunden und erhalten Sie Provisionen.
                  </p>
                </div>

                <div className='grid__cell u-text-center u-size-1of3'>
                  <figure className='svg-icon u-center'>
                    <AddPartnerIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                    <AddPartnerIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                    Integration in Ihre Lösung
                  </h2>
                  <p className='u-text-s u-color-p u-size4of5 u-margin-Txs'>
                    Machen Sie das Einziehen von wiederkehrenden Zahlungen für Ihre Kunden zum Kinderspiel.
                  </p>
                </div>

                <div className='grid__cell u-text-center u-size-1of3'>
                  <figure className='svg-icon u-center'>
                    <WhiteLabelIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                    <WhiteLabelIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                    White-Label-Partnerschaft
                  </h2>
                  <p className='u-text-s u-color-p u-size4of5 u-margin-Txs'>
                    Behalten Sie die volle Kontrolle über Zahlungen durch Integration unserer White-Label-Lösung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                Werden Sie noch heute Partner
              </h2>
              <p className='u-text-s u-color-p u-margin-Vxs'>
                Wenn Sie der Meinung sind, dass Ihr Unternehmen von einer Partnerschaft mit GoCardless profitieren könnte,
                kontaktieren Sie uns – wir beraten Sie gerne.
              </p>
              <Link to='contact_sales'
              query={{ s: 'partners' }}
              id='track-partners-contact-sales'
              className='btn btn--hollow u-margin-Ts'>
                <Message pointer='cta.pro' />
              </Link>
            </div>
            <hr className='u-size-1of2 u-center u-margin-Vxxl' />
            <p className='u-color-p'><strong>Möchten Sie uns lieber persönlich sprechen?</strong><br />
              Dann lassen Sie sich von einem unserer Experten beraten unter&thinsp;
              <Message pointer='phone_local' />.<br />
              Wir sind montags bis freitags von 10 bis 19 Uhr für Sie da.
            </p>
          </div>
        </div>
      </Translation>
    );
  }
}
