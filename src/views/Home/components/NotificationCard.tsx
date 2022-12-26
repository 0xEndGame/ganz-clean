import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'


const StyledNotificationCard = styled(Card)`
position: absolute;
top: 10px;
right: 10px;
width: 100px;
height: 100px;
border: 1px solid black;
overflow: hidden;
`




  const NotificationCard = () => {
    const TranslateString = useI18n()
    // const data = useGetStats()
    const totalValue = useTotalValue();
    // const tvl = totalValue.toFixed(2);
  
    return (
      <StyledNotificationCard>
        <Heading size="lg" mb="24px">
          {TranslateString(999, 'TESTTT')}
        </Heading>
      </StyledNotificationCard>
    )
  }
  
  export default NotificationCard