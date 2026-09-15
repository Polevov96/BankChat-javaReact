import "./App.css";
import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const menuItems = [
  {
    id: "profile",
    label: "Профиль",
  },
  {
    id: "dashboard",
    label: "Дашборд",
  },
  {
    id: "chats",
    label: "Чаты",
  },
  {
    id: "projects",
    label: "Проекты",
  },
  {
    id: "accounts",
    label: "Аккаунты",
  },
  {
    id: "settings",
    label: "Настройки",
  },
];

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
                  activeSection === item.id
                    ? "menu-item active"
                    : "menu-item"
                }
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </button>
            ))}

            <button
              className={
                activeSection === "projects"
                  ? "menu-item active"
                  : "menu-item"
              }
              onClick={() => setActiveSection("projects")}
            >
              Проекты
            </button>

            <button
              className={
                activeSection === "accounts"
                  ? "menu-item active"
                  : "menu-item"
              }
              onClick={() => setActiveSection("accounts")}
            >
              Аккаунты
            </button>

            <button
              className={
                activeSection === "settings"
                  ? "menu-item active"
                  : "menu-item"
              }
              onClick={() => setActiveSection("settings")}
            >
              Настройки
            </button>
          </nav>
        </aside>

        <section className="content">
          {activeSection === "dashboard" && (
            <div>
              <h1>Дашборд</h1>
              <p>Добро пожаловать в банковскую платформу</p>
            </div>
          )}

          {activeSection === "chats" && (
            <div>
              <h1>Чаты</h1>
              <p>Добро пожаловать в банковскую платформу</p>
            </div>
          )}

          {activeSection === "projects" && (
            <div>
              <h1>Проекты</h1>
              <p>Добро пожаловать в банковскую платформу</p>
            </div>
          )}

          {activeSection === "accounts" && (
            <div>
              <h1>Аккаунты</h1>
              <p>Добро пожаловать в банковскую платформу</p>
            </div>
          )}

          {activeSection === "settings" && (
            <div>
              <h1>Настройки</h1>
              <p>Добро пожаловать в банковскую платформу</p>
            </div>
          )}

          {activeSection === "profile" && (
            <div>
              <h1>Профиль пользователя</h1>
              <p>Данные пользователя</p>
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

export default App;