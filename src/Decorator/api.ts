/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
import ObservableClass from '../Observer';

const observable = new ObservableClass();

export function observer(target: any) {
  const holderTarget = {
    props: {},
  };

  Object.defineProperty(target.prototype, 'props', {
    configurable: true,
    enumerable: true,
    get() {
      return holderTarget.props;
    },
    set(props) {
      holderTarget.props = { ...holderTarget.props, ...props };
    },
  });

  // todo отсутствует реализация отписки
  target.prototype.componentDidMount = function () {
    observable.subscribe((value) => {
      this.props = { ...this.props, ...value };
      this.forceUpdate();
    });
  };

  return target;
}

export function makeObservable(target: any) {
  const holderTarget = { ...target };

  Object.keys(target).forEach((key) => {
    Object.defineProperty(target, key, {
      enumerable: true,
      get: () => holderTarget[key],
      set: (value: unknown) => {
        if (holderTarget[key] === value) {
          return;
        }

        holderTarget[key] = value;

        // todo для упрощения примера передается полный наблюдаемый store
        observable.notify({ [target.constructor.name.toLowerCase()]: target });
      },
    });
  });

  return target;
}
