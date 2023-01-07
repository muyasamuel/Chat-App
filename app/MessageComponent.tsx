import { Message } from "../typings";
import Image from "next/image";

type Props = {
  message: Message;
};

function MessageComponent({ message }: Props) {
    const isUser = true;



  return (
    <div className={`flex w-fit items-centre ${isUser && "ml-auto"} ` }>
      <div className={`flex-shrink-0 ${isUser && "order-3"}`}>
        <Image
          className="rounded-full mx-2 "
          src="https://images.pexels.com/photos/14211152/pexels-photo-14211152.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          width={50}
          height={10}
          alt="logo"
        />
      </div>


      <div>
        <p className={`text-[0.65rem] px-[2px] pb-[2px] ${isUser ? "text-blue-400 text-right" : "text-red-400 text-left"}`}>{message.username}</p>

        <div className="flex items-end">
            <div className={`px-3 py-2  w-fit rounded-lg text-white ${isUser ? "bg-blue-500 order-2  ml-auto" : "bg-red-500 "}`}>
               <p>{message.message}</p>
            </div>
          
            
            <p className={`text-[0.65rem] px-2 italic text-gray-300 ${isUser && " text-right"}`}>{new Date(message.created_at).toLocaleString()}</p>
            
        </div>
      </div>
    </div>
  );
}

export default MessageComponent;
