export const GameItem = ({
  game,
  games,
  setGames,
  launchActualGame,
  launchDemoGame
}) => {
  const fetchImageName = (game) => {
    return game.is_live ? game.alias : game.code;
  };

  const onMouseOver = (ev, game) => {
    const updatedGames = [...games];
    const updatedGame = updatedGames.find(updatedGame => updatedGame.id === game.id);
    updatedGame.isHover = true;
    updatedGames.game = updatedGame;
    setGames(updatedGames)
  };
  
  const onMouseOut = (ev, game) => {
    const updatedGames = [...games];
    const updatedGame = updatedGames.find(updatedGame => updatedGame.id === game.id);
    updatedGame.isHover = false;
    updatedGames.game = updatedGame;
    setGames(updatedGames)
  };

  return (
    <div 
      className="px-4 col-xl-2 col-lg-3 col-md-4 col-sm-4 col-xs-6 mb-4" 
      onMouseOver={(ev) => onMouseOver(ev, game)}
      onMouseOut={(ev) => onMouseOut(ev, game)}
    >
      <div className="image-wrapper d-flex justify-content-center">
        <img 
          alt={game.name}
          src={`/images/games_icons_desktop/${fetchImageName(game)}.jpg`} 
          className="rounded img-fluid" 
        />
        <div className={`overlay mb-3 ${game.isHover ? '' : 'd-none'}`}>
          <div className="d-sm-flex d-lg-none flex-column px-5">
            <button 
              type="button"
              onClick={(ev) => launchActualGame(ev, game)}
              className="btn-game w-auto flex-fill py-3 mb-3"
            >
              Play
            </button>
            { !game.is_live &&
              <button 
                type="button"
                onClick={(ev) => launchDemoGame(ev, game)}
                className="btn-game w-auto flex-fill py-3 mb-3"
              >
                Demo
              </button>
            }
          </div>
          <div className="d-lg-flex justify-content-evenly d-none">
            <button 
              type="button"
              onClick={(ev) => launchActualGame(ev, game)}
              className="btn-game"
            >
              Play
            </button>
            { !game.is_live &&
              <button 
                type="button"
                onClick={(ev) => launchDemoGame(ev, game)}
                className="btn-game"
              >
                Demo
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};
