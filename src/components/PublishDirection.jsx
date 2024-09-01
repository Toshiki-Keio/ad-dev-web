import React, { useState }  from 'react';
import ROSLIB from 'roslib';
import './InfraredDraw.css';

const PublishDirection = () => {

    const ros = new ROSLIB.Ros({
        // url: 'ws://localhost:9090', // ROSバックエンドのWebSocket URL
        url: 'ws://192.168.195.135:9090', // ROSバックエンドのWebSocket URL
        options: {
            ros_domain_id: '0' // ROS_DOMAIN_IDを設定する
        }});

    const chatterTopic = new ROSLIB.Topic({
        ros,
        name: '/chatter', // パブリッシュするトピック名
        messageType: 'std_msgs/String', // トピックのメッセージタイプ
    });

    const [direction, setDirection] = useState('')

    const pushRight = () => {
        const message = new ROSLIB.Message({
            data: 'Right', // 送信するメッセージ内容
            });
        chatterTopic.publish(message);
        console.log(message);
        setDirection('Right');
    }
    const pushLeft = () => {
        const message = new ROSLIB.Message({
            data: 'Left', // 送信するメッセージ内容
            });
        chatterTopic.publish(message);
        console.log(message);
        setDirection('Left');
    }
    const pushTop = () => {
        const message = new ROSLIB.Message({
            data: 'Forward', // 送信するメッセージ内容
            });
        chatterTopic.publish(message);
        console.log(message);
        setDirection('Forward');
    }
    const pushBottom = () => {
        const message = new ROSLIB.Message({
            data: 'Back', // 送信するメッセージ内容
            });
        chatterTopic.publish(message);
        console.log(message);
        setDirection('Back');
    }

    return (
        <>
        <p>Controller</p>
        <div className="hofff">
            {/* <div className="cross-layout">
                <div className="cross-layout-position-top"><button className = "triangle-top" onClick={pushTop}></button></div>
                <div className="cross-layout-position-left"><button className = "triangle-left" onClick={pushLeft}></button></div>
                <div className="cross-layout-position-right"><button className = "triangle-right" onClick={pushRight}></button></div>
                <div className="cross-layout-position-bottom"><button className = "triangle-bottom" onClick={pushBottom}></button></div>
                <div className="cross-layout-position-center">{direction}</div>
            </div> */}
            <div class="cross-layout">
                <button class="cross-layout-position-top btn cross-key-btn" onClick={pushTop}><span class="top-mark">▲</span></button>
                <button class="cross-layout-position-left btn cross-key-btn" onClick={pushLeft}><span class="left-mark">▲</span></button>
                <button class="cross-layout-position-center btn cross-key-btn"><span class="center-mark">●</span></button>
                <button class="cross-layout-position-right btn cross-key-btn" onClick={pushRight}><span class="right-mark">▲</span></button>
                <button class="cross-layout-position-bottom btn cross-key-btn" onClick={pushBottom}><span class="bottom-mark">▲</span></button>
            </div>
        </div>
        <p>Direction: {direction}</p>
        </>
    // <div>
    //   <input
    //     type="text"
    //     value={messageText}
    //     onChange={(e) => setMessageText(e.target.value)}
    //   />
    // </div>
    );
};

export default PublishDirection;
