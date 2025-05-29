import React from 'react';
import { useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import axios from 'axios';
import Cookies from 'js-cookie';
import { GameItem } from './GameItem';

export const GamesList = ({ 
  filter, 
  user, 
  isLogin, 
  games, 
  setGames,
  setIsShowLoginNotificationModal
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const language = 'English';
  const languageCode = 'EN';

  const objectToQueryString = (obj) => {
    const keys = Object.keys(obj);
    const keyValuePairs = keys.map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]); 
    });
    return keyValuePairs.join('&');
  };

  const launchDemoGame = (ev, game) => {
    window.iapiSetClientParams('ngm_desktop', 'language=' + 'en' + '&real=0');
    window.iapiLaunchClient('ngm_desktop', game.code, 'offline', '_blank');
  };

  const launchActualGame = async (ev, game) => {
    if (!isLogin) {
      setIsShowLoginNotificationModal(true);
      return;
    }

    window.iapiLoginAndGetTempToken(
      user.username, 
      Cookies.get('password'), 
      language, 
      languageCode
    );
    const queryParams = {
      casinoname: 'flyingdragon88',
      realMode: 'EN',
      serviceType: 'GamePlay',
      systemId: 77,
      clientType: 'casino',
      clientPlatform: 'web',
      clientSkin: 'flyingdragon88',
      languageCode: 'LoginService',
    };

    const url = 'https://login.flyingdragon88.com/LoginAndGetTempToken.php?' 
      + objectToQueryString(queryParams);

    const formData = new FormData();
    formData.append('username', user.username);
    formData.append('password', Cookies.get('password'));
    console.log('url', url);
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });
      const body = await response.json();
      const sessionToken = body.sessionToken.sessionToken;

      const gameLaunchParams = {
        gameCodeName: game.is_live ? game.code + ';' + game.alias : game.code,
        username: user.username,
        tempToken: sessionToken,
        casino: 'flyingdragon88',
        clientPlatform: 'web',
        language: 'EN',
        playMode: 1,
        depositUrl: 'https://google.com&lobbyUrl=https://tools.ptdev.eu/cpsg/kade/technicalerror.html' 
      };
      const gameLaunchUrl = 'https://login.flyingdragon88.com/GameLauncher?'
        + objectToQueryString(gameLaunchParams);
      window.open(gameLaunchUrl);
    } catch (err) {
      console.log('err', err);
    } finally {

    } 
  };

  return (
    <React.Fragment>
      <div className="mx-5 py-4">
        <div className="row">
        {
          games.map((game, index) => {
            return (
              <GameItem 
                key={game.id} 
                game={game}
                games={games}
                setGames={setGames}
                launchActualGame={launchActualGame}
                launchDemoGame={launchDemoGame}
              />
            );
          })
        }
        </div>
      </div>
    </React.Fragment>
  );
};
