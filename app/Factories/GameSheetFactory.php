<?php

namespace App\Factories;

use App\Contracts\GameSheet;
use App\Entities\CasinoGameSheet;
use App\Entities\LiveGameSheet;
use App\Entities\QuickspinGameSheet;
use App\Entities\RubyPlaySheet;
use App\Entities\EyeconGameSheet;
use App\Entities\SkyWindSheet;

class GameSheetFactory {
    public function getGame($gameCategory): GameSheet {
        if ($gameCategory === 'Casino') {
            return new CasinoGameSheet();
        }

        if ($gameCategory === 'Live') {
            return new LiveGameSheet();
        }

        if ($gameCategory === 'Quickspin') {
            return new QuickspinGameSheet();
        }

        if ($gameCategory === 'RubyPlay') {
            return new RubyPlaySheet();
        }

        if ($gameCategory === 'Eyecon') {
            return new EyeconGameSheet();
        }

        if ($gameCategory === 'SkyWind') {
            return new SkyWindSheet();
        }

        throw new \Exception("Category not found.");
    }
}
