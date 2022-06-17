import Deposit from "../Deposit"
import { ContainerCurrentBalance, SelectCurrent, SpanValues } from "../Deposit/styles"
import { Div } from "../../Pages/Dashboard/styles"
import Withdraw from "../Withdraw"
import { Container } from "./styles"

const CurrentBalance = () => {
  return (
    <Container>
      <ContainerCurrentBalance>
        <SelectCurrent>
          <label htmlFor="Current Balance">Current Balance</label>
          <select name="currentBalance" id="currentBalance">
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
            <option value="LTC">LTC</option>
          </select>
        </SelectCurrent>
        <SpanValues htmlFor="">
          <label htmlFor="">0.1018183873</label> BTC
        </SpanValues>
        <span>1BTC = 49,345.50 USD</span>
      </ContainerCurrentBalance>
      <Div>
        <Deposit/>
        <Withdraw/>
      </Div>
    </Container>
  )
}

export default CurrentBalance