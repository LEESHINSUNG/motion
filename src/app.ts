import { PageComponent } from './components/page.js';

class APP {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent()
    this.page.attachTo(appRoot)
  }
}

new APP(document.querySelector('.document')! as HTMLElement)