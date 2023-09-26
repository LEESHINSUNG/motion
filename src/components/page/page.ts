import { BaseComponent, Component } from "../component.js";


export interface Composable {
  addChild(child: Component): void
}

class PageItemConponent extends BaseComponent<HTMLElement> implements Composable {
  constructor() {
    super(`<li class="page-item">
            <section class="page-item__body"></section>
            <div class="page-item__controls">
              <button class="close">X</button>
            </div>
          </li>`)
  }
  addChild(child: Component) {
    const container = this.element.querySelector('.page-item__body')! as HTMLElement
    child.attachTo(container)
  }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
  constructor() {
    super('<ul class="page"></ul>')
  }
  addChild(section: Component) {
    const item = new PageItemConponent()
    item.addChild(section)
    item.attachTo(this.element, 'beforeend')
  }
}

/**
 * PageComponent는 BaseComponent에서 확장되었기 때문에, 아래의 코드는 위와 같이 수정됨.
 * 상속하는 자식 클래스에서는 super을 이용해서 부모 클래스의 생성자를 호출해야한다.
 */
// export class PageComponent extends BaseComponent{
//   private element: HTMLUListElement
//   constructor() {
//     this.element = document.createElement('ul')
//     this.element.setAttribute('class', 'page')
//     this.element.textContent = 'This is PageComponent'
//   }

//   attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
//     parent.insertAdjacentElement(position, this.element);
//   }
// }