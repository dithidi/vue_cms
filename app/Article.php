<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    /**
     * Get all of the article's images.
     */
    public function images() {
        return $this->morphMany('App\Image', 'imageable');
    }
}
