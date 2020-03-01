import './business-with-dock-opened.css';
import React from 'react'
import { Link } from "react-router-dom";
import BalloonWrenchPic from '../../buttons/mac-bar/balloon-wrench-button/balloon-wrench.svg';
import TwirlPic from './images/tornado-filled.svg';
import PreviousTemplatePic from '../../buttons/mac-bar/previous-template-button/previous.svg';
import NextTemplatePic from '../../buttons/mac-bar/next-template-button/next.svg';
import NavPic from '../../buttons/mac-bar/nav-button/nav.svg';
import HistoryPic from '../../buttons/mac-bar/history-button/history.svg';
import MenuOverflowPic from '../../buttons/mac-bar/menu-overflow/illuminati.svg';
import BackButtonPic from './images/back.svg';
import ForwardButtonPic from './images/forward.svg';
import SnakePic from './images/snake.svg';
import SearchBar from './images/SearchBar.png';
import IrisPic from '../../../images/iris.svg'
import SoundPic from '../../../images/sound.svg'

function BusinessWithDockOpened() {

    return (
        <div className="business-panel-parent">
        <Link to="/Business">
        <div className="business-panel">
        <div className="search-bar-parent">
        <img className="search-bar-png3" src={SearchBar} alt="-" />
        </div>
        <img className="back-button-svg" src={ BackButtonPic } alt="some" />
        <img className="forward-button-svg" src={ ForwardButtonPic } alt="some" />
        <img className="iris-svg" src={ IrisPic } alt="some" />
            <img className="balloon-wrench-svg" src={ BalloonWrenchPic } alt="some" />
            <img className="previous-template-svg" src={ PreviousTemplatePic } alt="some" />
            <Link to="/ConsumerWithDockOpened"><img className="twirl-svg" src={ TwirlPic } alt="some" /></Link>
            <img className="next-template-svg" src={ NextTemplatePic } alt="some" />
            <img className="nav-svg" src={ NavPic } alt="some" />
            <img className="history-svg" src={ HistoryPic } alt="some" />
            <img className="menu-overflow-svg" src={ MenuOverflowPic } alt="some" />
            <img className="snake-svg" src={ SnakePic } alt="some" />
            <img className="sound-svg" src={ SoundPic } alt="some" />
        </div>
        </Link>
        </div>


    );
  }
  
  export default BusinessWithDockOpened;
