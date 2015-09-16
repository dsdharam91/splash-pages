import React from 'react';
import StoryBigQuote from '../story-big-quote';
import StoryPage from '../story-page';
import StoryQuote from '../story-quote';

export default class Stories1001Menus extends React.Component {
  displayName = 'Stories1001Menus'

  render() {
    return (
      <StoryPage
        title='1001menus'
        tagline='1001menus a augmenté son chiffre d’affaire de 90.000 € en automatisant le prélèvement via GoCardless'
        tips={[
            'GoCardless leur a permis d\'éviter 20 heures de gestion administrative par mois',
            'GoCardless les a aidé à réduire les impayés de 50 %, augmentant le chiffre d\'affaire de 90.000 €',
            'GoCardless les a aidé à réaliser de la micro-facturation pour de nouvelles offres',
        ]}>
        <StoryQuote tag='Le secteur des paiements est dominé par des logiciels complexes et archaïques'>
          <p className='para u-margin-Tn'>
            <a href='http://www.1001menus.com' className='u-link-color-p u-text-underline' target='_blank'>
            1001menus</a>, un outil tout-en-un pour gérer la communication de restaurants,
            utilise le prélèvement pour encaisser les abonnements mensuels de ses clients, permettant
            aux restaurateurs de ne pas avoir à se soucier d'envoyer à temps un chèque ou un virement.
          </p>
          <p className='para'>
            Avant GoCardless, 1001menus gérait leur prélèvement par l'intermédiaire d'un autre prestataire
            spécialisé. Le directeur technique explique : "Le processus précédent était lourd. Le client devait
            valider le mandat par SMS ce qui lui faisait perdre du temps, et une fois le mandat validé,
            il nous fallait déposer et récupérer des fichiers techniques sur un serveur FTP."
            Il était difficile pour eux de faire le lien avec leur outil de facturation (Zuora) et de recevoir
            les rejets avec motifs afin de réagir rapidement.
          </p>
        </StoryQuote>
        <StoryBigQuote person='Julien Balmont' position='1001menus'>
          GoCardless a complètement fluidifié le processus de prélèvement
        </StoryBigQuote>
        <StoryQuote tag="Nous voulions pouvoir faciliter l'expérience du client et notre gestion">
          <p className='para u-margin-Tn'>1001menus s'est rendu compte que le processus actuel n'était
          pas tenable avec leur croissance. Ils ont alors identifié GoCardless comme la meilleure
          option pour le prélèvement.</p>

          <p className='para'>
          L'avantage clé fut notre technologie de pointe. GoCardless est le seul prestataire
          de prélèvement qui pouvait automatiquement lier les prélèvements et les rejets directement
          avec leur outil de facturation Zuora.</p>
        </StoryQuote>
        <StoryQuote tag="Passer à GoCardless nous a permis de gagner du temps et de l'argent">
          <p className='para u-margin-Tn'>
            1001menus peut désormais gérer tous les mandats dans Zuora et déclencher les prélèvements
            lorsque les factures arrivent à échéance automatiquement. Mieux, le statut des paiements
            avec motifs est automatiquement fourni dans Zuora, ce qui permet à 1001menus de relancer un client ou
            de retenter un échec de paiement automatiquement. Cette automatisation a permis de diminuer
            le taux d'impayé de <strong>50%</strong> et de faire gagner <strong>20 heures</strong> par mois
            en temps administratif.
          </p>
          <p className='para'>
            Grâce à GoCardless, 1001menus a pu s'attaquer à de nouvelles opportunités de croissance:
            "La facilité d'établir et d'émettre des prélèvements a ouvert de nouvelles
            opportunités pour nous tel que la micro-facturation de nouveaux services annexes et a facilité
            notre expansion en Angleterre."
          </p>
        </StoryQuote>
      </StoryPage>
    );
  }
}
