'use client'
import useSWR from 'swr'
import { Message } from "../typings";

import  { useState } from "react";
import { v4 as uuid } from "uuid";
import fetcher from '../utilis/fetchMessages';


function ChatIput() {
  const [input, setInput] = useState("");

 const { data, error, mutate } = useSWR('/api/user/123', fetcher);

console.log(data);

  const addMessage = (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!input)return;

    const messageToSend = input;

    setInput("")

    const id = uuid();

    const message: Message = {
        id: id,
        message: messageToSend,
        created_at: Date.now(),
        username: "samuel muya",
        profilePic: "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1600",
        email: "iamsamuel6535@gmail.com"

    }

    const uploadMessageToUpstash = async () => {
        const res = await fetch("/api/addMessage", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message
            })
        });

        const data = await res.json();
        console.log("Message", data)
    };

    uploadMessageToUpstash();

   


    

  }

  return (
    <form onSubmit={ addMessage} className=" fixed bottom-0 w-full flex py-10 px-4 space-x-2 border-t border-gray-100    ">
      <input
        type="text"
        value={input}
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

export default ChatIput;