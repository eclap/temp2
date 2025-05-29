export const ProviderNav = ({
  provider,
  setProvider,
}) => {
  return (
    <div className="d-flex justify-content-between mx-3 my-4 overflow-scroll overflow-no-style">
      <button 
        style={{ minWidth: '20vh' }}
        className={`${provider == 'playtech' ? 'btn-provider-selected' : 'btn-provider'} flex-grow-1 me-4 px-4`}
        onClick={() => setProvider('playtech')} 
        type="button"
      >
        <img src="/images/playtech_button.png" />
      </button>
      <button 
        style={{ minWidth: '20vh' }}
        className={`${provider == 'rubyplay' ? 'btn-provider-selected' : 'btn-provider'} flex-grow-1 me-4 px-4`}
        onClick={() => setProvider('rubyplay')} 
        type="button"
      >
        <img src="/images/rubyplay_button.png" />
      </button>
      <button 
        style={{ minWidth: '20vh' }}
        className={`${provider == 'quickspin' ? 'btn-provider-selected' : 'btn-provider'} flex-grow-1 me-4 px-4`}
        onClick={() => setProvider('quickspin')} 
        type="button"
      >
        <img src="/images/quickspin_logo.png" />&nbsp;&nbsp;
        <img src="/images/quickspin_button.png" />
      </button>
      {/* <button 
        style={{ minWidth: '20vh' }}
        className={`${provider == 'eyecon' ? 'btn-provider-selected' : 'btn-provider'} flex-grow-1 me-4 px-4`}
        onClick={() => setProvider('eyecon')} 
        type="button"
      >
        <img src="/images/eyecon_button.png" />
      </button>
      <button 
        style={{ minWidth: '20vh' }}
        className={`${provider == 'skywind' ? 'btn-provider-selected' : 'btn-provider'} flex-grow-1 me-4 px-4`}
        onClick={() => setProvider('skywind')} 
        type="button"
      >
        <img width="100%"src="/images/skywind-logo.svg" />
      </button> */}
    </div>
  );
};
