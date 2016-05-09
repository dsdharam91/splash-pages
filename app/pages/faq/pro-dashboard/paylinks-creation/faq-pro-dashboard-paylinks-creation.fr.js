import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardPaylinksCreationFr extends React.Component {
  displayName = 'FaqProDashboardPaylinksCreationFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Création de Paylinks</h2>
        <p className='para'>
          Les Paylinks vous permettent de recevoir un montant spécifique de vos clients,
          comme par exemple un paiement ponctuel de 10€. Il vous suffit de spécifier le montant
          puis d’envoyer le lien à vos clients, ou de l’ajouter sur votre site. En validant un Paylink,
          votre client accepte en même temps un mandat de prélèvement et
          un paiement ponctuel.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            Définir le Paylink
        </h3>

        <p className='para'>
          Dans notre <a href='https://manage.gocardless.com/payments' target='_blank'
          className='u-link-color-p u-text-underline'>section Paiements</a>, vous pouvez créer un Paylink que vous pourrez
          envoyer à tous vos clients.
        </p>

        <p className='para'>
          Vous pouvez ensuite paramétrer le Paylink :
        </p>
        <ul className='list'>
          <li>
            Le <strong>nom du Paylink</strong> vous permet d'identifier votre offre
          </li>
          <li>
            Le <strong>montant</strong> à prélever régulièrement
          </li>
          <li>
            En option avancée : <strong>une URL de redirection</strong>, pour que par exemple vos clients soient renvoyés
            vers votre site une fois le plan accepté
          </li>
        </ul>

        <img src='/images/faq/fr/create-paylink.png' />

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            Partager le Paylink
        </h3>

        <p className='para'>
          Une fois le Paylink créé, il vous faut le partager avec vos clients. Pour ce faire, cliquez sur le Plan, puis
          'Invite Customers'.
        </p>
        <p className='para'>
        Afin de valider le mandat et le paiement ponctuel, il vous faut obtenir le consentement du payeur.
         GoCardless vous permet de faire valider un Paylink en partagant un lien vers un mandat électronique
         sécurisé avec vos clients. Ce lien peut être envoyé par email ou inséré dans votre site web.
       </p>

        <img src='/images/faq/fr/add-to-paylink.png' />

        <p className='para'>
          Le lien permet à vos clients de fournir leurs coordonnées bancaires de manière sécurisée (dans la langue
          de leur choix). Cela vous donne l’autorisation de commencer à prélever directement de leur compte en banque
          le paiement ponctuel défini. Vos clients verront la page web ci-dessous:
        </p>

        <img src='/images/faq/fr/sepa-paylinks-page.png' />

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            Gérer les Paylinks
        </h3>

        <p className='para'>
          La liste de tous vos Paylinks est visible sur le <a href='https://manage.gocardless.com/payments/paylinks' target='_blank'
          className='u-link-color-p u-text-underline'>bouton Paylinks</a>.
        </p>

      </Translation>
    );
  }
}
