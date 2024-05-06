// pages/index.js
import React, { useState } from 'react';

const Home = () => {
  const [isFlashing, setIsFlashing] = useState(false);
  const [isGigantic, setIsGigantic] = useState(false);

  const handleClick = () => {
    // Ativar o efeito de piscar
    setIsFlashing(true);

    // Mudar a mensagem para gigante após 1 segundo
    setTimeout(() => {
      setIsGigantic(true);
    }, 1000);

    // Desativar o efeito de piscar e redefinir a mensagem após 3 segundos
    setTimeout(() => {
      setIsFlashing(false);
      setIsGigantic(false);
    }, 3000);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className={isFlashing ? 'flash' : isGigantic ? 'gigantic' : ''}>teste</h1>
      <button onClick={handleClick}>Clique aqui</button>
      <style jsx>{`
        @keyframes flash {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
        .flash {
          animation: flash 0.5s infinite;
        }
        .gigantic {
          font-size: 3em;
        }
      `}</style>
    </div>
  );
};

export default Home;
