"use client";

import fetcher from "../utilis/fetchMessages";
import useSWR from "swr";
import { Message } from "../typings";
import MessageComponent from "./MessageComponent";
import { useEffect } from "react";
import { clientPusher } from "../pusher";

type Props = {
  initialMessages : Message[]
}



function Messages({initialMessages} : Props) {
  const {
    data: messages,
    error,
    mutate,
  } = useSWR<Message[]>("/api/getMessages", fetcher);

  useEffect(() => {
    const channel = clientPusher.subscribe("messages");
   
    if (!messages) {
      mutate(fetcher);
    } else {
      channel.bind("new-message", async (data: Message) => {
        if(messages?.find(message => message.id === data.id)) return;
        mutate(fetcher, {
          optimisticData: [data, ...messages!],
          rollbackOnError: true,
        });
      });
    }

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [mutate, messages]);

  return (
    <div className="space-y-4  pt-10 px-5 pb-32 max-w-full ">
      {(messages || initialMessages).map((message) => (
        <MessageComponent key={message.id} message={message} />
      ))}
    </div>
  );
}

export default Messages;




