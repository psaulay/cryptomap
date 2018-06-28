<?php

namespace Controllers;

use Abraham\TwitterOAuth\TwitterOAuth;
use Core\Controllers\Controller;

class TwitterController extends Controller {

  /**
   * GetTweets method
   *
   * @return void
   */
  public function getTweets()
  {

    echo $this->twig->render('news/twitter.html.twig', [

    ]);
  }

}
