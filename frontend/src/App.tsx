import "./App.css";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { menuItems } from "./data/menuItems";

function App() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const activeItem = menuItems.find((item) => item.id === activeSection);

  return (
    <main className="app">
      <section className="glass-panel">
        <Sidebar
          title="BankChat"
          activeSection={activeSection}
          menuItems={menuItems}
          setActiveSection={setActiveSection}
        />
        <section className="content">
          <h1>{activeItem?.label}</h1>
          <p>{activeItem?.description}</p>
        </section>
      </section>
    </main>
  );
}

export default App;
