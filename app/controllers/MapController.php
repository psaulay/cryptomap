<?php

namespace Controllers;

use Core\Controllers\Controller;


class MapController extends Controller {

    /**
     * Index method
     *
     * @param string $page
     * @return void
     */
    public function index() 
    {   
         echo $this->twig->render('map/map.html.twig');

    }
}