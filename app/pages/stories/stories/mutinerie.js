import React from 'react';
import StoryBigQuote from '../story-big-quote';
import StoryPage from '../story-page';
import StoryQuote from '../story-quote';

export default class StoriesMutinerie extends React.Component {
  displayName = 'StoriesMutinerie'

  render() {
    return (
      <StoryPage
        title='Mutinerie'
        tagline='L’espace de co-working Mutinerie a réduit de 10 heures par mois sa gestion administrative grâce à GoCardless.'
        tips={[
            'GoCardless leur a permis de gagner 10h par mois sur la gestion des paiements',
            'GoCardless a permis de réduire de 20% les retards de paiements',
            'GoCardless permet de fluidifier l\'expérience des co-workeurs',
        ]}>
        <StoryQuote tag='GoCardless a facilité notre gestion des paiements grâce à son intégration dans Cobot'>
          <p className='para u-margin-Tn'><a href='http://www.mutinerie.org/'
          className='u-link-color-p u-text-underline' target='_blank'>
          Mutinerie</a> utilise aujourd’hui GoCardless directement dans son outil de gestion Cobot.
          Cette intégration lui a permis de complètement fluidifier sa gestion de l’espace et de gagner
          10h par mois sur la gestion des paiements (émissions, comptabilité, traitement des rejets...).</p>
          <p className='para u-margin-Tn'>“Quand un nouveau client s’inscrit dans notre espace nous lui faisons
          remplir un mandat électronique. Il sera ensuite automatiquement prélevélorsqu'une facture arrive à
          échéance. Toute la réconciliation entre factures et paiements se fait directement dans Cobot
          sans avoir à rentrer de données manuellement” explique Sanjar Bek, manager de l'espace.</p>
        </StoryQuote>
        <StoryBigQuote person='Sanjar Bek' position='Mutinerie'>
          Le prélèvement a assaini notre comptabilité et nous permet d’éviter 20% de retards de paiements
        </StoryBigQuote>
        <StoryQuote tag="Nous souhaitions que nos co-workeurs passent plus de temps à développer leur activité">
          <p className='para u-margin-Tn'>L’espace de co-working Mutinerie offre aux indépendants et aux entrepreneurs
          un cadre de travail stimulant et un écosystème efficace. L’administration ne doit pas être un frein pour
          les co-workeurs.</p>
          <p className='para u-margin-Tn'>“Afin de continuer à offrir cet environnement de travail à nos co-workeurs,
          nous avions besoin d’améliorer la gestion des paiements. Nous souhaitions que nos clients n'aient pas à
          déposer un chèque ou envoyer un virement chaque mois" explique Sanjar Bek, manager de l’espace Mutinerie.</p>
        </StoryQuote>
        <StoryQuote tag='La mise en place de GoCardless ne prend que quelques minutes'>
          <p className='para u-margin-Tn'>La configuration d'un compte GoCardless est très simple pour un espace de
          co-working. En seulement quelques clics depuis un compte Cobot, un administrateur peut mettre en place
          le prélèvement.</p>
          <p className='para'>Un point clé fut l’intégration de GoCardless dans Cobot.
          "GoCardless est le seul prestataire de prélèvement qui intègre les prélèvements
          avec notre outil de gestion Cobot. Grâce à leur intégration, nous avons pu commencer
          à prélever nos clients en quelques minutes."</p>
        </StoryQuote>
      </StoryPage>
    );
  }
}
