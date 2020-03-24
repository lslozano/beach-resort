import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext();
/*
First one is a provider (RoomContext) 
and second one is a consumer.

Consumer:
<RoomContext.Provider value={'hello'}
*/
class RoomProvider extends Component {

  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  };

  
  formatData(items) {
    
    let tempItems = items.map(item => {
      let id = item.sys.id
      let images = item.fields.images.map(image => image.fields.file.url)
      let room = {...item.fields, images, id}
      return room
    });
    
    return tempItems;
    
  }
  
  // getData
  
  componentDidMount() {
    // this.getData
    let rooms = this.formatData(items)
  }

  render() {
    return (
      <RoomContext.Provider value={{...this.state}}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };