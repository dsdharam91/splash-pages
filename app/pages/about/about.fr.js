import React from 'react';
import Translation from '../../components/translation/translation';

export default class AboutFr extends React.Component {
  displayName = 'AboutFr'

  render() {
    return (
      <Translation locales='fr'>
        <div className='site-container u-padding-Vxxl'>
          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-padding-Txl'>
            A propos de GoCardless
          </h2>

         <div className='grid'>
            <div className='grid__cell u-size-2of3'>
              <p className='para'>
               Nous construisons un nouveau réseau de paiements pour Internet. Rejoignez-nous.
              </p>
              <p className='para'>
            Depuis que GoCardless a été créé en 2011, nous avons cherché à simplifier
        le prélèvement bancaire et à le rendre accessible aux entreprises qui
        n'auraient jamais pu l’utiliser auparavant. Nos volumes ont déjà atteint
<a href='http://www.forbes.com/sites/trevorclawson/2015/07/24/the-upward-march-of-fin-tech-gocardless-breaks-the-1bn-barrier/' target='_blank'>
        plus d'1 milliard de $ annuels</a> pour des milliers d'entreprises,
        et nous continuons d'avoir une très forte croissance.
              </p>
              <p className='para'>
Nous aidons un large éventail d'entreprises: des salles de gym
        et des espaces de co-working nous utilisent pour réduire leur
        temps d’administration; des startups en forte croissance comme
        Zenchef nous utilisent pour poursuivre leur croissance; des
        institutions établies comme TripAdvisor nous utilisent pour réduire
        considérablement leur taux d'échecs.
              </p>
              <p className='para'>
                <a href='https://medium.com/@hirokitakeuchi/a-new-payment-network-for-the-internet-11ffb4d7165b' target='_blank'> Nos ambitions vont au-delà</a>:
        nous voulons abattre les barrières afin que les
        entreprises puissent rapidement et simplement
        prélever un compte bancaire, n’importe où dans le monde.
              </p>
              <p className='para'>
            Ces 12 derniers mois, nous avons élargi notre offre pour les
        grandes entreprises, comme AXA Assistance et Habitat. Nous ajoutons
        d’autres systèmes de prélèvements en Europe afin de permettre aux
        multinationales d’encaisser des paiements partout en Europe.
            Nous nous sommes récemment lancés en France et en Allemagne et
        allons continuer notre expansion mondiale dans l'année à venir, avec
des lancements prévus en Espagne, aux Pays-Bas et au-delà, pour créer un réseau
mondial pour les paiements récurrents.
              </p>
              <p className='para'>
                Nous sommes basés à Londres et sommes soutenus par certains
des investisseurs européens les plus importants, comme Balderton Capital,
Accel Partners, Passion Capital et Y Combinator.
              </p>
            </div>

            <div className='grid__cell u-size-1of3'>
              <div className='u-margin-Txxl'>
                <img src='/images/press/publications-stacked.jpg' />
                <p className='u-text-xs u-color-dark-gray u-margin-Txxl'>
                  GoCardless est apparu à la télévision, sur des blogs
                  et site dans le monde entier.<br /><br />
                  Pour tout contact presse, merci de contacter <a href='mailto:press@gocardless.com'>notre équipe de relations presse</a>,
                  ou téléchargez notre <a href='https://www.dropbox.com/sh/sat8xsjntbf5mnh/AACn116IKyIWrNG7c8FnY0cYa?dl=0'>
                    dossier de presse
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
