import React, { Component } from 'react';
import { RoomContext } from '../context';

class FeaturedRooms extends Component {

  static contextType = RoomContext

  render() {
    return (
      <div>
        from featured rooms.
      </div>
    )
  }
  
}

export default FeaturedRooms