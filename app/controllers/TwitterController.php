<?php

namespace Controllers;


use Core\Controllers\Controller;
use Abraham\TwitterOAuth\TwitterOAuth;


class TwitterController extends Controller {

    /**
     * GetTweets method
     *
     * @param string $page
     * @return void
     */
    public function getTweets()
    {

        $config = require('./config.php');

        $comsumer_key = $config['twitter']['consumer_key'];
        $consumer_secret = $config['twitter']['consumer_secret'];
        $access_token = $config['twitter']['access_token'];
        $access_token_secret = $config['twitter']['access_token_secret'];

        if (isset($_POST['hashtag'])) {
           $hashtag = htmlspecialchars($_POST['hashtag']);
       }else{
        $hashtag = 'bitcoin';
    }


    $connection = new TwitterOAuth($comsumer_key, $consumer_secret, $access_token, $access_token_secret);
    $connection->setTimeouts(10, 15);
    $statuses = $connection->get("search/tweets", [
        "q" => $hashtag,
        "count" => 24,
        "geocode" => "46.72574,2.990717,500km",
        "lang" => 'fr',
        "include_entities" => true,
        "sort_by" => "created_at-asc"

    ]);

    if(isset($statuses->errors)) {

        $message = "Nous sommes désolés! Le service est indisponible pour le moment.";
        echo $this->twig->render('news/twitter.html.twig', [
            'message' => $message
        ]);

    }else{

        echo $this->twig->render('news/twitter.html.twig', [
            'statuses' => $statuses
        ]);

    }


}
}
