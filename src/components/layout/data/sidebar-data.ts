import {
  IconHelp,
  IconLayoutDashboard,
  IconMessages,
  IconPackages,
  IconPalette,
  IconSettings,
  IconTool,
  IconUserCog,
  IconUsers,
} from '@tabler/icons-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'Сабира',
    email: 'sabira@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navGroups: [
    {
      title: 'Общие',
      items: [
        {
          title: 'Дашборд',
          url: '/',
          icon: IconLayoutDashboard,
        },
         {
          title: 'Пациенты',
          url: '/users',
          icon: IconUsers,
        },
        {
          title: 'Apps',
          url: '/apps',
          icon: IconPackages,
        },
        {
          title: 'Chats',
          url: '/chats',
          badge: '3',
          icon: IconMessages,
        },
      ],
    },
    {
      title: 'Другие',
      items: [
        {
          title: 'Настройки',
          icon: IconSettings,
          items: [
            {
              title: 'Профиль',
              url: '/settings',
              icon: IconUserCog,
            },
            {
              title: 'Аккаунт',
              url: '/settings/account',
              icon: IconTool,
            },
            {
              title: 'Внешний вид',
              url: '/settings/appearance',
              icon: IconPalette,
            }
          ],
        },
        {
          title: 'Помощь',
          url: '/help-center',
          icon: IconHelp,
        },
      ],
    },
  ],
}
