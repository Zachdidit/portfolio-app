import { clamp } from './helpers';
export { valueAtPercentage } from './helpers';


interface ScrollObserverOptions {
  offsetBottom?: number | (() => number);
  offsetTop?: number | (() => number);
  offsetRight?: number | (() => number);
  offsetLeft?: number | (() => number);
  addWrapper?: boolean;
  wrapperClass?: string;
  container?: HTMLElement | Window;
}

interface ScrollHandlerParams {
  percentageY: number;
  percentageX: number;
}

const defaultOptions: ScrollObserverOptions = {
	offsetBottom: 0,
	offsetTop: 0,
	offsetRight: 0,
	offsetLeft: 0,
	addWrapper: false,
	wrapperClass: ''
};

export class ScrollObserver {
  protected _handler?: (params: ScrollHandlerParams) => void;

  static Container(container: HTMLElement | Window): ContainerScrollObserver {
    return new ContainerScrollObserver(container);
  }

  static Element(element: HTMLElement, options: Partial<ScrollObserverOptions>): ElementScrollObserver {
    return new ElementScrollObserver(element, { ...defaultOptions, ...options });
  }

  public onScroll(handler: (params: ScrollHandlerParams) => void): void {
    this._handler = handler;
    this._onScroll();
  }

  protected _onScroll(): void {
    // This method is implemented in subclasses.
  }
}

class ContainerScrollObserver extends ScrollObserver {
  private readonly _container: HTMLElement | Window;

  constructor(container: HTMLElement | Window) {
    super();
    this._container = container;
    const scrollElement = container === document.documentElement ? window : container;
    scrollElement.addEventListener('scroll', this._onScroll.bind(this));
  }

  protected _onScroll(): void {
    const currentScrollY = (this._container as HTMLElement).scrollTop;
    const totalScrollY = (this._container as HTMLElement).scrollHeight - (this._container as HTMLElement).clientHeight;
    const percentageY = clamp(currentScrollY / totalScrollY, 0, 1) || 0;

    const currentScrollX = (this._container as HTMLElement).scrollLeft;
    const totalScrollX = (this._container as HTMLElement).scrollWidth - (this._container as HTMLElement).clientWidth;
    const percentageX = clamp(currentScrollX / totalScrollX, 0, 1) || 0;

    if (this._handler && typeof this._handler === 'function') {
      requestAnimationFrame(() => this._handler!({ percentageY, percentageX }));
    }
  }
}

class ElementScrollObserver extends ScrollObserver {
  private readonly _element: HTMLElement;
  private readonly _options: ScrollObserverOptions;
  private _wrapper?: HTMLElement;
  private _lastPercentageY: number | null = null;
  private _lastPercentageX: number | null = null;

  constructor(element: HTMLElement, options: ScrollObserverOptions) {
    super();
    this._element = element;
    this._options = options;

    if (this._options.addWrapper) {
      this._addWrapper();
    }

    const scrollContainer = this._options.container === document.documentElement ? window : this._options.container;
    scrollContainer?.addEventListener('scroll', this._onScroll.bind(this));
    requestAnimationFrame(() => this._onScroll());
  }

  private _addWrapper(): void {
    this._wrapper = document.createElement('div');
    if (this._options.wrapperClass) {
      this._wrapper.classList.add(this._options.wrapperClass);
    }
    this._element.parentNode!.insertBefore(this._wrapper, this._element);
    this._wrapper.appendChild(this._element);
  }

  private get _containerClientHeight(): number {
    return this._options.container === window
      ? window.innerHeight
      : (this._options.container as HTMLElement).clientHeight;
  }

  private get _containerClientWidth(): number {
    return this._options.container === window
      ? window.innerWidth
      : (this._options.container as HTMLElement).clientWidth;
  }

  private get _elRectRelativeToContainer(): DOMRect {
    const element = this._options.addWrapper ? this._wrapper! : this._element;
    const rect: DOMRect = element.getBoundingClientRect();
    if (this._options.container === document.documentElement) {
      return rect;
    }
    const containerRect = (this._options.container as HTMLElement).getBoundingClientRect();
    return {
      width: rect.width,
      height: rect.height,
      left: rect.left - containerRect.left,
      top: rect.top - containerRect.top,
      right: rect.right - containerRect.right,
      bottom: rect.bottom - containerRect.bottom,
      x: rect.x,
      y: rect.y,
      toJSON: rect.toJSON.bind(rect)
    };
  }

  private getOffsetValue(side: 'Top' | 'Bottom' | 'Left' | 'Right'): number {
    const key = `offset${side}` as keyof ScrollObserverOptions;
    const value = this._options[key];
    return typeof value === 'function' ? (value as () => number)() : (value as number);
  }

  private get _offsetBottom(): number {
    return this.getOffsetValue('Bottom');
  }

  private get _offsetTop(): number {
    return this.getOffsetValue('Top');
  }

  private get _offsetLeft(): number {
    return this.getOffsetValue('Left');
  }

  private get _offsetRight(): number {
    return this.getOffsetValue('Right');
  }

  private _calculatePercentageY(): number {
    const rect = this._elRectRelativeToContainer;
    const startPoint = this._containerClientHeight - this._offsetBottom;
    const endPoint = this._offsetTop;

    const viewHeight = startPoint - endPoint;

    return clamp((startPoint - rect.top) / viewHeight, 0, 1);
  }

  private _calculatePercentageX(): number {
    const rect = this._elRectRelativeToContainer;
    const startPoint = this._containerClientWidth - this._offsetRight;
    const endPoint = this._offsetLeft;

    const viewWidth = startPoint - endPoint;

    return clamp((startPoint - rect.left) / viewWidth, 0, 1);
  }

  protected _onScroll(): void {
    const percentageY = this._calculatePercentageY();
    const percentageX = this._calculatePercentageX();
    if (
      this._handler &&
      typeof this._handler === 'function' &&
      (this._lastPercentageY !== percentageY || this._lastPercentageX !== percentageX)
    ) {
      requestAnimationFrame(() => this._handler!({ percentageY, percentageX }));
    }
    this._lastPercentageY = percentageY;
    this._lastPercentageX = percentageX;
  }
}