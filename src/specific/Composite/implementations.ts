/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import { VNode, VNodeInstance, VNodeType } from './interfaces';

export class FunctionComponent extends VNode {

  init(): VNodeInstance[] {
    return [{
      $$type: VNodeType.FUNCTION_COMPONENT,
    }];
  }

  /** @override */
  add(): void {}

}

export class ClassComponent extends VNode {

  init(): VNodeInstance[] {
    return [{
      $$type: VNodeType.CLASS_COMPONENT,
    }];
  }

  /** @override */
  add(): void {}

}

export class VDOM extends VNode {

  add(vNode: VNode): void {
    this.vNodes.push(vNode);
  }

  init(): VNodeInstance[] {
    return this.vNodes
      .reduce<VNodeInstance[]>((vNodes, vNode) => {
        // todo $$type: composite должен быть заменен на VNodeType, который будет возвращать children
        // при vNode.init()
        const initializedVNodes = vNode.isComposite()
          ? [{ $$type: 'composite' as VNodeType, children: vNode.init() }] as VNodeInstance[]
          : vNode.init();

        return [
          ...vNodes,
          ...initializedVNodes,
        ];
      }, []);
  }

  public isComposite(): boolean {
    return true;
  }

}
