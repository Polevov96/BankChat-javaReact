import type { MenuItem } from "../types/menu";

type SidebarProps = {
  title: string;
  activeSection: string;
  menuItems: MenuItem[];
  setActiveSection: (section: string) => void;
};

function Sidebar({
  activeSection,
  menuItems,
  setActiveSection,
  title,
}: SidebarProps) {
  return (
    <aside className="sidebar">
      <h2 className="logo">{title}</h2>
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
  );
}

export default Sidebar;
