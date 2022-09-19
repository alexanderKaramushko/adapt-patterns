/* eslint-disable no-console */
import React, { FC, ReactElement, useEffect } from 'react';
import { sleep } from '../utils/sleep';
import { ConcreteTransactionProps } from './TransactionContainer';

type ApplePayProps = ConcreteTransactionProps;

export const ApplePay: FC<ApplePayProps> = (props): ReactElement => {
  const { processTransaction } = props;

  async function openTransaction(): Promise<void> {
    console.log('Opening ApplePay transaction...');
    await sleep(2000);
  }

  async function performTransaction(): Promise<void> {
    console.log('Performing ApplePay transaction...');
    await sleep(1500);
  }

  async function validateTransaction(): Promise<boolean> {
    console.log('Validating ApplePay transaction...');
    await sleep(3000);
    throw new Error('Invalid Apple');
  }

  async function closeTransaction(): Promise<void> {
    console.log('Closing ApplePay transaction...');
  }

  useEffect(() => {
    processTransaction({
      closeTransaction,
      openTransaction,
      performTransaction,
      validateTransaction,
    });
  }, []);

  return (
    <div>ApplePay</div>
  );
};
