<?php

namespace Controllers;

use Core\Controllers\Controller;

class LocalbitcoinsController extends Controller {

  /**
   * Render method
   *
   * @return void
   */
  public function render()
  {


    echo $this->twig->render('buy.html.twig', [

    ]);
  }

}
