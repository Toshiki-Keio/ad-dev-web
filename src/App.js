import React, { useState, useEffect, useRef } from 'react';
import {InfraredData, InfraredDraw, PublishDirection} from './components';
import ROSLIB from 'roslib';
import './App.css';
import logoImage from "./InfraredLogo.png";

function App() {
  const [messageData, setMessageData] = useState([]);

  useEffect(() => {
    const ros = new ROSLIB.Ros({
      // url: 'ws://192.168.1.238:9090',
      url: 'ws://192.168.195.135:9090',
      options: {
        ros_domain_id: '0',
      },
    });

    const listener = new ROSLIB.Topic({
      ros: ros,
      name: '/infrared_sensor',
      messageType: 'std_msgs/Int32MultiArray',
    });

    listener.subscribe((message) => {
      setMessageData(message.data);
    });
    // コンポーネントがアンマウントされた時にメッセージの購読を解除
    return () => {
      listener.unsubscribe();
    };
  }, []);  // [] はコンポーネントがマウントされたときに1度だけ実行することを示す

  return (
    <div className="App">
      <header className="App-header">
        <img src={logoImage} width={300} alt = "Infrared Sensors"/>
      </header>
      <body>
        <InfraredDraw data = {messageData}/>
        <PublishDirection/>
      </body>
      <footer className="App-footer">© 2023 fukui</footer>
    </div>
  );
}

export default App;


// import React, { Component } from 'react';
// import ROSLIB from 'roslib';
// import './App.css';
// // import React, { ComponentuseRef, useEffect } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.canvasRef = React.createRef();  // Refを初期化

//     this.state = {
//       messageData: [],
//     };
//     // ROS 2 WebSocket設定
//     const ros = new ROSLIB.Ros({
//       url: 'ws://192.168.11.10:9090',
//       options: {
//         ros_domain_id: '0' // ROS_DOMAIN_IDを設定する
//     }});
//     // ROS 2 メッセージ購読
//     const listener = new ROSLIB.Topic({
//       ros: ros,
//       name : "/infrared_sensor",
//       messageType : "std_msgs/Int32MultiArray"
//     });
//     // メッセージを受信したときの処理
//     listener.subscribe((message) => {
//       this.setState({ messageData: message.data });
//       this.drawRectangle(this.state.messageData); // メッセージデータに基づいて四角形を描画
//     });

//     // const canvas = document.createElement('canvas');
//     // canvas.width = 600;
//     // canvas.height = 400;
//     // document.body.appendChild(canvas);
//     // const ctx = canvas.getContext('2d');
//     // ctx.strokeRect(0,0,80,80);
//     // ctx.fillRect(100,0,80,80);
//   }

//   componentDidMount() {
//     // Canvasに四角形を描画
//     this.drawRectangle(this.state.messageData);
//   }

//   drawRectangle(text) {
//     console.log(text);
//     const canvas = this.canvasRef;
//     const ctx = canvas.getContext('2d');

//     // const y = this.state.messageData[1] || 0; // y座標
//     // const width = 50; // 四角形の幅
//     // const height = 50; // 四角形の高さ

//     // ctx.fillStyle = 'red';
//     // ctx.fillRect(0, 0, width, height);
//     // ctx.fillRect(51, 0, width, height);
//     // ctx.fillRect(102, 0, width, height);
//     // ctx.fillRect(153, 0, width, height);
//     // ctx.fillRect(204, 0, width, height);

//     // ctx.fillStyle = 'white';
//     // ctx.fillRect(0, y, width*this.state.messageData[0], height);
//     // ctx.fillRect(51, y, width*this.state.messageData[1], height);
//     // ctx.fillRect(102, y, width*this.state.messageData[2], height);
//     // ctx.fillRect(153, y, width*this.state.messageData[3], height);
//     // ctx.fillRect(204, y, width*this.state.messageData[4], height);

//     const x = 0; // x座標
//     const y = 0; // y座標
//     const width = 50; // 四角形の幅
//     const height = 50; // 四角形の高さ

//     ctx.fillStyle = 'red';
//     ctx.fillRect(0, 0, width, height);
//     ctx.fillRect(51, 0, width, height);
//     ctx.fillRect(102, 0, width, height);
//     ctx.fillRect(153, 0, width, height);
//     ctx.fillRect(204, 0, width, height);

//     ctx.fillStyle = 'white';
//     ctx.fillRect(0, y, width*text[0], height);
//     ctx.fillRect(51, y, width*text[1], height);
//     ctx.fillRect(102, y, width*text[2], height);
//     ctx.fillRect(153, y, width*text[3], height);
//     ctx.fillRect(204, y, width*text[4], height);

//   }
  
//   render() {
//     return (
//       <div>
//         <header className='App-header'>ROS 2 Message Subscription and Canvas</header>
//         <p>Data: {this.state.messageData.join(', ')}</p>
//         <canvas
//           ref={this.canvasRef}
//           width={500}
//           height={500}
//           style={{ border: '1px solid black' }}
//         ></canvas>
//         <footer></footer>
//       </div>
//     );
//   }
// }

// export default App;
