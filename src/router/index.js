import { createRouter, createWebHistory } from 'vue-router'

const isAuth = localStorage.getItem('token');
const userAdmin = localStorage.getItem('admin');


// eslint-disable-next-line no-unused-vars
const ListenerAuth = function (to, from, next){
  if(isAuth) next({name: 'home'});
  else if(userAdmin) next({name: 'admin'});
  else next();
};

const ListenerAdminGuard = function (to, from, next){
  if(!isAuth) next({name: 'login'});
  else if (!userAdmin) next({name: 'home'});
  else next();
}




const routes = [
  {
    path: '/',
    name: 'home',
    meta:{
      needAuth: false,
    },
    component: () => import('../views/Page/PageHome.vue')
  },
  {
    path: '/hotels',
    name: 'hotels',
    meta:{
      needAuth: false,
      breadCrumbs: () => {
        return [
          {
            home: {icon: 'pi pi-home', to: "/"}
          },
          [{label: 'Отели'}]
        ]
      }
    },
    component: () => import('../views/Page/HotelPage.vue')
  },
  {
    path: '/hotels/:id',
    name: "DetailHotel",
    children: [
      {
        path: 'list',
        name: 'rooms-list',
        component: () => import('../views/Page/RoomsList.vue')
      },
      {
        path: 'view',
        name: 'rooms-view',
        component: () => import('../views/Page/RoomsView.vue')
      }
    ],
    meta:{
      needAuth: false,
      breadCrumbs: (this_path) => {
        return [
          {
            home: {icon: 'pi pi-home', to: "/"}
          },
          [
            {label: 'Отели',to:'/hotels'},
            {label: this_path.params.id}
          ]
        ]
      }
    },
    component: () => import('../views/Page/DetailHotel.vue')
  },
  {
    path: '/login',
    name: 'login',
    beforeEnter: ListenerAuth,
    meta: {
      layout: 'auth',
    },
    component: () => import('../views/Auth/AuthLogin.vue')
  },
  {
    path: '/register',
    name: 'register',
    beforeEnter: ListenerAuth,
    meta: {
      layout: 'auth',
    },
    component: () => import('../views/Auth/AuthRegister.vue')
  },

  {
    path: '/personal/:id',
    name: 'user',
    beforeEnter: ListenerAdminGuard,
    component:() => import('../views/Admin/Settings/UserSettings'),
    meta: {
      layout: 'default',
      userid: null,
    }
  },


  {
    path: '/admin',
    name: 'admin',
    beforeEnter: ListenerAdminGuard,
    component: () => import('../views/Admin/AdminDashboard.vue'),
    meta: {
      layout:'admin',
      breadCrumbs: () => {
        return [
        ]
      }},
  },
  {
    path: '/admin/order',
    name: 'admin-order',
    component: () => import('../views/Admin/AdminOrder.vue'),
    beforeEnter: ListenerAdminGuard,
    meta: {
      layout:'admin',
      breadCrumbs: () => {
        return [
          {home: {icon:'pi pi-home', to: '/admin'}},
          [{label: "Заказы"}],
        ]
      }},
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/Admin/AdminUsers.vue'),
    beforeEnter: ListenerAdminGuard,
    meta: {
      layout:'admin',
      breadCrumbs: () => {
        return [
          {label: "Пользователи"},
        ]
      }},
  },
  {
    path: '/admin/hotel',
    name: 'admin-hotel',
    component: () => import('../views/Admin/AdminHotel.vue'),
    beforeEnter: ListenerAdminGuard,
    meta: {
      layout: 'admin',
      breadCrumbs: () => {
        return [
            {label: "Отели"},
        ]
      }},
  },
  // 404 ОШИБКА :: ПОДКЛЮЧЕНИЕ КОМПОНЕНТА
  // {
  //   path: '*',
  //   name: '404',
  //   component: () => import('../views/NoPage.vue'),
  //   meta:{
  //     layout: 'default'
  //   }
  // }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
