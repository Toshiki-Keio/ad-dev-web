import React, {useState} from 'react';
import './InfraredDraw.css';

const InfraredData = (props) => {
  const [open, setOpen] = useState(false)

  const [direction, setDirection] = useState('')

  const toggle = () => {
    setOpen(prevState => !prevState)
  }

  const pushRight = () => {
    setDirection('Right')
  }
  const pushLeft = () => {
    setDirection('Left')
  }

  const pushTop = () => {
    setDirection('Forward')
  }

  const pushBottom = () => {
    setDirection('Back')
  }

  return (
    <>
    <div className="hofff">
    {/* <div className="cross-layout">
    <div className="cross-layout-position-top"><button className = "triangle-top" onClick={pushTop}></button></div>
    <div className="cross-layout-position-left"><button className = "triangle-left" onClick={pushLeft}></button></div>
    <div className="cross-layout-position-right"><button className = "triangle-right" onClick={pushRight}></button></div>
    <div className="cross-layout-position-bottom"><button className = "triangle-bottom" onClick={pushBottom}></button></div>
    <div className="cross-layout-position-center">{direction}</div>
    </div> */}
    <div class="cross-layout">
      <button class="cross-layout-position-top btn cross-key-btn"><span class="top-mark">▲</span></button>
      <button class="cross-layout-position-left btn cross-key-btn"><span class="left-mark">▲</span></button>
      <button class="cross-layout-position-center btn cross-key-btn"><span class="center-mark">●</span></button>
      <button class="cross-layout-position-right btn cross-key-btn"><span class="right-mark">▲</span></button>
      <button class="cross-layout-position-bottom btn cross-key-btn"><span class="bottom-mark">▲</span></button>
    </div>
    </div>
    <button className = "onoff" onClick={toggle}>{open ? 'ON': 'OFF'}</button>
    </>
  );
};

export default InfraredData;