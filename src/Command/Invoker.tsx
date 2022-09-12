import React, { FC } from 'react';
import { Command } from './interfaces';

type InvokerProps = {
  cutCommand: Command;
  pasteCommand: Command;
}

export const Invoker: FC<InvokerProps> = ({ cutCommand, pasteCommand }) => (
  <div>
    {/* Методы cut и paste выносятся в команды,
        так как они также будут нужны при ctrl + x и ctrl + v
    */}
    <button type="button" onClick={cutCommand.execute}>Cut</button>
    <button type="button" onClick={pasteCommand.execute}>Paste</button>
  </div>
);
