import CommunicationServer from './CommunicationServer';
import ControlNews from './ControlNews';
import InformMessage from './InformMessage';
import NewsWidjet from './NewsWidget';

const container = document.querySelector('.container');
const informBox = document.querySelector('.inform_box');

// const port = 'http://localhost:7070';
const port = 'https://loading-backend-server.onrender.com';

const widget = new NewsWidjet(container);
const communicator = new CommunicationServer(port);
const inform = new InformMessage(informBox);
const controller = new ControlNews(widget, communicator, inform);

controller.activation();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js', { scope: './' })
    .then((reg) => {
      // регистрация сработала
      console.log(`Registration succeeded. Scope is ${reg.scope}`);
    }).catch((error) => {
      // регистрация прошла неудачно
      console.log(`Registration failed with ${error}`);
    });
}
