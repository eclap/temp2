<?php

namespace App\Entities;

use App\Contracts\GameSheet;

class SkyWindSheet implements GameSheet 
{
    public function getStartRowIndex(): int 
    {
        return 1;
    }

    public function getGameNameIndex(): int 
    {
        return 0;
    }

    public function getGameCodeIndex(): int 
    {
        return 1;
    }

    public function getGameTypeIndex(): int 
    {
        return 5;
    }

    public function getGameAliasIndex(): ?int
    {
        return null;
    }
}
