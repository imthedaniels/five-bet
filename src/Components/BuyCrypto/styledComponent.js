import styled from "styled-components";

export const DivBuyCrypto = styled.div`
  width: 92.5%;
  height: auto;
  background-color: #15115f;
  margin-left: 3.7%;
  color: white;
  border: 1px solid #3f4290;
  border-radius: 20px;
`;
export const DivBuyInfo = styled.div`
  margin-left: 10px;
`;
export const TitleBuy = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
export const SubTitleBuy = styled.p`
  font-size: 15px;
`;
export const FormBuyTransaction = styled.div`
  width: 92.5%;
  background-color: #322a71;
  border: 1px solid #3f4290;
  border-radius: 10px;
  margin-left: 3.5%;
`;
export const DIVLabelValue = styled.div`
  width: 92%;
  margin-left: 3%;
`;
export const LabelInput = styled.p``;

export const SelectInfo = styled.select`
  width: 100%;
  height: 50px;
  background: none;
  background-color: #282470;
  color: white;
  border: 1px solid #b7a7ff;
  border-radius: 10px;
  option {
    background-color: #15115f;
    border: 0;
    border-radius: 6px;
  }
`;
export const DIVSelectors = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 95%;
  }
`;

export const DivInputValue = styled.div`
  width: 99.7%;
  height: 52px;
  background-color: #282470;
  display: flex;
  border: 1px solid #b7a7ff;
  border-radius: 10px;
  margin-bottom: 10px;
`;
export const InputValue = styled.input`
  background: none;
  border: 0;
  width: 70%;
  margin-right: 9%;
`;
export const SelectCurrency = styled.select`
  background: none;
  border: 0;
  color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  option {
    background-color: #15115f;
  }
`;
export const DivTableTrade = styled.div`
  margin-left: 3%;
  width: 92.5%;
  height: auto;
  overflow-y: hidden;
  overflow-x: scroll;
  background-color: #291b6b;
  display: flex;
  flex-direction: column;
  margin-bottom: 4%;
`;
export const DivLineTable = styled.div`
  margin-left: 3%;
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 250%;
  border-bottom: 1px solid black;
  align-items: center;
`;
export const PLineTable = styled.p`
  width: 35%;
  float: left;
  color: white;
  margin-right: 2%;
`;
export const TradeValue = styled.p`
  width: 30%;
`;

export const ButtonTrade = styled.button`
  border: 0;
  width: 70%;
  color: white;
  height: 30px;
  border-radius: 40px;
  background-color: #571ce0;
`;
