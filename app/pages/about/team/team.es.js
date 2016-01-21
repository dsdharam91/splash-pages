import React from 'react';
import Translation from '../../../components/translation/translation';

export default class TeamEs extends React.Component {
  displayName = 'TeamEs'

  render() {
    return (
      <Translation locales='es'>
        <div className='site-container u-padding-Vxxl'>
          <div className='grid u-padding-Txl'>
            <div className='grid__cell u-size-1of3'>
              <h2 className='u-text-heading-light u-text-m u-color-meta u-margin-Bm'>
                Somos un pequeño equipo construyendo la nueva red de pagos para Internet.
              </h2>
            </div>
          <div className='grid__cell u-size-2of3'>
             <h2 className='u-text-heading u-color-heading u-text-l u-text-light'>Trabajar aquí</h2>
             <span className='u-text-heavy u-color-heading'></span>
             <span className='u-color-p'>
              <p className='para'>
            Crear una gran compañía es tan importante para nosotros como construir
        un gran negocio; tenemos una fuerte cultura y estamos siempre trabajando para
        hacerla más potente. Contratamos a personas con talento, nos enfrentamos a grandes
        retos y ofrecemos un ambiente de trabajo donde todos podamos siempre ofrecer nuestro
        mejor trabajo, donde aprendamos y nos inspiremos mutuamente.
               </p>
               <p className='para'>
            <strong>Trabajamos en equipo</strong>: valoramos más los logros en equipo
        que las acciones del individuo y nos encanta trabajar juntos. Creemos que rodearte
        de personas con talento es la mejor manera de sacar nuestro mayor rendimiento.
               </p>
              <p className='para'>
            <strong>Somos curiosos</strong>: nos importa mucho el aprender y
        el desarrollo personal. Nos tomamos el tiempo que necesitemos para aprender y
        progresas como profesionales, ya sea atendiendo a conferencias, cursos o asumiendo
        retos. Aprendemos tanto de nuestras victorias como de nuestros errores y
        frecuentemente compartimos nuestras experiencias para que podamos mejorar todos.
              </p>
              <p className='para'>
            <strong>Avanzar rápido es importante</strong>: nos centramos en las tareas
        que tengan un mayor impacto. Construimos para el largo plazo para poder movernos
        rápido no solo ahora, sino en el futuro.
              </p>
              <p className='para'>
            <strong>Toma la iniciativa</strong>: somos un equipo de “jefes” y cada
        uno dirige su propio trabajo. Las decisiones se toman de forma conjunta.
            Fomentamos la iniciativa y que todo el mundo sea capaz de hacer y proponer
        mejores cuando vean una oportunidad.
            </p>
            </span>
            </div>
          </div>
        </div>
        <div className='site-container u-padding-Vxxl'>
          <div className='grid u-padding-Bxl'>
            <div className='grid__cell u-size-1of3'>
              <img src='/images/office/office-picnic-table.jpg' />
            </div>
            <div className='grid__cell u-size-2of3'>
              <img src='/images/office/office-support-booths.jpg' />
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
