import {
  SwipeableList,
  SwipeableListItem,
} from "@sandstreamdev/react-swipeable-list";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";
import { Music } from "../../types";
import React from "react";
import { Context } from "../../global/Context";

interface SwipeToDeleteProps {
  functionDelete: (_id: string) => any;
  music: Music;
  chidren: any;
}

const SwipeToDelete = ({
  functionDelete,
  music,
  children,
}: SwipeToDeleteProps) => {
  const { theme } = React.useContext(Context);

  function deleteItem() {
    functionDelete(music._id);
    // data = data.filter(i => i.id !== item.id )
  }

  return (
    <SwipeableList>
      {/* {data.map((item) => ( */}
      <SwipeableListItem
      
      
        swipeLeft={{
          content: (
            <div
              style={{
                marginLeft: 8,
                marginRight: 8,
                
              }}
            >
              Excluír
            </div>
          ),
          action: () => deleteItem(),
        }}
        swipeRight={{
          content: (
            <div
              style={{
                marginLeft: 8,
                marginRight: 16,
              }}
            >
              Excluír
            </div>
          ),
          action: () => deleteItem(),
        }}
      >
        <div
          style={{
            background: theme.body,
            width: "100%",
          }}
        >
          {children}
        </div>
      </SwipeableListItem>
      {/* ))} */}
    </SwipeableList>
  );
};

export default SwipeToDelete;
