<?php

namespace Controllers;

use Core\Controllers\Controller;


class LocalbitcoinsController extends Controller {
    
    /**
     * Index method
     *
     * @param string $page
     * @return void
     */

    public function localBitcoinUrl ($lat, $lon){

        $api_endpoint = '/places/?lat='.$lat.'&lon='.$lon;
        $url = 'https://localbitcoins.com/api'.$api_endpoint;
        // var_dump($url);die();
        $datas = json_decode(file_get_contents($url));
        $datas = $datas->data;
        $datas = $datas->places;
        // echo '<pre>'; var_dump($datas[0]->buy_local_url); echo '</pre>';
           
        return $datas[0]->buy_local_url;
    }


    public function index($page = "1") 
    {
        $url = $this->localBitcoinUrl(43.813968 , 3.8356);
       
        $datas = json_decode(file_get_contents($url));
        $datas = $datas->data;
        // echo '<pre>'; var_dump($datas->ad_list);die();
        
        echo $this->twig->render('buy.html.twig', [
            'results' => $datas->ad_list
        ]);
        
    }


}

?>