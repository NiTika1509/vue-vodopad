import { createApp } from 'vue'
import App from './App.vue'

/*
*  ЗАВИСИМОСТИ
*/
import './registerServiceWorker';
import router from './router';
import store from './store';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

export const hash_config = {
    algorithm: "SCRYPT",
    base64_signer_key: "Hx16nLKPTKf/Zhw2vy9MJFHhd2fLAp+JDVKJa6pOndGzslghurWsIvvubaCgAACbpJ9nlALnkpsXyRWrmA7rgw==",
    base64_salt_separator: "Bw==",
    rounds: 8,
    mem_cost: 14,
}

/*
*  PrimeVue :: ЗАВИСИМОСТИ
*/

import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import PanelMenu from 'primevue/panelmenu';
import TieredMenu from 'primevue/tieredmenu';
import CascadeSelect from 'primevue/cascadeselect';
import PrimeSplitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import PrimeBadge from 'primevue/badge';
import PrimeBreadcrumb from 'primevue/breadcrumb';
import BadgeDirective from 'primevue/badgedirective';
import Checkbox from 'primevue/checkbox';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import Tag from 'primevue/tag';
import Rating from 'primevue/rating';
import Sidebar from 'primevue/sidebar';
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';
import Message from 'primevue/message';
import OverlayPanel from 'primevue/overlaypanel';
import Image from 'primevue/image';
import Galleria from 'primevue/galleria';
import ProgressSpinner from 'primevue/progressspinner';
import TabMenu from 'primevue/tabmenu';
import Skeleton from 'primevue/skeleton';
import ToggleButton from 'primevue/togglebutton';
import Carousel from 'primevue/carousel';

/*
*  ИМПОРТЫ СТИЛЕЙ
*/
import '@/assets/index.sass'
import '@csstools/normalize.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/saga-blue/theme.css'       //theme



/*
*   КОНСТАНТЫ : FireBase
*/

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyC0xgGz8eKJ1G8M1F59pIKSbTb-7XW4mBo",
    authDomain: "vodopad-8df2c.firebaseapp.com",
    projectId: "vodopad-8df2c",
    storageBucket: "vodopad-8df2c.appspot.com",
    messagingSenderId: "296658067314",
    appId: "1:296658067314:web:788b033d0e44e633bc47eb",
    databaseURL:"https://vodopad-8df2c-default-rtdb.firebaseio.com"
});

export const auth = getAuth(firebaseConfig);
export const storage = getStorage(firebaseConfig, 'gs://vodopad-8df2c.appspot.com')


const app = createApp(App)
app.use(PrimeVue)
app.component('DialogPrime', Dialog);
app.component('PanelMenu', PanelMenu);
app.component('TieredMenu', TieredMenu);
app.component('CascadeSelect', CascadeSelect);
app.component('PrimeSplitter', PrimeSplitter);
app.component('SplitterPanel', SplitterPanel);
app.component('PrimeBadge', PrimeBadge);
app.component('PrimeCheckbox', Checkbox);
app.component('PrimeBreadcrumb', PrimeBreadcrumb);
app.component('DataTable', DataTable);
app.component('TableColumn', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('TableRow', Row);
app.component('PrimeSidebar', Sidebar);
app.component('PrimeRating', Rating);
app.component('PrimeImage', Image);
app.component('PrimeDivider', Divider);
app.component('PrimeAvatar', Avatar);
app.component('FormPassword', Password);
app.component('InputText', InputText);
app.component('PrimeButton', Button);
app.component('ErrorMessage', Message);
app.component('OverlayPanel', OverlayPanel);
app.component('ProgressSpinner', ProgressSpinner);
app.component('PrimeSkeleton', Skeleton);
app.component('PrimeGalleria', Galleria);
app.component('ToggleButton', ToggleButton);
app.component('TabMenu', TabMenu);
app.component('PrimeCarousel', Carousel);
app.component('PrimeTag', Tag);
app.directive('badge', BadgeDirective);


app.use(store).use(router).mount('#app');
