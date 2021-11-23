import styled from "styled-components";
export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Item = styled.li`
  width: 100%;
  margin: 4px 0;
  display: flex;
  flex-direction: row;
`;

export const ItemInput = styled.input`
  width: 100%;
`;

export const ItemCheckbox = styled.input.attrs({
  type: "checkbox",
})``;
