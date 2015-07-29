import React from 'react';
import StoryBigQuote from '../story-big-quote';
import StoryPage from '../story-page';
import StoryQuote from '../story-quote';

export default class Stories1001Menus extends React.Component {
  displayName = 'Stories1001Menus'

  render() {
    return (
      <StoryPage
        title='1001 Menus'
        tagline='1001 Menus a augmenté son chiffre d’affaire de  €X en automatisant le prélèvement via GoCardless'
        tips={[
            'Nous leur avons permis d\'économiser xh de gestion administrative par mois',
            'Nous les avons aidé à réduire les impayés de x%, augmentant le chiffre d\'affaire de x',
            'Nous les avons aidé à réaliser de la micro-facturation pour de nouvelles offres',
        ]}>
        <StoryQuote tag='Le secteur des paiements est dominé par des logiciels complexes et archaïque'>
          <p className='para u-margin-Tn'>
            <a href='http://www.1001menus.com' className='u-link-color-p u-text-underline' target='_blank'>
            1001 Menus</a>, un outil tout-en-un pour gérer la communication de restaurants,
            utilise le prélèvement pour encaisser les abonnements mensuels de ses clients, permettant
            aux restaurateurs de ne pas avoir à se soucier d'envoyer à temps un chèque ou un virement.
          </p>
          <p className='para'>
            Avant GoCardless, ils géraient leur prélèvement via un autre prestataire spécialisé.
            Le directeur technique explique : "Le processus précédent était lourd. Le client devait
            valider le mandat par SMS ce qui lui faisait perdre du temps, et une fois le mandat validé,
            il nous fallait déposer et récupérer des fichiers techniques sur un serveur FTP."
            Il était difficile pour eux de faire le lien avec leur outil de facturation (Zuora) et de recevoir
            les rejets avec motifs afin de réagir rapidement.
          </p>
        </StoryQuote>
        <StoryBigQuote person='Julien Balmont' position='1001 Menus'>
          GoCardless a complètement fluidifié le processus de prélèvement
        </StoryBigQuote>
        <StoryQuote tag="Nous voulions pouvoir faciliter l'expérience du client et notre gestion">
          <p className='para u-margin-Tn'>1001 Menus s'est rendu compte que le processus actuel n'était
          pas tenable avec leur croissance. Ils ont alors identifié GoCardless comme la meilleure
          option pour le prélèvement.</p>

          <p className='para'>
          L'avantage clé fut notre technologie de pointe. GoCardless est le seul prestataire
          de prélèvement qui pouvait automatiquement lier les prélèvements et les rejets directement
          avec leur outil de facturation Zuora.</p>
        </StoryQuote>
        <StoryQuote tag="Passer à GoCardless nous a permis de gagner du temps et de l'argent">
          <p className='para u-margin-Tn'>
            1001Menus peut désormais gérer tous les mandats dans Zuora et déclencher les prélèvements
            lorsque les factures viennent à échéance automatiquement. Mieux, le statut des paiements
            avec motifs est automatiquement fourni dans Zuora, ce qui permet à 1001 Menus de relancer un client ou
            de retenter un échec de paiement automatiquement. Cet automatisation a permis de diminuer
            le taux d'impayé a diminué de <strong>x%</strong> et de faire gagner <strong>x h</strong> par mois
            en temps administratif.
          </p>
          <p className='para'>
            Grâce à GoCardless, 1001 Menus a pu s'attaquer à de nouvelles opportunités de croissance:
            "La facilité d'établir et d'émettre des prélèvements a ouvert de nouvelles
            opportunités pour nous tel que la micro-facturation de nouveaux services annexes."
          </p>
        </StoryQuote>
      </StoryPage>
    );
  }
}
