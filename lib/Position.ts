import {
  Env,
  Offset,
  PositionFn,
  Updatable,
  WithPositionGetter
} from './typings';

export class Position implements WithPositionGetter, Updatable {
  public from = 0;
  public to = 0;

  constructor(
    public element: HTMLElement,
    public fromFn: PositionFn,
    public toFn: PositionFn
  ) {}

  update() {
    const env: Env = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    const boundingClientRect = this.element.getBoundingClientRect();
    const { pageYOffset } = window;

    const offset: Offset = {
      height: boundingClientRect.height,
      bottom: boundingClientRect.bottom + pageYOffset,
      top: boundingClientRect.top + pageYOffset
    };

    this.from = this.fromFn(offset, env);
    this.to = this.toFn(offset, env);
  }

  getPosition(scroll: number) {
    if (scroll <= this.from) {
      return 0;
    }

    if (scroll >= this.to) {
      return 1;
    }

    return (scroll - this.from) / (this.to - this.from);
  }
}
