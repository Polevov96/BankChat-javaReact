import type { MenuItem } from "../types/menu.ts";

export const menuItems: MenuItem[] = [
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
