import type { Chat } from "../types/chat";

type ChatListProps = {
  chats: Chat[];
  onSelectChat: (id: number) => void;
};

function ChatList({ chats, onSelectChat }: ChatListProps) {
  return (
    <div>
      {chats.map((chat) => (
        <button key={chat.id} onClick={() => onSelectChat(chat.id)}>
          {chat.title}
        </button>
      ))}
    </div>
  );
}
export default ChatList;
