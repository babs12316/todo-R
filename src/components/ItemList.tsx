import React, {useState} from "react";
import { addTodo, editTodo } from "../todo/todoAC";
import { useAppDispatch, useAppSelector } from "../types";
import { Item, ItemCheckbox, ItemInput, List } from "./shared/StyledComponents";

const ItemList: React.FC = () => {
  const items = useAppSelector((s) => s.todos.items);
  const dispatch = useAppDispatch();
  const [itemText,setItemText] = useState('')

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>)=>{
    if (e.key === 'Enter') {
     dispatch(addTodo(itemText))
     setItemText('')
   }
 }

  return (
    <List>
      {items.map((item) => (
        <Item key={item.id}>
          <ItemCheckbox />
          <ItemInput
            type="text"
            value={item.text}
            onChange={(e) => dispatch(editTodo(item.id, e.target.value))}
          />
        </Item>
      ))}
      <Item key="new">
        <ItemCheckbox />
        <ItemInput
          type="text"
          value={itemText}
          onChange={(e)=>setItemText(e.target.value)} 
          onKeyPress={handleKeyPress}
        />
      </Item>
    </List>
  );
};

export default ItemList;
