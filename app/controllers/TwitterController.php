<?php

namespace Controllers;


use Core\Controllers\Controller;
use Abraham\TwitterOAuth\TwitterOAuth;


class TwitterController extends Controller {


    /**
    * Render method
    *
    * @return void
    */
    public function render()
    {

        if ($_SERVER['REQUEST_METHOD'] === 'GET') {

            echo $this->twig->render('news/twitter.html.twig', [
                'statuses' => $this->getTweets('bitcoin')
            ]); 

        } else {


            $hashtag = htmlspecialchars($_POST['hashtag']);

            echo $this->twig->render('partials/tweets.html.twig', [
                'statuses' => $this->getTweets($hashtag)
            ]);

        }

    }

    /**
     * GetTweets method
     *
     * @param string $page
     * @return void
     */
    public function getTweets($query)
    {   
        $comsumer_key = 'EzXcLMys0gtr2amIXEckXxZua';
        $consumer_secret = 'EeS18r9rrAy7DZNEyprFQSrXUlKcIUYOF6liwZUKWciqB5zhvE';
        $access_token = '969560599075196928-gwOVyp9crxbwRC2XlczMJSGiHc2W9iT';
        $access_token_secret = 'dyRJAkiC5F0k38tFhqA9WYfvvzmQXGcxIiHKb7AtBBO0o';

    //     if (isset($_POST['hashtag'])) {
    //      $hashtag = htmlspecialchars($_POST['hashtag']);
    //  }else{
    //     $hashtag = 'bitcoin';
    // }


    $connection = new TwitterOAuth($comsumer_key, $consumer_secret, $access_token, $access_token_secret);
    $connection->setTimeouts(10, 15);
    $statuses = $connection->get("search/tweets", [
        "q" => $query,
        "count" => 24,
        "geocode" => "46.72574,2.990717,500km",
        "lang" => 'fr',
        "include_entities" => true,
        "sort_by" => "created_at-asc"

    ]);

    if(isset($statuses->errors)) {

        $message = "Nous sommes désolés! Le service est indisponible pour le moment.";
        return $message;

    }else{

        return $statuses;

    }


}
}

