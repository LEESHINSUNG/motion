// 주의 확장자 붙이기
import { Composable, PageComponent } from './components/page/page.js';
import { ImageComponent } from './components/page/item/images.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { Component } from './components/component.js';

class APP {
  private readonly page: Component & Composable
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent()
    this.page.attachTo(appRoot)


    const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300')
    this.page.addChild(image)

    const video = new VideoComponent('Video Title', 'https://www.youtube.com/watch?v=Z0XdgGCafI4')
    this.page.addChild(video)

    const note = new NoteComponent('Note Title', 'Note body')
    this.page.addChild(note)

    const todo = new TodoComponent('Todo Title', 'Todo Item')
    this.page.addChild(todo)
  }
}

new APP(document.querySelector('.document')! as HTMLElement)