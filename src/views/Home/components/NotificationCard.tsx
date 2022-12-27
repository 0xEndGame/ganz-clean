import * as React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'


const StyledNotificationCard = styled(Card)`
.notification-box {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  height: 50px;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}

.notification-text {
  float: left;
  width: calc(100% - 50px);
  height: 100%;
`



function NotificationCard() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className={`notification-box ${isOpen ? 'open' : 'closed'}`}>
      <div className="notification-text">Hello, world!</div>
      <button type="button"
        className="close-button"
        onClick={() => setIsOpen(false)}
      >
        X
      </button>
    </div>
  );
}
  
  export default NotificationCard