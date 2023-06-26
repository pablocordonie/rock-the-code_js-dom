import swingmanProducts from './data/data.js';
import createHeader from './components/Header/header.js';
import { initGallery } from './components/Gallery/gallery.js';
import createFooter from './components/Footer/footer.js';

createHeader();
initGallery(swingmanProducts);
createFooter();