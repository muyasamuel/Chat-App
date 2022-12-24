'use client'

import fetcher from "../utilis/fetchMessages";
import useSWR from 'swr'
import { Message } from "../typings";
import MessageComponent from "./MessageComponent";



function Messages() {

    const { data : messages, error, mutate } = useSWR<Message[]>('/api/getMessages', fetcher);

  return (
    <div className="space-y-4  pt-10 px-5 pb-32 max-w-2xl">
       {messages?.map(message => (
        <MessageComponent key={message.id} message={message}/>
         
       )
        
       )}
    
    </div>
  )
}

export default Messages