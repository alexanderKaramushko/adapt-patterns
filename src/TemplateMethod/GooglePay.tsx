/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-console */
import React, { FC, ReactElement, useEffect } from 'react';
import { sleep } from '../utils/sleep';
import { ConcreteTransactionProps } from './TransactionContainer';

type GooglePayProps = ConcreteTransactionProps & { loading: boolean };

export const GooglePay: FC<GooglePayProps> = (props): ReactElement => {
  const { processTransaction } = props;

  async function openTransaction(): Promise<void> {
    console.log('Opening GooglePay transaction...');
    await sleep(2000);
  }

  async function performTransaction(): Promise<void> {
    console.log('Performing GooglePay transaction...');
    await sleep(1500);
  }

  async function validateTransaction(): Promise<boolean> {
    console.log('Validating GooglePay transaction...');
    await sleep(3000);
    throw new Error('Invalid Apple Id');
  }

  async function closeTransaction(): Promise<void> {
    console.log('Closing GooglePay transaction...');
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
    <div>GooglePay</div>
  );
};
