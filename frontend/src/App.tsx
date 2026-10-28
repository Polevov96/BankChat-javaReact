import "./App.css";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { menuItems } from "./data/menuItems";
import { chats } from "./data/chats";
import ChatList from "./components/ChatList";

function App() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [activeChatId, setActiveChatId] = useState(1);

  const activeItem = menuItems.find((item) => item.id === activeSection);
  const activeChat = chats.find((item) => item.id === activeChatId);
  return (
    <main className="app">
      <section className="glass-panel">
        <Sidebar
          title="BankChat"
          activeSection={activeSection}
          menuItems={menuItems}
          onSelectSection={setActiveSection}
        />
        <section className="content">
          <h1>{activeItem?.label}</h1>
          <p>{activeItem?.description}</p>
          {activeSection === "chats" && (
            <div>
              <p>Выбран чат: {activeChat?.title}</p>
              <ChatList
                chats={chats}
                activeChatId={activeChatId}
                onSelectChat={setActiveChatId}
              />
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

export default App;
