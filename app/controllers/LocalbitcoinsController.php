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

     // this function return the url for a point on the map 
    
    public function localBitcoinUrl ($lat, $lon){

        $api_endpoint = '/places/?lat='.$lat.'&lon='.$lon;
        $url = 'https://localbitcoins.com/api'.$api_endpoint;
        $datas = json_decode(file_get_contents($url));
        $datas = $datas->data;
        $datas = $datas->places;
           
        return $datas[0]->buy_local_url;
    }

    //this function return informations about person want to sell bitcoins 
    
    public function LocateBitcoins($url) 
    {             
         
        $datas = json_decode(file_get_contents($url));
        $datas = $datas->data;
        return $datas->ad_list;
        
    }


    public function index() 
    {
        
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {


            echo $this->twig->render('buy.html.twig', [
                
            ]);
      
        } else {
      
            $lat = $_POST['latitude'];
            $lon = $_POST['longitude'];
            $url = $this->localBitcoinUrl($lat, $lon);
            $data = $this->LocateBitcoins($url);   

            echo json_encode(['data' => $data]);
      
        }
              
    }

}

?>
