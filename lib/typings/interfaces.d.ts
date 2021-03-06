export interface AnimatableOnScroll {
  animate: (scroll?: number, time?: any) => void;
}

export interface Animatable {
  animate: (position: number) => void;
}

export interface Updatable {
  update: () => void;
}

export interface Renderable {
  render: (time: any) => void;
}

export interface WithPositionGetter {
  getPosition: (scroll: number) => number;
}

export interface Offset {
  height: number;
  bottom: number;
  top: number;
}

export interface Env {
  height: number;
  width: number;
}
