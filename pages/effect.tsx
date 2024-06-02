import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const EffectPage = () => {
  const [words, setWords] = useState(['Leading the way in', 'Tech', 'Digital', 'AI excellence']);
  const [currentIndex, setCurrentIndex] = useState(1); 

  const handleClose = () => {
  
    window.history.back();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === words.length - 1 ? 1 : prevIndex + 1)); 
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Dynamic Effect</title>
      </Head>
      <div
        className="min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: 'url(/backimg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-4xl text-white font-bold mb-8">
          {words[0]}{' '}
          <span
            className="inline-block ml-2"
            style={{
              animation: currentIndex !== 0 ? 'slide-in-bottom 1s ease-out' : 'none', 
            }}
          >
            {currentIndex === 1 ? (
              <span style={{ color: '#FFA500' }}>{words[currentIndex]}</span>
            ) : currentIndex === 2 ? (
              <span style={{ color: '#00FFFF' }}>{words[currentIndex]}</span>
            ) : currentIndex === 3 ? (
              <span style={{ color: '#9932CC' }}>{words[currentIndex]}</span>
            ) : (
              words[currentIndex]
            )}
          </span>
        </h1>
        <button
          className="absolute top-0 right-0 mt-2 mr-2 px-3 py-1 bg-transparent-600 text-white rounded"
          onClick={handleClose}
        >
          X
        </button>
      </div>
      <style>{`
        @keyframes slide-in-bottom {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default EffectPage;
