import React from 'react';
import Translation from '../../components/translation/translation';

export default class AboutFr extends React.Component {
  displayName = 'AboutFr'

  render() {
    return (
      <Translation locales='fr'>
        <div className='site-container u-padding-Vxxl'>
          <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-padding-Txl'>
            A propos de GoCardless
          </h2>
          <div className='grid'>
            <div className='grid__cell u-size-2of3'>
              <p className='u-text-s u-color-p u-margin-Txxl u-size-5of6'>
                GoCardless est un des leaders européens du prélèvement bancaire.
                Nous collectons plus d'un milliard d'Euros chaque année pour plus de 10.000 entreprises et organisations dont le
                Guardian, Omni Capital, Funding Circle et Pieminister, avec une croissance annuelle de 600%.<br /><br />
                Nous nous sommes lancés en 2011 avec un seul objectif : rendre les prélèvements bancaires simples et accessibles à tous,
                instantanément et à bas coût.
                Les prélèvements bancaires étaient jusque-là réservés aux plus grandes entreprises et
                requéraient beaucoup d'efforts à gérer.
                Nous voulions changer cette situation et simplifier le prélèvement.
                <br /><br />
                Toute entreprise en France et en Europe peut désormais accéder au prélèvement bancaire grâce à
                notre tableau de bord et notre API moderne et facile d'utilisation, et bénéficier d'un
                mode de paiement économique avec un taux d'échec extrêmement bas.
                <br /><br />
                <span className='u-text-heavy u-color-heading'>Digne de confiance</span><br /><br />
                GoCardless est un Etablissement de Paiement Agréé, régulé par l’autorité britannique FCA (Financial Conduct Authority)
                et habilité à prélever des paiements à travers l’Union Européenne.
                Nous sommes financés par certains des plus importants investisseurs au monde
                dont Balderton Capital, Accel Partners, Passion Capital et Y-Combinator.
                Plus de 10.000 entreprises et organisations de toutes tailles utilisent GoCardless pour collecter des
                millions d'Euros tous les jours.
              </p>
            </div>
            <div className='grid__cell u-size-1of3'>
              <div className='u-margin-Txxl'>
                <img src='/images/press/publications-stacked.jpg' />
                <p className='u-text-s u-color-p u-margin-Txxl'>
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
