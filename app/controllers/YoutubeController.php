<?php

namespace Controllers;

use Core\Controllers\Controller;

class YoutubeController extends Controller {

  /**
   * Render method
   *
   * @return void
   */
  public function render()
  {

    $base_url   = 'https://www.googleapis.com/youtube/v3/search?part=snippet';
    $query      = 'bitcoin%20fr';
    $maxResults =  10;
    $order      = 'date';
    $langage    = 'fr';
    $key        = 'AIzaSyAV9eb5jfZUHg0XPuwzo2zRS_Kwimlz4mg';

    $url = $base_url.'&q='.$query.'&maxResults='.$maxResults.'&regionCode=FR&relevanceLanguage='.$langage.'&order='.$order.'&safeSearch=none&key='.$key;

    // $url = $base_url.'&q='.$query.'&maxResults='.$maxResults.'&regionCode=FR&order='.$order.'&safeSearch=none&key='.$key;

    // $url = $base_url.'&q='.$query.'&maxResults='.$maxResults.'&relevanceLanguage='.$langage.'&order='.$order.'&safeSearch=none&key='.$key;

    // $url    = $base_url.'&q='.$query.'&location=46.72574,2.990717&locationRadius=300km&type=video&key='.$key;

    // var_dump($url); die();

    $data   = json_decode(file_get_contents($url), true)['items'];
    $videos = [];

    foreach ($data as $video) {

      $step = [];

      $step['id']          = $video['id']['videoId'];
      $step['date']        = $video['snippet']['publishedAt'];
      $step['channel']     = $video['snippet']['channelId'];
      $step['title']       = $video['snippet']['title'];
      $step['description'] = $video['snippet']['description'];
      $step['thumbnail']   = $video['snippet']['thumbnails']['medium']['url'];

      array_push($videos, $step);

    }

    // echo '<pre>';
    // var_dump($videos);
    // echo '</pre>';
    // die();

    echo $this->twig->render('news/youtube.html.twig', [
      'videos' => $videos
    ]);
  }

}
