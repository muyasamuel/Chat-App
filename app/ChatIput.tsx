'use client'

import  { useState } from "react";

function ChatIput() {
  const [input, setInput] = useState("");

  const addMessage = (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!input)return;

    const message = input;

    setInput("")


    

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
