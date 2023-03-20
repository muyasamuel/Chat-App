// import { unstable_getServerSession } from "next-auth/next";
import { Message } from "../typings";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import { Providers } from "./providers";




async function HomePage() {
  const data = await fetch("http://localhost:3000/api/getMessages").then((res) =>
    res.json()
  );
   
  const messages: Message[] = data.messages;
  // const session = await unstable_getServerSession();

 

  return (
    <Providers >
      <main>
        <Messages initialMessages={messages} />
        <ChatInput  />
      </main>
    </Providers>
  );
}

export default HomePage;
