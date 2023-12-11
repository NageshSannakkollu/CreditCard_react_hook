import {useState} from 'react'

import {
  ComponentContainer,
  TitleAndLineContainer,
  CreditCardTitle,
  HorizontalLine,
  CreditCardContainer,
  CreditCardNumber,
  CreditCardHolder,
  CardHolderTitle,
  InputFormContainer,
  PaymentMethodHeading,
  CardNumberInput,
  CardTitleAndCreditCard,
} from './styledComponents'

const CreditCard = () => {
  const [creditCardNumber, setCreditCardNumber] = useState('')
  const [creditCardHolder, setAccountHolderName] = useState('')

  const onChangeCardNumber = event => {
    setCreditCardNumber(event.target.value)
  }

  const onChangeCardHolderName = event => {
    setAccountHolderName(event.target.value)
  }

  return (
    <ComponentContainer>
      <CardTitleAndCreditCard>
        <TitleAndLineContainer>
          <CreditCardTitle>Credit Card</CreditCardTitle>
          <HorizontalLine />
        </TitleAndLineContainer>
        <CreditCardContainer data-testid="creditCard">
          <CreditCardNumber>{creditCardNumber}</CreditCardNumber>
          <CardHolderTitle>CARDHOLDER NAME</CardHolderTitle>
          <CreditCardHolder>{creditCardHolder.toUpperCase()}</CreditCardHolder>
        </CreditCardContainer>
      </CardTitleAndCreditCard>
      <InputFormContainer>
        <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
        <CardNumberInput
          type="text"
          placeholder="Card Number"
          onChange={onChangeCardNumber}
          value={creditCardNumber}
        />
        <CardNumberInput
          type="text"
          placeholder="Cardholder Name"
          onChange={onChangeCardHolderName}
          value={creditCardHolder}
        />
      </InputFormContainer>
    </ComponentContainer>
  )
}

export default CreditCard
