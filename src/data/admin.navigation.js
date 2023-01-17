export const adminNavigation = [
    {
        label: 'Избранное', key: '1' , items: [
            {
                label: 'Рабочий стол', icon: 'pi pi-fw pi-chart-bar', to: '/admin',
            },
            {
                label: 'Заказы', icon: 'pi pi-fw pi-cart-plus', to: '/admin/order',
            },
            {
                label: 'Пользователи', icon: 'pi pi-fw pi-users', to: '/admin/users',
            },
            {
                label: 'Отели', icon: 'pi pi-fw pi-home', to: '/admin/hotel',
            }
        ],
    },
    {
        label: 'Приложение', items: [
            {
                label: 'Настройки', icon: 'pi pi-cog'
            },
            {
                label: 'Профиль', icon: 'pi pi-user'
            },
            {
                label: 'Уведомления', icon: 'pi pi-bell'
            }
        ],
    }
];
