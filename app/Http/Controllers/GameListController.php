<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Game;
use Illuminate\Support\Facades\Log;

class GameListController extends Controller
{
    private Game $game;

    public function __construct(Game $game)
    {
        Log::info('Check');
        $this->game = $game;    
    }

    public function __invoke(Request $request)
    {
        $model = $this->game;

        if ($request->has('provider')) {
            $model = $model->where('provider', '=', $request->get('provider'));
        }
        $games = $model->get();
        return $games;
    }
}
