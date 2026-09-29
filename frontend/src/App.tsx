import "./App.css";
import { useState } from "react";

type MenuItem = {
  id: string;
  label: string;
  description: string;
};

function App() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const menuItems: MenuItem[] = [
    {
      id: "profile",
      label: "Профиль",
      description: "Данные пользователя",
    },
    {
      id: "dashboard",
      label: "Дашборд",
      description: "Здесь будут Дашборд пользователя",
    },
    {
      id: "chats",
      label: "Чаты",
      description: "Здесь будут Чаты пользователя",
    },
    {
      id: "projects",
      label: "Проекты",
      description: "Здесь будут Проекты пользователя",
    },
    {
      id: "accounts",
      label: "Аккаунты",
      description: "Здесь будут Аккаунты пользователя",
    },
    {
      id: "settings",
      label: "Настройки",
      description: "Здесь будут настройки пользователя",
    },
    {
      id: "notifications",
      label: "Уведомления",
      description: "Здесь будут уведомления пользователя",
    },
  ];

  const activeItem = menuItems.find((item) => item.id === activeSection);

  return (
    <main className="app">
      <section className="glass-panel">
        <aside className="sidebar">
          <h2 className="logo">BankChat</h2>

          <nav className="menu">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={
                  activeSection === item.id ? "menu-item active" : "menu-item"
                }
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        <section className="content">
          <h1>{activeItem?.label}</h1>
          <p>{activeItem?.description}</p>
        </section>
      </section>
    </main>
  );
}

export default App;
