import { Message } from "../typings";
import Image from "next/image";
import { useSession } from "next-auth/react";
import TimeAgo from "react-timeago";

type Props = {
  message: Message;
};

function MessageComponent({ message }: Props) {
  const { data: session } = useSession();
  const isUser = session?.user?.email === message.email;

  return (
    <div className={`flex w-fit items-centre ${isUser && "ml-auto"} `}>
      <div className={`flex-shrink-0 ${isUser && "order-3"}`}>
        <Image
          className="rounded-full mx-2 mt-3 "
          src={message.profilePic}
          width={40}
          height={10}
          alt="profile pic"
        />
      </div>

      <div>
        <p
          className={`text-[0.65rem] px-[2px] pb-[2px] ${
            isUser ? "text-blue-400 text-right" : "text-red-400 text-left"
          }`}
        >
          {message.username}
        </p>

        <div className="flex items-end">
          <div
            className={`px-3 py-[0.5rem]  w-fit rounded-lg text-white ${
              isUser ? "bg-blue-500 order-2  ml-auto" : "bg-red-500 "
            }`}
          >
            <p>{message.message}</p>
          </div>

          <p
            className={`text-[0.65rem] px-2 italic text-gray-300 ${
              isUser && " text-right"
            }`}
          >
            <TimeAgo date={new Date(message.created_at)} />
            
          </p>
        </div>
      </div>
    </div>
  );
}

export default MessageComponent;
