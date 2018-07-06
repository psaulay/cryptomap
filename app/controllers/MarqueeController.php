<?php

namespace Controllers;

use Core\Controllers\Controller;
use Controllers\MarqueeController as Marquee;

class MarqueeController extends Controller {

  public function update() 
  {
    echo json_encode(['currencies' => $this->getMarquee()]);
  }

  public static function getMarquee() 
  {

    $url = 'https://api.coinmarketcap.com/v2/ticker/?convert=EUR';
    $largeAnswer = (array) json_decode(file_get_contents($url));
    $currency = [];
    $currencies = [];
    $i=0;
    foreach($largeAnswer['data'] as $answer){
      $i++;
      $currency['id'] = $answer->id;
      $currency['symbol'] = $answer->symbol;
      $currency['name'] = $answer->name;
      $currency['price'] = round($answer->quotes->EUR->price).'€';
      $currency['percent'] = $answer->quotes->EUR->percent_change_24h.'%';
      array_push($currencies, $currency);
      if ($i == 11){ break; }
      
    }
    return $currencies;
    
  }

}