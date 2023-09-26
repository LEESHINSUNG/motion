import { BaseComponent } from "../component.js";

export class PageComponent extends BaseComponent<HTMLUListElement>{
  constructor() {
    super('<ul class="page">This is PageComponent</ul>')
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