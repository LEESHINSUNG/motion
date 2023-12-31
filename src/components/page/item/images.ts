import { BaseComponent } from "../../component.js"
// 웹팩같은 툴을 이용하면 확장자를 작성하지 않아도 자동으로 생성된다.

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
      <section class="image">
        <div class="image__holder"><img class="image__thumbnail" /></div>
        <h2 class="image__title"></h2>
      </section>
    `)

    // 변수(요소)를 만들어 필요한 부분만 설정하는 것이 좋다.
    const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement
    imageElement.src = url
    imageElement.alt = title

    const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement
    titleElement.textContent = title
  }

}


/* export class ImageComponent {
  private element: HTMLElement
  constructor(title: string, url: string) {
    const template = document.createElement('template')

    // 요소를 만들때, 사용자에게 전달받은 데이터를 innerHTML에 직접적으로 사용하지 말고,
    template.innerHTML = `<section class="image">
    <div class="image__holder">
      <img class="image__thumbnail" />
    </div>
    <p class="image__title"></p>
  </section>`
    this.element = template.content.firstElementChild! as HTMLElement

    // 변수(요소)를 만들어 필요한 부분만 설정하는 것이 좋다.
    const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement
    imageElement.src = url
    imageElement.alt = title

    const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement
    titleElement.textContent = title
  } 

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}


 */