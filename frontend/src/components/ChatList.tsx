import type { Chat } from "../types/chat";

type ChatListProps = {
  chats: Chat[];
  activeChatId: number;
  onSelectChat: (id: number) => void;
};

function ChatList({ chats, onSelectChat, activeChatId }: ChatListProps) {
  return (
    <div>
      {chats.map((chat) => (
        <button
          className={
            chat.id === activeChatId ? "chat-item active" : "chat-item"
          }
          key={chat.id}
          onClick={() => onSelectChat(chat.id)}
        >
          {chat.title}
        </button>
      ))}
    </div>
  );
}
export default ChatList;
