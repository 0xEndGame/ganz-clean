import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'


const StyledNotificationCard = styled(Card)`
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
  }
  
  .popup.open {
    display: block;
  }
  
  .popup-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 200px;
    background-color: white;
    border: 1px solid black;
    padding: 10px;
  }
  
  .close-button {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 24px;
    font-weight: bold;
    border: none;
    background-color: transparent;
    color: black;
    cursor: pointer;
  }
`

  
  // React component for the trigger button
  function TriggerButton() {
    const [isOpen, setIsOpen] = useState(false);
  
  }



  const NotificationCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const TranslateString = useI18n()
    // const data = useGetStats()
    const totalValue = useTotalValue();
    // const tvl = totalValue.toFixed(2);
  
    return (
        <StyledNotificationCard>
        <div className={`popup ${isOpen ? 'open' : 'closed'}`}>
        <div className="popup-content">
          <div className="popup-text">Hello, world!</div>
          <button type="button"
            className="close-button"
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
        </div>
      </div>

      <button type="button"
        className="trigger-button"
        onClick={() => setIsOpen(true)}
      >
        Show Pop-Up
      </button>
      </StyledNotificationCard>
    )
  }
  
  export default NotificationCard