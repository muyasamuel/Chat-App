import React from 'react'
import ChatIput from './ChatIput';
import Messages from './Messages';

function HomePage() {
  return (
    <div className='text-lg '>
       <Messages />
       <ChatIput />
    </div>
  )
}

export default HomePage;