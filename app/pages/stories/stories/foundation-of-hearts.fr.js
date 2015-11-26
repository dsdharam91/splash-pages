import React from 'react';
import Translation from '../../../components/translation/translation';
import StoryBigQuote from '../story-big-quote';
import StoryPage from '../story-page';
import StoryQuote from '../story-quote';

export default class StoriesFoundationOfHeartsFr extends React.Component {
  displayName = 'StoriesFoundationOfHeartsFr'

  render() {
    return (
      <Translation locales='fr'>
        <StoryPage
          title='Foundation of Hearts'
          tagline='La Foundation of Hearts attire 7.500 donations en moins de 2 mois grâce à GoCardless et sa solution simple et efficace'
          tips={[
            'Nous les avons aidé à mettre en place 7.500 supporteurs en moins de 2 mois',
            'Nous les avons aidé à intégrer le prélèvement directement sur leur site en d\'une heure',
            'Nous les avons aidé à gérer leurs paiements en ligne sans expertise technique ou de paiement',
          ]}>
          <StoryQuote tag='Nous avions besoin d’un établissement de paiement qui était facile à utiliser pour nous et nos supporteurs'>
            <p className='para u-margin-Tn'>
              <a href='http://www.foundationofhearts.org/' className='u-link-color-p u-text-underline' target='_blank'>
              La Foundation of Hearts</a> est une ONG composée de milliers de fans
              voulant sauver le Midlothian FC (un club écossais de Premier League)
              de la faillite en devenant l'actionnaire principal. Les supporteurs
              réalisent des dons mensuels réguliers afin de réaliser l’achat.
            </p>
            <p className='para'>
              L'ONG étant gérée par des volontaires, ils "avaient besoin d'une solution de paiement simple
              d'utilisation pour la gestion et pour les supporteurs"
            </p>
          </StoryQuote>
          <StoryBigQuote heroClass='story-hero--foundation-of-hearts' person='Calum Robertson' position='Foundation of Hearts'>
            Nous avons choisi GoCardless pour trois raisons: facile d'utilisation pour nos équipes, simple
            pour nos supporteurs de payer, et un prix concurrentiel. De plus, la qualité du service que
            nous avons reçu de l'équipe de GoCardless a été fantastique.
          </StoryBigQuote>
          <StoryQuote tag='GoCardless était la solution simple'>
            <p className='para u-margin-Tn'>Après avoir discuté avec PayPal et étudié les
            méthodes de paiement proposées par leur banque, l'ONG décide que GoCardless était “l'option simple”.</p>
            <p className='para'>La Foundation of Hearts a intégré l’API de GoCardless afin de permettre aux fans
            de réaliser des donations via leur site. Le reporting financier se fait via l’API et le tableau de bord
            en ligne GoCardless.</p>
          </StoryQuote>
          <StoryQuote tag='L’équipe de GoCardless a été fantastique'>
            <p className='para u-margin-Tn'>
              L’utilisation de GoCardless a simplifié grandement la gestion. “Je ne suis pas un spécialiste en technologie,
              et j'ai trouvé GoCardless facile à utiliser. De plus, la qualité du service que nous avons reçu de GoCardless
              a été fantastique” dit Calum, le directeur de Foundation of Hearts.
            </p>
            <p className='para'>Deux mois après le lancement avec GoCardless, 7.500 fans avaient réalisé
            un don. Ce chiffre a continué de grossir depuis. “Nous allons continuer de grandir,
            et tous les dons seront gérés via GoCardless.”</p>
          </StoryQuote>
        </StoryPage>
      </Translation>
    );
  }
}
