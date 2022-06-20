import React from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import {useProTitle,useProDes} from './Product'
export default function Fpp() {
   const config = {
    public_key: 'FLWPUBK_TEST-d...d-X',
    tx_ref: Date.now(),
    amount: proTitle,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'jeremiahjacob261@gmail.com',
      phonenumber: '08140092501',
      name: 'Jacoob Jeremiah',
    },
    customizations: {
      title: 'Slammy Store',
      description: proPrice,
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="App">
     <h1>Clck the button to start thre payment!</h1>
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}