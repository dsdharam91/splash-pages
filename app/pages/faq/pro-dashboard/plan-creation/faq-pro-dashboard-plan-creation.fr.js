import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardPlanCreationFr extends React.Component {
  displayName = 'FaqProDashboardPlanCreationFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Création de plan</h2>
        <p className='para'>
          Les Plans vous permettent de prendre la même somme régulièrement à l’aide d’un simple lien.
          Il vous suffit de créer votre échéancier de paiement (par exemple 9,99€/mois pendant 12 mois)
          puis d’envoyer le lien à vos clients, ou de l’ajouter sur votre site. En validant un Plan,
          votre client accepte en même temps un mandat de prélèvement et
          un échéancier de paiements.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            Définir le Plan
        </h3>

        <p className='para'>
          Dans notre <a href='https://manage.gocardless.com/plans' target='_blank'
          className='u-link-color-p u-text-underline'>section Plan</a>, vous pouvez créer un lien que vous pourrez
          envoyer à tous vos clients.
        </p>

        <p className='para'>
          Vous pouvez ensuite paramétrer le Plan :
        </p>
        <ul className='list'>
          <li>
            Le <strong>nom du Plan</strong> vous permet d'identifier vos offres
          </li>
          <li>
            Le <strong>montant</strong> à prélever régulièrement
          </li>
          <li>
            La <strong>référence</strong> qui apparaîtra sur le relevé bancaire de votre client
          </li>
          <li>
            La <strong>fréquence</strong> : hebdomadaire, mensuelle, annuelle ou personalisée (par exemple tous les 3 mois)
          </li>
          <li>
            La <strong>date</strong> du premier prélèvement, soit au plus tôt, soit un jour spécifique dans le mois
          </li>
          <li>
            La <strong>durée de l’abonnement</strong> : jusqu’à annulation, une date spécifique ou un nombre de prélèvements
            définis (par exemple 12 paiements de 100€)
          </li>
          <li>
            En option avancée : <strong>une URL de redirection</strong>, pour que par exemple vos clients soient renvoyés
            vers votre site une fois le plan accepté
          </li>
        </ul>

        <img src='/images/faq/fr/create-plan.png' />

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            Partager le Plan
        </h3>

        <p className='para'>
          Une fois le Plan créé, il vous faut le partager avec vos clients. Pour ce faire, cliquez sur le Plan, puis
          'Invite Customers'.
        </p>
        <p className='para'>
        Afin de valider le mandat et l'échéancier, il vous faut obtenir le consentement du payeur.
         GoCardless vous permet de faire valider un Plan de deux façons:
        </p>
        <ul className='list'>
         <li>
         En partagant un lien vers un mandat électronique sécurisé avec vos clients. Ce lien peut être envoyé par email ou inséré dans votre site web.
         </li>
         <li>
         En envoyant un email à vos clients contenant ce même lien vers un mandat électronique sécurisé.
         </li>
        </ul>

        <img src='/images/faq/en/add-to-plan.png' />

        <p className='para'>
          Le lien permet à vos clients de fournir leurs coordonnées bancaires de manière sécurisée (dans la langue
          de leur choix). Cela vous donne l’autorisation de commencer à prélever directement de leur compte en banque l'échéancier
          donné. Vos clients verront la page web ci-dessous:
        </p>

        <img src='/images/faq/fr/sepa-plan-page.png' />

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            Gérer les Plans
        </h3>

        <p className='para'>
          La liste de tous vos Plans est visible dans la <a href='https://manage.gocardless.com/plans' target='_blank'
          className='u-link-color-p u-text-underline'>section éponyme</a>, et en cliquant sur le Plan, vous pouvez voir tous
          les clients qui sont en attente de validation (si vous avez utilisé l'email GoCardless)
          et les clients qui ont donné leur consentement au Plan.
        </p>

      </Translation>
    );
  }
}
