"use client";

import useSWR from 'swr'
import { Message } from "../typings";
import  { FormEvent ,useState } from "react";
import { v4 as uuid } from "uuid";
import fetcher from '../utilis/fetchMessages';
// import { unstable_getServerSession } from 'next-auth/next';


function ChatInput() {

 const session = true;
  
  const [input, setInput] = useState("");
 

  const { data : messages, error, mutate } = useSWR<Message[]>('/api/getMessages', fetcher);

 



  const addMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!input || !session )return;

    const messageToSend = input;
  
    setInput("")

    const id = uuid();



    const message: Message = {
        id: id,
        message: messageToSend,
        created_at: Date.now(),
        username: "njomo",
        profilePic: "https://images.pexels.com/photos/15846195/pexels-photo-15846195.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        email: "njomo@gmail.com"

    }


    
   

    const uploadMessageToUpstash = async () => {
        const data = await fetch("/api/addMessage", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message
            })
        }).then((res) => res.json());
       
      return  [ data.message , ...messages!]
    };

    await mutate(uploadMessageToUpstash, {
        optimisticData: [message, ...messages!],
        rollbackOnError: true,

    })

    

  }

  return (
    <form onSubmit={ addMessage} className=" fixed bottom-0 w-full flex py-10 px-4 space-x-2 border-t border-gray-100  bg-white   ">
      <input
        type="text"
        value={input}
        disabled={!session}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter Message Here.."
        className="flex-1 rounded border border-gray-600 focus:outline-none
        focus:ring-2 focus:ring-blue-600 focus:border-transparent 
        px-5 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button 
      disabled={!input}
      className="bg-blue-500 hover:bg-blue-700 text-white  px-7 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed">
        Send
      </button>
    </form>
  );
}

export default ChatInput;
