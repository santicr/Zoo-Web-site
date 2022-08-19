import React, { Component } from 'react';
import styles from'./Footer.css';

class Footer extends Component {
  render() {
    return(
      
      //https://codepen.io/anu-uxe/pen/drJERE
      <div class="mt-5 pt-5 pb-5 footer">
        <script src="https://kit.fontawesome.com/41c9dd07b6.js" crossorigin="anonymous"></script>
<div class="container-fluid">
  <div class="row">
    <div class="col-lg-5 col-xs-12 about-company">
      <h2>Visitanos!</h2>
      <p class="pr-5 text-white-50">Te invitamos a conocernos! Nuestros objetivo es preservar la fauna y procurar que su vida sea plena, protejemos todas las especies </p>
      <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p>
    </div>
    <div class="col-lg-3 col-xs-12 links">
    <h4 class="mt-lg-0 mt-sm-4">Nuestra Ubicación</h4>
      <p> Cra. 2 oeste Calle 14 - Santa Teresita. Cali - Colombia.</p>
      <p>PBX (57 2) 4880888</p>
      <p>ervicioalcliente@zoologicodecali.com.co</p>
    </div>
    <div class="col-lg-4  location">

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8812.441521281737!2d-76.5583912030479!3d3.448445004575658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a5d22362f7f1%3A0x2c05ed4ac5063ab3!2sZool%C3%B3gico%20De%20Cali!5e0!3m2!1sen!2sco!4v1600639658457!5m2!1sen!2sco"  height="300" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col copyright">
      <p class=""><small class="text-white-50">© 2020. Todos los derechos reservados.</small></p>
    </div>
  </div>
</div>
</div>
    );
  }
}

export default Footer;