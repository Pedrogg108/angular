import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { Ofertas } from './pages/ofertas/ofertas';
import { NewProducts } from './pages/products/secciones/new-products/new-products';
import { Tablets } from './pages/products/secciones/tablets/tablets';
import { Accesorios } from './pages/products/secciones/accesorios/accesorios';
import { Gamas } from './pages/products/secciones/gamas/gamas';


export const routes: Routes = [
    //definimos la ruta principal o raiz  en especifico que nos lleve a la ruta home
    {path: "",component:Home},
    {path: `home`, component: Home},
    {path: `about`,component: About},
    {path: `contact`,component:Contact},
    {path:`products`,component:Products},
    {path:`ofertas`,component:Ofertas},
    {path:`newProducts`,component:NewProducts},
    {path:`tablet`,component:Tablets},
    {path:`accesorios`,component:Accesorios},
    {path:`gamas`,component:Gamas}
    


];
