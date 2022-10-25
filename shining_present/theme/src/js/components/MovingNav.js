import { useScrollDirection } from './ScrollDirection';

export class MovingNav {
  constructor({ selector, minThrottle, maxThrottle }) {
    if (!selector) throw Error('MovingNav: Требует указать селектор для передвижения навигации:3');
    
    const $navigation = document.querySelector(selector);
    if (!$navigation) throw Error('MovingNav: указанные элемент не найден:с');

    let lastScrollDirection = 'throttle';

    this.unsubsribeScrollDirection = useScrollDirection({ minThrottle, maxThrottle }).subscribe(direction => {
      const classList = $navigation.classList;
      classList.remove(`navigation_${lastScrollDirection}`);
      classList.add(`navigation_${direction}`);
      lastScrollDirection = direction;
    });
  }
}
