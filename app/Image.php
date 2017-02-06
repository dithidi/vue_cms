<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    /**
     * Get all of the owning commentable models.
     */
    public function imageable() {
        return $this->morphTo();
    }
}
