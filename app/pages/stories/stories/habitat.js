import React from 'react';
import StoryBigQuote from '../story-big-quote';
import StoryPage from '../story-page';
import StoryQuote from '../story-quote';

export default class StoriesHabitat extends React.Component {
  displayName = 'StoriesHabitat'

  render() {
    return (
      <StoryPage
        title='Habitat'
        tagline='Habitat lance de nouvelles offres d’abonnement grâce à GoCardless'
        tips={[
            'GoCardless les a aidés à lancer une nouvelle offre en moins de deux mois',
            'GoCardless leur a permis de fidéliser leurs clients sur le long-terme',
            'GoCardless leur a permis d’étendre le prélèvement à d’autres services et à ses filiales européennes',
        ]}>
        <StoryQuote tag='Vendre des abonnements permet d’assurer à une entreprise un socle solide de revenus récurrents'>
          <p className='para u-margin-Tn'><a href='http://www.habitat-cafe.com/'
          className='u-link-color-p u-text-underline' target='_blank'>
          Lui l’espresso</a> est le fruit d’une collaboration entre Habitat, la chaîne d’ameublement, et Aziende
          Riunite, un importateur de café et maître torréfacteur depuis 1856. Cette initiative stratégique permet à
          Habitat de mettre un pied dans l’économie de l’abonnement et de renforcer la relation entretenue avec leurs
          clients grâce à un produit mêlant design et art de vivre. A terme, Habitat vise 10.000 abonnés par an.</p>
          <p className='para u-margin-Tn'>Afin de développer cette offre, Habitat a choisi GoCardless pour ses
          paiements. “Nous voulions fidéliser le client sur le long-terme et le prélèvement fut identifié comme
          un outil stratégique car il nous permet d’éviter les expirations ou pertes de cartes” explique Remy Poirson,
          le directeur Marketing & Web d’Habitat.</p>
          <p className='para u-margin-Tn'>Cependant, l’enseigne ne possédait pas d’expérience avec ce
          moyen de paiement. “Le prélèvement, nous pensions que ce serait un cauchemar pour le
          département comptabilité.”</p>
        </StoryQuote>
        <StoryBigQuote heroClass='story-hero--has-bean-coffee' person='Remy Poirson'
        position='Habitat' img='/images/testimonials/hasbean-coffee__avatar.png'>
          GoCardless nous a permis d’avancer très vite et d’éviter de devoir parler à de multiples banques.
          Ainsi, nous pouvions nous concentrer sur notre lancement.
        </StoryBigQuote>
        <StoryQuote tag="Le prélèvement s’est inséré naturellement dans nos processus">
          <p className='para u-margin-Tn'>En juin, Habitat lance Lui l’espresso, seulement deux mois après les premières
          discussions avec GoCardless. Lors de l’abonnement, le client signe un mandat
          papier en magasin ou un mandat électronique sur le site <a href='http://www.habitat-cafe.com/'
          className='u-link-color-p u-text-underline' target='_blank'>
          habitat-cafe.com</a>. Il reçoit alors la
          machine à café et se verra livrer chez lui les capsules de café chaque mois, sous réserve d’un
          prélèvement réussi en amont de la livraison.</p>
          <p className='para u-margin-Tn'>Au niveau comptable, Habitat reçoit en temps réel les statuts des paiements.
          En cas d’échec ou de rejet, Habitat annule automatiquement toutes futures livraisons, ajuste la balance de
          paiement et peut éventuellement retenter le prélèvement. Les reversements de fonds sont également
          attribués automatiquement aux bonnes filiales d’un groupe implanté dans de multiples pays et aux DOM-TOM.</p>
        </StoryQuote>
        <StoryQuote tag='Nous allons multiplier ce type d’offre'>
          <p className='para u-margin-Tn'>Depuis le passage à GoCardless, Habitat a pu étendre le prélèvement à d’autres
          offres, comme sa carte de fidélité (Carte H), et à d’autres pays comme l’Allemagne et l’Espagne. GoCardless
          les aide à s’adapter aux différentes spécificités de ces géographies.</p>
          <p className='para'>Avec GoCardless, Habitat peut sereinement proposer de nouvelles offres.
          “La flexibilité de GoCardless nous a permis d’intégrer le prélèvement dans de multiples systèmes
          informatiques tout en gérant les paiements via un compte unique et une technologie simple”
          conclut Rosannie Ly, la directrice système d’information (DSI).</p>
        </StoryQuote>
      </StoryPage>
    );
  }
}
