export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void
}

/**
 * BaseComponent the HTML element creation
 */

export class BaseComponent<T extends HTMLElement> implements Component {
  // element는 외부에서 볼수없고, element를 상속하는 자식 클래스만 볼 수 있다(:protected)
  // readonly : 한번 만들어진 요소는 읽기만 가능하다. 변경불가
  protected readonly element: T
  constructor(htmlString: string) {
    const template = document.createElement('template')
    template.innerHTML = htmlString
    this.element = template.content.firstElementChild! as T

  }
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}