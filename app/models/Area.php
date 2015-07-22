<?php

class Area extends Eloquent {

public function zone()
    {
        return $this->hasMany('Zone');
    }

}