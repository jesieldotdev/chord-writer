import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './constants';


const Item = ({ id, name, children }) => {
 const [{ isDragging }, drag] = useDrag({
 type: ItemTypes.ITEM,
 item: () => ({ id }),
 collect: monitor => ({
   isDragging: !!monitor.isDragging(),
 }),
 });

 return (
 <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
   {/* {name} */}
   {children}
 </div>
 );
};

const deleteItem = (id) => {
  console.log(id)
  // Implemente a lógica para deletar o item aqui.
  // Isso pode envolver a remoção do item de um estado ou a chamada de uma API para deletar o item.
 };

// Componente Trash
const Trash = () => {
  const [{ isOver }, drop] = useDrop({
  accept: ItemTypes.ITEM,
  drop: (item, monitor) => deleteItem(item.id),
  collect: monitor => ({
    isOver: !!monitor.isOver(),
  }),
  });
 
  return (
  <div ref={drop} style={{ backgroundColor: isOver ? 'red' : 'white' }}>
    Lixeira
  </div>
  );
 };

export {Item, Trash}