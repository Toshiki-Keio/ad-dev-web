import React from 'react';
import './InfraredDraw.css';

const InfraredDraw = (props) => {
  return (
    <>
    <div className = "container">
    <p>Data: {props.data.join(', ')}</p>
    </div>
    <div className = "container">
    <div className={props.data[0] ? "circle white" : "circle red"}></div>
    <div className={props.data[1] ? "circle white" : "circle red"}></div>
    <div className={props.data[2] ? "circle white" : "circle red"}></div>
    <div className={props.data[3] ? "circle white" : "circle red"}></div>
    <div className={props.data[4] ? "circle white" : "circle red"}></div>
    <div className={props.data[5] ? "circle white" : "circle red"}></div>
    </div>
    </>
  );
};

export default InfraredDraw;