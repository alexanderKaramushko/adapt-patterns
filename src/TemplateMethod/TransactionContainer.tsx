/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-console */
import React, { ComponentType, ReactElement } from 'react';

type TransactionActions = {
  openTransaction(): Promise<void>;
  performTransaction(): Promise<void>;
  validateTransaction(): Promise<boolean>;
  closeTransaction(): Promise<void>;
}

export type ConcreteTransactionProps = {
  processTransaction(actions: TransactionActions): Promise<void>;
}

type ContainerProps<P> = {
  ConcreteTransaction: ComponentType<P>;
} & Omit<P, keyof ConcreteTransactionProps>;

export function TransactionContainer<P>(props: ContainerProps<P>): ReactElement {
  const { ConcreteTransaction, ...rest } = props;
  const ExtendedConcreteTransaction = ConcreteTransaction as ComponentType<P | ConcreteTransactionProps>;

  async function processTransaction(actions: TransactionActions): Promise<void> {
    const { performTransaction, openTransaction, validateTransaction, closeTransaction } = actions;

    try {
      await openTransaction();

      if (await validateTransaction()) {
        await performTransaction();
      } else {
        await closeTransaction();
      }
    } catch (error: unknown) {
      console.log(`Transaction failed: ${(error as Error).message}`);
    }
  }

  return (
    <ExtendedConcreteTransaction processTransaction={processTransaction} {...rest} />
  );
}
