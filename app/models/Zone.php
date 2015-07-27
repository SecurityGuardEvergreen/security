<?php

class Zone extends Eloquent {

public function area()
    {
        return $this->belongsTo('Area');
    }
public function group()
    {
        return $this->hasMany('Group');
    }

}