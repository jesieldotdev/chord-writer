// Draggable.js
import {useDraggable} from '@dnd-kit/core';

export function Draggable({id, children}) {
 const {attributes, listeners, setNodeRef, transform} = useDraggable({id});

 const style = {
   transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
 };

 return (
   <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
     {children}
   </div>
 );
}

// Droppable.js
import {useDroppable} from '@dnd-kit/core';

export function Droppable({id, children}) {
 const {setNodeRef, isOver} = useDroppable({id});

 return (
   <div ref={setNodeRef}>
     {isOver ? 'Está sobre mim!' : children}
   </div>
 );
}
