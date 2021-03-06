import './menu-overflow-open.css';
import React from 'react'
import { Link } from "react-router-dom";
import BalloonWrenchFilledPic from '../../buttons/mac-bar/balloon-wrench-button/balloon-wrench-filled.svg';
import TwirlPic from '../../buttons/mac-bar/twirl-button/twirl.svg';
import PreviousTemplatePic from '../../buttons/mac-bar/previous-template-button/previous.svg';
import NextTemplatePic from '../../buttons/mac-bar/next-template-button/next.svg';
import NavPic from '../../buttons/mac-bar/nav-button/nav.svg';
import HistoryPic from '../../buttons/mac-bar/history-button/history.svg';
import MenuOverflowPic from './menu-open.svg';
import BackButtonPic from '../../consumer-dock/consumer-with-dock-opened/images/back.svg';
import ForwardButtonPic from '../../consumer-dock/consumer-with-dock-opened/images/forward.svg';
import SnakePic from '../../business-dock/business-with-dock-opened/images/snake.svg';

function BalloonWrenchActive() {
    return (
      <Link to="/Consumer">
      <div  className="consumer-dock-panel">
      <img className="back-button-svg" src={ BackButtonPic } alt="some" />
      <img className="forward-button-svg" src={ ForwardButtonPic } alt="some" />
      <Link to="/ConsumerWithDockOpened"><img className="balloon-wrench-svg" src={ BalloonWrenchFilledPic } alt="some" /></Link>
          <img className="previous-template-svg" src={ PreviousTemplatePic } alt="some" />
          <Link to="/BusinessWithDockOpened"><img className="twirl-svg" src={ TwirlPic } alt="some" /></Link>
          <img className="next-template-svg" src={ NextTemplatePic } alt="some" />
          <img className="nav-svg" src={ NavPic } alt="some" />
          <img className="history-svg" src={ HistoryPic } alt="some" />
          <Link to="/MenuOverflowOpen"><img className="menu-overflow-svg" src={ MenuOverflowPic } alt="some" /></Link>
          <img className="snake-svg" src={ SnakePic } alt="some" />
      </div>
      </Link>


  );
}
  
  export default BalloonWrenchActive;




