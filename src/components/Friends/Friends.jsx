import React from 'react';
import Friend from './Friend/Friend';
import './Friends.css';

export default function Friends(props) {

  if(props.friends.length === 0){
    props.setUsers([
      {id: 1, avaImg: 'https://cspromogame.ru//storage/upload_images/avatars/1299.jpg', followed: true, fullName: 'Denis', status: 'Losing my religion', location: {city: 'gde-to', country: 'no in ukr '}},
        {id: 2, avaImg: 'https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgxMTIzOTg1NDk5NDk3ODMy/jayson-tatum-celtics-celebrate-wizards.jpg',followed: true, fullName: 'Jayson T', status: 'Let it be', location: {city: 'Boston', country: 'USA'}},
        {id: 3, avaImg: 'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4MDA2OTUxOTI3OTQ4Njcy/jimmy-butler-nba-free-agency-heatjpg.jpg',followed: false, fullName: 'Jimmy B', status: 'All my friends are heathens, take it slow', location: {city: 'Miami', country: 'USA'}},
        {id: 4, avaImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',followed: true, fullName: 'James L', status: 'Another brich in the wall', location: {city: 'Los-Angeles', country: 'USA'}},
        {id: 5, avaImg: 'https://phantom-marca.unidadeditorial.es/bc4e6f12d6db5fd85d06f60e2c1f1459/resize/1320/f/jpg/assets/multimedia/imagenes/2022/04/08/16493877788427.jpg',followed: false, fullName: 'Ja M', status: 'Sunday morning is everyday, for all I care', location: {city: 'Mephis', country: 'USA'}},
        {id: 6, avaImg: 'https://phantom-marca.unidadeditorial.es/b070ad58d86028430f2c04b228ceb5a2/resize/1320/f/jpg/assets/multimedia/imagenes/2022/03/17/16475338929117.jpg',followed: true, fullName: 'Kevin D', status: "I've risen from the bottom", location: {city: 'New-York', country: 'USA'}},
        {id: 7, avaImg: 'https://www.nba.com/jazz/sites/jazz/files/3.17.22-mitchell-technical-foul.gif',followed: false, fullName: 'Mitchel D', status: 'dust in the wind', location: {city: 'Utah', country: 'USA'}},
        {id: 8, avaImg: 'https://s.yimg.com/ny/api/res/1.2/2GDBKpsexapmr9q8L.LEDg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-04/bd7a8050-bfe9-11ec-9bf5-e55489b82a85',followed: true, fullName: 'Tray Y', status: 'Heart made of glass, my mind of stone', location: {city: 'Atlanta', country: 'USA'}},
        {id: 9, avaImg: 'https://phantom-marca.unidadeditorial.es/dda79f235877f9d5be3736f83c426856/resize/1320/f/jpg/assets/multimedia/imagenes/2022/02/19/16452370004569.jpg',followed: false, fullName: 'Demar D', status: 'So, Annie, are you okay?', location: {city: 'Chicago', country: 'USA'}},

    ])
  }

  let userEl =  props.friends.map(user => <Friend follow={props.follow} unfollow={props.unfollow} user={user}/>)
   
  return (
    <div>
      <h1>Friends</h1>
       {
            userEl
       }
      <button className="show-more-btn">SHOW MORE</button>
    </div>
  )
}
