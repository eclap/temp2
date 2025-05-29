<?php

namespace App\Entities;

use App\Contracts\GameSheet;

class EyeconGameSheet implements GameSheet {
    public function getStartRowIndex(): int {
        return 2;
    }

    public function getGameNameIndex(): int {
        return 0;
    }

    public function getGameCodeIndex(): int {
        return 2;
    }

    public function getGameTypeIndex(): int {
        return 4;
    }

    public function getGameAliasIndex(): ?int {
        return null;
    }
}
