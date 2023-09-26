// 주의 확장자 붙이기
import { PageComponent } from './components/page/page.js';
import { ImageComponent } from './components/page/item/images.js';

class APP {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent()
    this.page.attachTo(appRoot)

    const image = new ImageComponent('Image Title','https://picsum.photos/600/300')
    image.attachTo(appRoot,'beforeend')
  }
  
}

new APP(document.querySelector('.document')! as HTMLElement)