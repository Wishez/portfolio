
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, filter, map, pairwise } from 'rxjs/operators';

export const useScrollDirection = ({ minThrottle = 0, maxThrottle = NaN }) => 
  fromEvent(window, 'scroll', { passive: false })
    .pipe(
      map(() => window.pageYOffset),
      filter(position => position > 0),
      distinctUntilChanged(),
      pairwise(),
      map(([previousPageY, pageY]) => {
        if (minThrottle > pageY || maxThrottle < pageY) return 'throttle';

        return previousPageY < pageY ? 'down' : 'up';
      }),
      distinctUntilChanged(),
    );
