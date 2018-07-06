<?php

namespace Controllers;

use Core\Controllers\Controller;
use Controllers\MarqueeController as Marquee;

class HomeController extends Controller {

  /**
   * Render method
   *
   * @return void
   */
  public function render()
  {
    echo $this->twig->render('home.html.twig', [
      'currencies' => Marquee::getMarquee()
    ]);
  }

}
