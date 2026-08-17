import './App.css'
import './index.css'

function App() {
  return (<main className="app">
    <section className="glass-panel">
      <aside className="sidebar">
        <h2 className="logo">BankChat</h2>

        <nav className="menu">
          <button className="menu-item active">Dashboard</button>
          <button className="menu-item">Chats</button>
          <button className="menu-item">Projects</button>
          <button className="menu-item">Accounts</button>
          <button className="menu-item">Settings</button>
        </nav>
      </aside>
      <section className="content">
        <h1>BankChat</h1>
        <p>Добро пожаловать в банковскую платформу</p>
      </section>
    </section>
  </main>

  )
}
export default App