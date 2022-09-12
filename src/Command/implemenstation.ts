/* eslint-disable max-classes-per-file */
import { Command } from './interfaces';

/**
 * @description Receiver может быть любым хранилищем данных,
 * к которому обращается команда
 */
export class Receiver {

  private text: string | null = null;

  getCutText(): string {
    return this.text ?? '';
  }

  setCutText(text: string): void {
    this.text = text;
  }

}

export class CutCommand implements Command {

  private receiver!: Receiver;

  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  execute = (): void => {
    this.receiver.setCutText('some selection');
  }

}

export class PasteCommand implements Command {

  private receiver!: Receiver;

  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  execute = (): void => {
    this.receiver.getCutText();
  }

}
