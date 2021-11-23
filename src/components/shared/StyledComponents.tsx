import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:100%;
  `;

export const Title = styled.h2`
  font-size:25px;
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
  font-size:18px;
  border: 1px solid #ccc;
  &:focus {
    outline: 1px solid #A9A9A9;
}
`;

export const ItemCheckbox = styled.input.attrs({
  type: "checkbox",
})`
-ms-transform: scale(2); /* IE */
-moz-transform: scale(2); /* FF */
-webkit-transform: scale(2); /* Safari and Chrome */
-o-transform: scale(2); /* Opera */
transform: scale(2);
height:32px;
outline: 1px solid red;
`;


