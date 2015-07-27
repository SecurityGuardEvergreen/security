<?php

class Group extends Eloquent {

public function user()
    {
        return $this->hasMany('User');
    }
public function zone()
    {
        return $this->belongsTo('Zone');
    }
}