// 주의 확장자 붙이기
import { PageComponent } from './components/page/page.js';
import { ImageComponent } from './components/page/item/images.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';

class APP {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent()
    this.page.attachTo(appRoot)

    const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300')
    image.attachTo(appRoot, 'beforeend')

    const note = new NoteComponent('Note Title', 'Note body')
    note.attachTo(appRoot, 'beforeend')

    const todo = new TodoComponent('Todo Title', 'Todo Item')
    todo.attachTo(appRoot, 'beforeend')



  }

}

new APP(document.querySelector('.document')! as HTMLElement)