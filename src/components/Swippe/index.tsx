import {
  SwipeableList,
  SwipeableListItem,
} from "@sandstreamdev/react-swipeable-list";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";
import { Music } from "../../types";

interface SwipeToDeleteProps{
  functionDelete: ()=> any
  music: Music
  chidren: any
}

const SwipeToDelete = ({functionDelete,music, children}: SwipeToDeleteProps) => {
  let data = [
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
  ];

  function deleteItem() {
    console.log(music);
    functionDelete(music._id)
    // data = data.filter(i => i.id !== item.id )
  }

  return (
    <SwipeableList>
      {/* {data.map((item) => ( */}
        <SwipeableListItem
          swipeLeft={{
            content: <div>Excluír</div>,
            action: () => deleteItem(),
          }}
          swipeRight={{
            content: <div>Excluír</div>,
            action: () => deleteItem(),
          }}
        >
          <div style={{
            background: '#202020',
            width: '100%'
          }}>{children}</div>
        </SwipeableListItem>
      {/* ))} */}
    </SwipeableList>
  );
};

export default SwipeToDelete;
