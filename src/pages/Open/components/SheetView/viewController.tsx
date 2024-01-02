import { useContext, useEffect, useState } from "react";
import { Music, VerseProps } from "../../../../types";
import { getMusicById } from "../../../../api/services";
import { Context } from "../../../../global/Context";
import { useParams } from "react-router-dom";

interface SheetViewControllerProps {
  verseId: string;
}

const SheetViewController = () => {
  const [data, setData] = useState<Music>();
  const {id} = useParams()

  console.log(id)

  useEffect(() => {
    getMusicById(id).then((data) => setData(data));
  }, []);
  const { theme } = useContext(Context);

  console.log(data);

  return {
    data,
    theme,
  };
};

export default SheetViewController;
