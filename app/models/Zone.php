<?php

class Zone extends Eloquent {

public function area()
    {
        return $this->belongsTo('Area');
    }

}