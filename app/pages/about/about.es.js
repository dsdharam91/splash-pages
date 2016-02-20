import React from 'react';
import Translation from '../../components/translation/translation';

export default class AboutEs extends React.Component {
  displayName = 'AboutEs'

  render() {
    return (
      <Translation locales='es'>
        <div className='site-container u-padding-Vxxl'>
          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-padding-Txl'>
            Sobre GoCardless
          </h2>
          <div className='grid'>
            <div className='grid__cell u-size-2of3'>
              <p className='para'>
                Hemos diseñado una nueva red de pagos por Internet. Únete a nosotros.
              </p>
              <p className='para'>
            Desde que pusimos en marcha GoCardless en 2011, hemos simplificado las domiciliaciones bancarias
        y facilitado el acceso a las compañías que nunca las habían utilizado previamente. Actualmente, ya
        procesamos las transacciones
            <a href='http://www.forbes.com/sites/trevorclawson/2015/07/24/the-upward-march-of-fin-tech-gocardless-breaks-the-1bn-barrier/' target='_blank'>
            más de 1000 millones de dólares anuales </a>de miles de empresas, y estamos experimentando un rápido crecimiento.
              </p>
              <p className='para'>
            Colaboramos con muchísimas organizaciones: gracias a nosotros, gimnasios pequeños y distintas
        agrupaciones reducen sus procesos administrativos; impulsamos el desarrollo de compañías de rápido
        crecimiento, como Funding Circle; y ayudamos a instituciones consolidadas, como Financial Times, a
        disminuir drásticamente sus tasas de abandono.
              </p>
              <p className='para'>
            <a href='https://medium.com/@hirokitakeuchi/a-new-payment-network-for-the-internet-11ffb4d7165b' target='_blank'>
            Pero nuestra ambición va más allá</a>: queremos acabar con todos los obstáculos para que las empresas puedan
        empezar a aceptar pagos de cualquier persona, en cualquier parte del mundo, de manera rápida y sencilla.
            </p>
            <p className='para'>
            Este último año, hemos empezado a colaborar con organizaciones más grandes,
        como el Guardian y el gobierno de Reino Unido. También hemos incorporado el modelo
        europeo de domiciliaciones bancarias, para que las empresas multinacionales puedan
        recibir fácilmente pagos de toda Europa. Recientemente, nos hemos introducido en Francia y
        en Alemania y, el año próximo, continuaremos con nuestra expansión global, Suecia y otros
        países, para crear una red global de cobros recurrentes.
            </p>
            <p className='para'>
            Tenemos sede en Londres y contamos con el apoyo de algunos de los inversores más
        importantes del mundo, como Balderton Capital, Accel Partners, Y Combinator y Passion Capital.
            </p>
            </div>
            <div className='grid__cell u-size-1of3'>
              <div className='u-margin-Txxl'>
                <img src='/images/press/publications-stacked.jpg' />
                <p className='u-text-xs u-color-dark-gray u-margin-Txxl'>
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
