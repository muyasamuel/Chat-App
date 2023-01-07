import Pusher from "pusher";
import ClientPusher from 'pusher-js';

export const serverPusher = new Pusher({
    appId: "1534171",
    key:  "9e569932aa138a698413",
    secret:  "eaa229626510f7047819",
    cluster: "mt1",
    useTLS: true
  });


export const clientPusher = new ClientPusher('94f5a7de51a0916446f8', {
    cluster: 'mt1',
    forceTLS: true,
    
  });