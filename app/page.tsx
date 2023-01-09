import React from 'react'
import { Message } from '../typings';
import ChatIput from './ChatIput';
import Messages from './Messages';

 async function HomePage() {

  // const data = await fetch(`${process.env.VERCEL_URL || "https://localhost.3000"}/api/getMessages`).then((res) => res.json());
  // const messages: Message[]  = data.messages;
 

  return (
    <div className='text-lg '>
       <Messages  />
       <ChatIput />
    </div>
  )
}

export default HomePage;