import {
  DivAffiliate,
  Ptitle,
  Divtitle,
  H5title,
  Divreferral,
  Preferral,
  Inputreferral,
  IMGreferral,
  DIVcopyreferral,
  DIVreferralINFO,
  PnumberReferral,
  PphraseReferral,
  IMGreferralEarned,
  DIVphrasesReferral,
  InputReferralCalendario,
  PReferralCalendario,
  DivInfoCalendario,
  DivInfos,
  Date,
  Type,
  Currency,
  Amount,
} from './styledComponent'

import copyItem from '../../Assets/copy-icon.png'
import referralEarned1 from '../../Assets/earned-referral-icon-1.png'
import referralEarned2 from '../../Assets/earned-referral-icon-2.png'
import { useUsers } from '../../Providers/Users'
import { toast } from 'react-toastify'
import { useState } from 'react'
import DatePicker from 'react-date-picker'
import Timestamp from 'react-timestamp'

const Afilliate = () => {
  const { afiliatesList, userId, userInfo, affiliateBalance } = useUsers()
  const [date, setDate] = useState('')

  const handleAffiliates = (date) => {
    console.log(Math.floor(new Date(date).getTime() / 1000))
  }

  return (
    <DivAffiliate>
      <Divtitle>
        <H5title>Afilliate Program</H5title>
        <Ptitle>
          Get a lifetime reward up to 15% for inviting new people!
        </Ptitle>
      </Divtitle>

      <Divreferral>
        <Preferral>My Referral Link</Preferral>
        <DIVcopyreferral>
          <Inputreferral
            type='text'
            disabled
            defaultValue={userInfo.myAffiliateCode}
          />
          <IMGreferral
            src={copyItem}
            onClick={() => {
              navigator.clipboard.writeText(userInfo.myAffiliateCode)
              toast.success('Referral code copied to clipboard!', {
                theme: 'colored',
              })
            }}
          />
        </DIVcopyreferral>
      </Divreferral>

      <DivInfos>
        <DIVreferralINFO>
          <IMGreferralEarned src={referralEarned1} />
          <DIVphrasesReferral>
            <PnumberReferral>{affiliateBalance()} USD</PnumberReferral>
            <PphraseReferral>Earned Referral</PphraseReferral>
          </DIVphrasesReferral>
        </DIVreferralINFO>

        <DIVreferralINFO>
          <IMGreferralEarned src={referralEarned2} />
          <DIVphrasesReferral>
            <PnumberReferral>$0.00</PnumberReferral>
            <PphraseReferral>Last Month</PphraseReferral>
          </DIVphrasesReferral>
        </DIVreferralINFO>
      </DivInfos>

        <DivInfoCalendario>
          <PReferralCalendario>Referral History</PReferralCalendario>
          <InputReferralCalendario
            onChange={(e) => {
              handleAffiliates(e.target.value)
            }}
            type='date'
          />
        </DivInfoCalendario>
        <section>
          <ul>
            <li>
              <Date className='title'>Date</Date>
              <Type className='title'>Username</Type>
              <Currency className='title'>Earned</Currency>
              <Amount className='title'>E-mail</Amount>
            </li>
  
           {afiliatesList.map((afilliates) => {
              const { timestamp, username, email, affiliateUserId } = afilliates
              if (affiliateUserId === userId) {

              return (
                <li key={affiliateUserId}>
                  <Date>
                    <Timestamp date={timestamp} />
                  </Date>
                  <Type>{username}</Type>
                  <Currency>$20.00</Currency>
                  <Amount>{email}</Amount>
                </li> 
                
              )}
            })}
          </ul>
        </section>
    </DivAffiliate>
  )
}

export default Afilliate
