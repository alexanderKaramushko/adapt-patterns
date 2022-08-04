/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
export const enum VNodeType {
  FUNCTION_COMPONENT = 'FunctionComponent',
  CLASS_COMPONENT = 'ClassComponent',
}

export interface VNodeInstance {
  $$type: VNodeType;
  children?: VNodeInstance[];
}

export abstract class VNode {

  vNodes: VNode[] = [];

  abstract init(): VNodeInstance[];

  // eslint-disable-next-line no-unused-vars
  add(vNode: VNode): void {
    // throw error if vdom element is a host element
    throw new Error('Unsupported operation');
  }

  public isComposite(): boolean {
    return false;
  }

}
