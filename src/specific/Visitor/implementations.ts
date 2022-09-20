/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */

import { DefectState } from './interfaces';

export interface DefectVisitor {
  visitDefect1State(defect1: Defect1): void;
  visitDefect2State(defect1: Defect2): void;
}

export interface DefectAcceptor {
  accept(visitor: DefectVisitor): void;
}

export class DefectsVisitor implements DefectVisitor {

  isDefectActive(defect: DefectState): boolean {
    return defect.status === 1;
  }

  visitDefect1State(defect1: Defect1): void {
    if (this.isDefectActive(defect1.state)) {
      console.log('defect1 is active, fix it');
    }
  }

  visitDefect2State(defect2: Defect2): void {
    if (!this.isDefectActive(defect2.state)) {
      console.log('defect2 is not active, fix it');
    }
  }

}

export class Defect1 implements DefectAcceptor {

  public state: DefectState = {
    status: 1,
    type: 1,
  };

  accept(visitor: DefectVisitor): void {
    visitor.visitDefect1State(this);
  }

  processDefect(): void {
    console.log('processing defect1...');
  }

}

export class Defect2 implements DefectAcceptor {

  public state: DefectState = {
    status: 0,
    type: 2,
  };

  accept(visitor: DefectVisitor): void {
    visitor.visitDefect2State(this);
  }

  processDefect(): void {
    console.log('processing defect2...');
  }

}
