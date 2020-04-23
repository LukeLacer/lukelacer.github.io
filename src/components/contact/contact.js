import React from 'react';
import './contact.css';

function contact() {
  return (
      <div class="container">
        Essa é a tela de contatos
        <div class="redes">
          <a href="https://www.facebook.com/lucas.lacerda.de.lima/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook fa-2x"></i></a>
          <a href="https://twitter.com/lucaslacer1" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter fa-2x"></i></a>
          <a href="https://www.instagram.com/lukelacer/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram fa-2x"></i></a>
          <a href="https://www.linkedin.com/in/lucaslacer/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin fa-2x"></i></a>
          <a href="https://github.com/LukeLacer" target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-2x"></i></a>
        </div>
      </div>
  );
}

export default contact;