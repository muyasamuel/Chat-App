import { Message } from "../typings";
import ChatInput from "./ChatInput";
import Messages from "./Messages";

async function HomePage() {
  const data = await fetch("http://localhost:3000/api/getMessages").then(
    (res) => res.json()
  );

  const messages: Message[] = data.messages;

  return (
    <main>
      <Messages initialMessages={messages} />
      <ChatInput />
    </main>
  );
}

export default HomePage;
