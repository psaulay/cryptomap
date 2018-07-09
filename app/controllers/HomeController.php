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

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {

      echo $this->twig->render('home.html.twig', [
        'currencies' => Marquee::getMarquee()
      ]);

    }else{

      $posted = $_POST['bitcoin'];

      switch ($posted){

        case 'cash' :
          $this->buyCash();
          break;

        case 'atm' :
          //////appeller la function distributeur

          break;

        case 'shop' :
          /// appeller la function comerçant
          break;


        case 'reset' :

        //////// reset
        break;

        default :
        $this->buyCash();


      }

    }

  }


  public function buyCash()
  {

    $lat = 46.2276;
    $lon = 2.2137;
    $url = $this->localBitcoinUrl($lat, $lon);
    $data = $this->LocateBitcoins($url);
    echo json_encode(['data' => $data,'kind'=> 'cash']);

  }

  //this function return informations about person want to sell bitcoins

  public function LocateBitcoins($url)
  {

    $datas = json_decode(file_get_contents($url));
    $datas = $datas->data;
    return $datas->ad_list;

  }

  public function localBitcoinUrl ($lat, $lon){

    $api_endpoint = '/places/?lat='.$lat.'&lon='.$lon;
    $url = 'https://localbitcoins.com/api'.$api_endpoint;
    $datas = json_decode(file_get_contents($url));
    $datas = $datas->data;
    $datas = $datas->places;
    return $datas[0]->buy_local_url;

  }


}
