import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//елемент - самая простая часть реакта
// const headerTitle = <h1 className="header--tile">Hellom World</h1>/кта

// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//     }

//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }

//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }


//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }


//     render() {
//         return (
//             <div>
//                 <h1>Привет, мир!</h1>
//                 <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />
    //Обреновление елемента через кажыдую секунду, при помощи вызова функции.
    // Которая создает новые елемент при каждом вызове.
    // setInterval(tick, 1000)



  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

