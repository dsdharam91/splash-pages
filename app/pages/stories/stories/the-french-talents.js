import React from 'react';
import StoryBigQuote from '../story-big-quote';
import StoryPage from '../story-page';
import StoryQuote from '../story-quote';

export default class StoriesTheFrenchTalents extends React.Component {
  displayName = 'StoriesTheFrenchTalents'

  render() {
    return (
      <StoryPage
        title='The French Talents'
        tagline='The French Talents a réduit ses délais de paiement de 50% grâce à GoCardless'
        tips={[
            'GoCardless les a aidé à réduire les délais de paiements de 50 %',
            'GoCardless leur a permis de réaffecter un mi-temps sur des tâches plus constructives',
            'GoCardless leur a permis d\'éviter la relance comptable',
        ]}>
        <StoryQuote tag='Les clients oubliaient de payer leur factures'>
          <p className='para u-margin-Tn'><a href='http://www.thefrenchtalents.com/'
          className='u-link-color-p u-text-underline' target='_blank'>
          The French Talents</a> est un facilitateur e-commerce et permet à des marques clientes
          de facilement se connecter à des sites ecommerce et développer leur notoriété en ligne.
          Ces marques, des TPEs et artisans principalement, essaient de se faire découvrir et
          dans le tumulte oublient souvent de payer leurs factures.</p>
          <p className='para'>
          "Nos clients nous envoyaient des chèques et virements avec 30, 45, 70 jours en retard.
          La vaste majorité sont de simples oublis, mais derrière nous avions une personne à mi-temps dédiée
          aux relances de paiements en retard. De plus, le trou de trésorerie pesait sur notre croissance."
          explique Martin Gentil, le directeur commercial et co-fondateur de French Talents.</p>
        </StoryQuote>
        <StoryBigQuote person='Martin Gentil' position='The French Talents'>
          En finir avec les retards a aidé à beaucoup réduire le stress des équipes commerciales et administratives.
        </StoryBigQuote>
        <StoryQuote tag="Maintenant, nous demandons d'accepter un mandat dès l'inscription">
          <p className='para u-margin-Tn'>The French Talents a connecté GoCardless à leur CRM et ERP Sellsy.
          En conséquence un représentant commercial peut désormais ajouter un mandat de prélèvement lors de l'ajout
          d'un nouveau client, qui sera ensuite automatiquement prélevé lorsqu'une facture arrive à échéance.</p>
          <p className='para u-margin-Tn'>Cela a permis d'améliorer le processus de vente, car une vente n'est
          validée qu'une fois le mandat mis en place. Cela évite de passer beaucoup de temps sur de "faux clients"
          qui impliquaient un travail opérationnel et de relance avant que le paiement soit sécurisé</p>
          <p className='para'>De plus, The French Talents reçoit automatiquement le statut des paiements et peut
          réagir immédiatement en cas de rejet.</p>
        </StoryQuote>
        <StoryQuote tag='Nous pouvons nous concentrer sur les vrais problèmes'>
          <p className='para u-margin-Tn'>Depuis le passage à GoCardless, The French Talents a pu réduire les
          délais de paiements de 50%.</p>
          <p className='para'>Avec GoCardless, The French Talents a pu reprendre le contrôle de leur trésorerie
          et se concentrer sur l'essentiel. "Notre personne dédiée à mi-temps aux retards de paiements peut
          désormais se concentrer sur des activités à plus forte valeur ajoutée. Pour ma part, je ne m'occupe plus
          que de vrais problèmes, les mauvais payeurs, qui ressortent immédiatement."</p>
        </StoryQuote>
      </StoryPage>
    );
  }
}
