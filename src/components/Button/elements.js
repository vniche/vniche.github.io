import styled from 'styled-components'

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  height: ${props => props.size ? (props.size === "large" ? "48px" : "24px") : "32px"};
  color: ${props => props.primary ? "rgba(255,255,255,.95)" : "rgba(0,0,0,.65)"};
  background: ${props => props.primary ? "linear-gradient(to right, #FF9900 , #FF0000)" : "#fff"};
  border: ${props => props.primary ? "none" : "1px solid #d9d9d9"};

  line-height: 1.499;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  font-weight: 600;
  white-space: nowrap;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  position: relative;
  box-shadow: 0 2px 0 rgba(0,0,0,.015);
`