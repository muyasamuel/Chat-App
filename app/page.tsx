import { Message } from "../typings";
import ChatIput from "./ChatIput";
import Messages from "./Messages";

async function HomePage() {
  const data = await fetch(`${process.env.VERCEL_URL || "http://localhost:3000"}/api/getMessages`).then((res) =>
    res.json()
  );
   
  const messages: Message[] = data.messages;





  return (
    <div className="text-lg ">
      <Messages  initialMessages={messages} />
      <ChatIput />
    </div>
  );
}

export default HomePage;
