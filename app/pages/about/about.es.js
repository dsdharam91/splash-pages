import React from 'react';
import Translation from '../../components/translation/translation';

export default class AboutEs extends React.Component {
  displayName = 'AboutEs'

  render() {
    return (
      <Translation locales='es'>
        <div className='site-container u-padding-Vxxl'>
          <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-padding-Txl'>
            Sobre GoCardless
          </h2>
          <div className='grid'>
            <div className='grid__cell u-size-2of3'>
              <p className='para'>
                GoCardless facilita los cobros recurrentes online para cualquier tipo de empresa.
                Unimos las redes bancarias de todo el mundo, las simplificamos y abrimos el acceso a todas las empresas.
                Y al hacerlo, estamos creando una nueva red de pagos mundial, aparte de Visa y Mastercard.
              </p>
              <p className='para'>
                Fundada en 2011, hemos crecido muy rápido para convertirnos en uno de las institutiones de Adeudos
                Domiciliarios más grandes de Europa,
                procesando más de mil millones de libras para más de 12.000 empresas.
              </p>
              <p className='para'>
                Trabajamos con todo tipo de organizaciones: pequeños gimnasios y clubes nos utilizan para reducir el
                tiempo de administración, startups como Tripadvisor nos usan para alimentar su crecimiento,
                y grandes empresas como el Financial Times o el Guardian nos usan para reducir enormemente
                sus tasas de abandono.
              </p>
              <p className='para'>
                Somos un pequeño equipo en Londres y, 'nos apoyan algunos de los inversores más importantes del mundo,
                incluyendo Balderton Capital, Accel Partners y Y Combinator.
              </p>
            </div>
            <div className='grid__cell u-size-1of3'>
              <div className='u-margin-Txxl'>
                <img src='/images/press/publications-stacked.jpg' />
                <p className='u-text-s u-color-p u-margin-Txxl'>
                  Para cualquier información de prensa, por favor contacta con <a href='mailto:press@gocardless.com'>
                  el equipo de Relaciones Publicas de GoCardless</a>, o mira nuestro
                  completo <a href='https://www.dropbox.com/sh/sat8xsjntbf5mnh/AACn116IKyIWrNG7c8FnY0cYa?dl=0'>
                    pack de prensa.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
     </Translation>
    );
  }
}
