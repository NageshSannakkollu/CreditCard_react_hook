// Style your elements heRE

import styled from 'styled-components'

export const ComponentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`

export const CardTitleAndCreditCard = styled.div`
  background-color: #3b4b69;
  height: 100vh;
  width: 50%;
  padding: 50px 10px;
`
export const TitleAndLineContainer = styled.div`
  line-height: 1px;
  margin-top: 20px;
`

export const CreditCardTitle = styled.h1`
font-family:"Roboto",
font-size:35px;
color:#ffffff;
text-align:center;
font-weight:500px;
`

export const HorizontalLine = styled.hr`
  height: 4px;
  width: 150px;
  background-color: #ffd773;
  border-radius: 8px;
  color: #ffffff;
  border-width: 0;
`

export const CreditCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  justify-content: end;
  line-height: 1.5px;
  color: #ffffff;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  width: 100%;
  height: 250px;
  background-size: cover;
  border-radius: 20px;
  margin-top: 50%;
`
export const CreditCardNumber = styled.p`
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 20px;
`

export const CardHolderTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-left: 0;
  padding-left: 0;
  margin-top: 15px;
`

export const CreditCardHolder = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: #ffffff;
`
export const InputFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  box-shadow: 0 0 4px 4px #f1f1f1;
  padding: 20px 10px;
  width: 300px;
  margin-right: 50px;
  border-radius: 8px;
`
export const PaymentMethodHeading = styled.h1`
  font-size: 25px;
  margin-bottom: 20px;
`

export const CardNumberInput = styled.input`
  padding: 10px 20px;
  margin-top: 15px;
  cursor: pointer;
  outline: none;
`
