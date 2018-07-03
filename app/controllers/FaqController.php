<?php

namespace Controllers;

use Core\Controllers\Controller;

class FaqController extends Controller {

  /**
   * Render method
   *
   * @return void
   */
  public function render()
  {

    echo $this->twig->render('faq.html.twig', [
      
    ]);

  }

}
