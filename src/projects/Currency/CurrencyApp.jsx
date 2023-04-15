import React, { useEffect, useState } from 'react';
import { Block } from '../Currency/Block';
import '../../styles/currency.scss';

function CurrencyApp() {
  const [fromCurrency, setFromCurrency] = useState('RUB');
  const [toCurrency, setToCurrency] = useState('USD');
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/latest.js')
      .then((res) => res.json())
      .then((json) => {
        setRates(json.rates);
        console.log(json.rates);
      })
      .catch((err) => {
        console.warn(err);
        alert('Не удалось получить информацию');
      });
  }, []);

  const onChangeFromPrice = (value) => {
    // const price = value / rates[fromCurrency];
    const result = value * rates[toCurrency];
    setFromPrice(value);
    setToPrice(result);
  };

  const onChangeToPrice = (value) => {
    setToPrice(value);
  };

  return (
    <div className="bodyCurrency">
      <div className="currencyApp">
        <Block
          value={fromPrice}
          currency={fromCurrency}
          onChangeCurrency={setFromCurrency}
          onChangeValue={onChangeFromPrice}
        />
        <Block
          value={toPrice}
          currency={toCurrency}
          onChangeCurrency={setToCurrency}
          onChangeValue={onChangeToPrice}
        />
      </div>
    </div>
  );
}

export default CurrencyApp;
