import Sender from './sender';

export default class RapidSender extends Sender {
  constructor () {
    super('https://mmo-games.p.rapidapi.com', {
      'x-rapidapi-key': '12a70d5ec5mshfdeead2ebb5dc99p15af64jsnd8c5206ed82a',
      'x-rapidapi-hos':  'video-game-news.p.rapidapi.com',
    });
  }
};
