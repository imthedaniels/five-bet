import ChangeList from "./changeCrypto";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { BuyCryptoContext } from "../../Providers/BuyCrypto";
import { ModalQuantiaInsuficiente } from "./modalCompra/index.jsx";
import {
  DivBuyCrypto,
  DivBuyInfo,
  TitleBuy,
  SubTitleBuy,
  FormBuyTransaction,
  LabelInput,
  SelectInfo,
  DivInputValue,
  InputValue,
  SelectCurrency,
  DIVLabelValue,
  DIVSelectors,
  DivTableTrade,
  DivLineTable,
  PLineTable,
  TradeValue,
} from "./styledComponent";

const BuyCrypto = () => {
  const { chooseList, setUsd, setData } = useContext(BuyCryptoContext);
  const handleList = (event) => {
    chooseList(event.target.value);
  };

  const formSchema = yup.object().shape({
    crypto: yup.string().required("Choose your Crypto."),
    payment: yup.string().required("Choose your payment."),
    amount: yup.string().required("Choose an amount."),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    setUsd(Number(data.amount * 0.000033));
    setData(data);
  };
  return (
    <>
      <DivBuyCrypto>
        <DivBuyInfo>
          <TitleBuy>
            Buy cryptocurrency directly to your Bitbetio Account
          </TitleBuy>
          <SubTitleBuy>
            Once payment is completed, your cryptocurrency will be available in
            Jugaro account within minutes
          </SubTitleBuy>
        </DivBuyInfo>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <FormBuyTransaction>
            <DIVLabelValue>
              <SubTitleBuy>
                1. Choose the crypto you wish to buy, enter the amount, and
                choose your favorite payment method.
              </SubTitleBuy>
            </DIVLabelValue>

            <DIVSelectors>
              <DIVLabelValue>
                <LabelInput>Buy</LabelInput>
                <SelectInfo onClick={handleList} {...register("crypto")}>
                  <option value="BTC">BTC</option>
                  <option value="ETH">ETH</option>
                  <option value="LTC">LTC</option>
                </SelectInfo>
              </DIVLabelValue>
              <DIVLabelValue>
                <LabelInput>Payment Methods</LabelInput>
                <SelectInfo {...register("payment")}>
                  <option>Visa</option>
                  <option>Credit</option>
                  <option>Master</option>
                </SelectInfo>
              </DIVLabelValue>
            </DIVSelectors>

            <DIVLabelValue>
              <LabelInput>Amount</LabelInput>
              <DivInputValue>
                <InputValue placeholder="100" {...register("amount")} />
                <SelectCurrency>
                  <option>USD</option>
                  <option>SGD</option>
                  <option>AUD</option>
                </SelectCurrency>
              </DivInputValue>
            </DIVLabelValue>
          </FormBuyTransaction>
          <DivBuyInfo>
            <SubTitleBuy>
              2. Choose the best offer from our payment partners, and complete
              your purchase.
            </SubTitleBuy>
          </DivBuyInfo>
          <DivTableTrade>
            <DivLineTable>
              <PLineTable>Channels</PLineTable>
              <PLineTable>Arrival Time</PLineTable>
              <PLineTable>You will get</PLineTable>
              <PLineTable>Rate(Fee Included)</PLineTable>
              <TradeValue>Trade </TradeValue>
            </DivLineTable>
            <ChangeList />
          </DivTableTrade>
        </form>
      </DivBuyCrypto>
      <ModalQuantiaInsuficiente />
    </>
  );
};

export default BuyCrypto;
