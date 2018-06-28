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

    $currencies = [

      0 => [
        'name' => 'bitcoin',
        'short' => 'btc',
        'codeApi' => '1'
      ],

      1 => [
        'name' => 'ethereum',
        'short' => 'eth',
        'codeApi' => '1027'
      ]

    ];

    $data = [];

    foreach ($currencies as $currency ) {

      $apiUrl  = 'https://api.coinmarketcap.com/v2/ticker/'.$currency['codeApi'].'/?convert=EUR';
      $apiData = (array) json_decode(file_get_contents($apiUrl))->data->quotes->EUR;

      $currency['price']   = round($apiData['price'], 2);
      $currency['percent'] = round($apiData['percent_change_24h'], 2);

      array_push($data, $currency);

    }

    echo '<pre>';
    var_dump($data);
    echo '</pre>';
    die();

    echo $this->twig->render('faq.html.twig', [
      'data' => $data
    ]);

  }

}
