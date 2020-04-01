import React from 'react';
import loadingGif from '../images/gif/loading-gear.gif'

function Loading() {
  return (
    <div className="loading">
      <h4>Rooms data loading...</h4>
      <img src={loadingGif} alt="Loading" />
    </div>
  )
}

export default Loading;