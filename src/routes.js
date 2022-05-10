import Neptune from "./components/pages/Neptune";
import Uranus from "./components/pages/Uranus";
import Saturn from "./components/pages/Saturn";
import Jupiter from "./components/pages/Jupiter";
import Mars from "./components/pages/Mars";
import Earth from "./components/pages/Earth";
import Venus from "./components/pages/Venus";
import Mercury from "./components/pages/Mercury";

const routes = [{
    path: '/mercury',
    component: Mercury,
}, {
    path: '/venus',
    component: Venus,
}, {
    path: '/earth',
    component: Earth,
}, {
    path: '/mars',
    component: Mars,
},{
    path: '/jupiter',
    component: Jupiter,
}, {
    path: '/saturn',
    component: Saturn,
}, {
    path: '/uranus',
    component: Uranus,
},{
    path: '/neptune',
    component: Neptune,
}
];


export default routes;