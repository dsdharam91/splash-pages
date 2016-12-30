import React from 'react';
import StoryPageNew from '../story-page-new';

export default class StoriesZenchef extends React.Component {
  displayName = 'StoriesZenchef'

  render() {
    return (
      <StoryPageNew
        title='Zenchef a augmenté son chiffre d’affaire de 90 000 € en automatisant les prélèvements via GoCardless'
        author='Julien Balmont'
        position='Co-Fondateur'
        company='Zenchef (ex-1001 Menus)'
        benefits='Gain de temps, réduction des impayés, augmentation du chiffre d&apos;affaire'
        bgimgUrl='url(/images/stories/story-images/zenchef/hero-zenchef.jpg)'
        sidebarLogoSrc='/images/stories/story-logos/zenchef.png'
        sidebarServices='Outil clef-en-main pour gérer la communication de restaurants'
        sidebarEmployees='43 employés'
        sidebarPreviousProvider='Autre prestataire spécialisé'
        sidebarTimeSaved='20 heures par mois'>
        <div className='story-body'>
          <p className='para u-margin-Tn'>
            <a href='http://zenchef.com/' className='u-link-color-p u-text-underline'>Zenchef</a>, un outil clef-en-main
            pour gérer la communication de restaurants (ex-1001 Menus), utilise le prélèvement pour encaisser les
            abonnements mensuels de ses clients, permettant aux restaurateurs de ne pas avoir à se soucier d'envoyer
            à temps un chèque ou un virement.
          </p>
          <p className='para'>
            Avant GoCardless, Zenchef gérait leur prélèvement par l'intermédiaire d'un autre prestataire spécialisé.
          </p>
          <p className='para'>
            Le directeur technique explique : "Le processus précédent était lourd. Le client devait valider le mandat par
            SMS ce qui lui faisait perdre du temps, et une fois le mandat validé, il nous fallait déposer et récupérer
            des fichiers techniques sur un serveur FTP."
            Il était difficile pour eux de faire le lien avec leur outil de facturation (Zuora) et de recevoir les rejets
            avec motifs afin de réagir rapidement.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/zenchef/product@2x.jpg' alt='' />
          </div>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Depuis GoCardless
          </h2>
          <p className='para'>
            Zenchef s'est rendu compte que le processus actuel n'était pas scalable.
            Ils ont alors identifié GoCardless comme la meilleure solution pour le prélèvement automatique.
          </p>
          <p className='para'>
            L'avantage clé fut la simplicité d'obtenir l'autorisation de prélèvement auprès de leurs clients avec
            un mandat électronique intégré à même le formulaire d'inscription.
          </p>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Les avantages
          </h2>
          <p className='para'>
            Zenchef peut désormais gérer tous les mandats dans Zuora et déclencher les prélèvements lorsque les factures
            viennent à échéance automatiquement. Mieux, le statut des paiements avec motifs est automatiquement fourni dans Zuora,
            ce qui permet à Zenchef de relancer un client ou de retenter un échec de paiement automatiquement.
            Cette automatisation a permis de diminuer le taux d'impayé de 50% et de faire gagner 20 heures par mois en temps administratif.
          </p>
          <p className='para'>
            Grâce à GoCardless, Zenchef a pu s'attaquer à de nouvelles opportunités de croissance:
            "La facilité d'établir et d'émettre des prélèvements a ouvert de nouvelles opportunités pour nous tel que
            la micro-facturation de nouveaux services annexes et a facilité notre expansion en Angleterre."
          </p>
        </div>
      </StoryPageNew>
    );
  }
}
