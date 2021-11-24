import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:100%;
  position:absolute;
  top:-30px;
  `;

export const Title = styled.h2`
  font-size: ${props => `${props.theme.fontSizes.large}`};
  background: ${props => `${props.theme.colors.backgroundColor}`};
  color: ${props => `${props.theme.colors.headingColor}`};
  border-top: ${props => `10px solid ${props.theme.colors.stripColor}`};
  width:100%;
  text-align:center;
  padding:5px;
`;

export const List = styled.ul`
  width: 50%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Item = styled.li`
  width: 100%;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  column-gap:20px;
  row-gap:10px;
  `;

export const ItemInput = styled.input`
  width: 100%;
  padding:10px;
  font-family: ${props => `${props.theme.font}`};
  font-size: ${props => `${props.theme.fontSizes.medium}`};
  border: ${props => `1px solid ${props.theme.colors.borderColor}`};
  &:focus {
    outline: ${props => `1px solid ${props.theme.colors.borderFocusColor}`};
 `;

export const ItemCheckbox = styled.input.attrs({
  type: "checkbox",
})`
-ms-transform: scale(2); /* IE */
-moz-transform: scale(2); /* FF */
-webkit-transform: scale(2); /* Safari and Chrome */
-o-transform: scale(2); /* Opera */
transform: scale(2);
height:35px;
`;


