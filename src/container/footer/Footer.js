import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <div className ="footer">
      <div className='footer__overlay' >
      
        <div className='footer__card'>
          <h3> eBay Kleinanzeigen</h3>
            <ul>
            <li>Über uns </li>
            <li>Karriere </li>
            <li>eBay Kleinanzeigen </li>
            <li>Presse </li>
            <li>Magazin</li>
            <li> Mobile Apps </li>
            <li>Bug Bounty</li>
            </ul>
        </div>
        <div className='footer__card'>
          <h3> Informationen</h3>
            <ul>
            <li>Hilfe </li>
            <li>Tipps für deine Sicherheit </li>
            <li>Datenschutzerklärung</li>
            <li>Datenschutzeinstellungen</li>
            <li>Nutzungsbedingungen</li>
            <li> Impressum</li>
            </ul>
        </div>
        <div className='footer__card'>
          <h3> Für Unternehmen</h3>
            <ul>
            
            <li> Immobilienprofis</li>
            <li>  PRO für Unternehmen</li>
            
            </ul>
        </div>
        <div className='footer__card'>
          <h3> Social Media</h3>
            <ul>
            <li>Facebook </li>
            <li>YouTube </li>
            <li>Instagram </li>
            <li>Twitter </li>
            <li>Pinterest</li>  
            </ul>
        </div>
        <div className='footer__card'>
          <h3> Allgemein</h3>
            <ul>
            <li>Beliebte Suchen </li>
            <li>Anzeigen Übersicht </li>
            <li>Übersicht der Unternehmensseiten </li>
            <li>Autobewertung </li>
           
            </ul>
        </div>


      


      </div>
    </div>
  )
}

export default Footer
