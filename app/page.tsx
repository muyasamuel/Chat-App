import { Message } from "../typings";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import { Providers } from "./providers";
import { unstable_getServerSession } from "next-auth/next";

async function HomePage() {
  const data = await fetch(`${process.env.VERCEL_URL || 'http://localhost:3000'}/api/getMessages`).then(
    (res) => res.json()
  );

  const messages: Message[] = data.messages;
  const session = await unstable_getServerSession();

  return (
    <Providers session={session}>
      <main>
        <Messages initialMessages={messages} />
        <ChatInput session={session} />
      </main>
    </Providers>
  );
}

export default HomePage;
