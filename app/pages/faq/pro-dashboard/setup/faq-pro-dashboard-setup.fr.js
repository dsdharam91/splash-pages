import React from 'react';
import Link from '../../../../components/link/link';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';
import IfLocale from '../../../../components/if-locale/if-locale';

export default class FaqProDashboardFr extends React.Component {
  displayName = 'FaqProDashboardFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Mise en place</h2>
        <p className='para'>
          GoCardless vous permet d’obtenir des mandats de prélèvement SEPA et de prendre vos
          paiement récurrents sans la moindre intégration technique, directement à partir
          de notre tableau de bord en ligne.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Démarrage
        </h3>
        <IfLocale hasInstantSignup>
          <p className='para'>
            Vous pouvez <Href to='signup.path' target='_blank'>
            créer un compte GoCardless
            </Href> et commencer à prendre des prélèvements instantanément.
              Il vous suffira d'ajouter les documents authentifiant votre identité pour que nous vous reversions les fonds.
          </p>
        </IfLocale>
        <IfLocale hasInstantSignup={false}>
          <p className='para'>
            Vous pouvez <a href='https://manage-sandbox.gocardless.com/signup' target='_blank'
            className='u-link-color-p u-text-underline'>créer un compte test</a> gratuitement.
          </p>
          <p className='para'>
            Afin de prélever des paiements réels, il suffit d'envoyer à <Href to='email' /> les
            documents suivants :
          </p>
          <ul className='list'>
            <li>Confirmer que vous avez lu et accepté nos
            <Link to='legal_merchants'> Conditions Générales d'Utilisation</Link></li>
            <li>Envoyer un RIB au nom de votre société</li>
            <li>Envoyer une copie de la carte d’identité ou du passeport de votre gérant et de chaque individu
            qui détient plus de 25% du capital de votre société</li>
          </ul>
          <p className='para'>
            Une fois ces documents fournis, nous vous créerons un compte (typiquement sous 24 heures) et vous
            pourrez commencer à utiliser GoCardless pour vos clients, sans avoir besoin de passer par votre banque
            ou contrat VAD.
          </p>
          <p className='para'>
            Veuillez noter que ce que vous créez dans votre compte test ne sera pas transmis au compte en production.
          </p>
        </IfLocale>
        <p className='para'>
          Si vous souhaitez migrer des clients avec lesquels vous avez déjà un mandat de prélèvement bancaire,
          veuillez nous contacter à <Href to='email' />.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Préparation du compte
        </h3>
        <p className='para'>
          Vous pouvez personnaliser votre compte dans la <a href='https://manage.gocardless.com/settings/company'
          target='_blank' className='u-link-color-p u-text-underline'>section Company Info</a> :
        </p>
        <ul className='list'>
          <li>Ajouter un logo qui sera utilisé sur votre page de mandat</li>
          <li>Ajouter un compte en banque, sur lequel nous verserons vos paiements</li>
        </ul>

      </Translation>
    );
  }
}
