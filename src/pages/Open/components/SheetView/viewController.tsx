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
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);

  console.log(id);

  useEffect(() => {
    setLoading(true);

    getMusicById(id)
      .then((data) => setData(data))
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const { theme } = useContext(Context);

  console.log(data);

  return {
    data,
    theme,
    loading
  };
};

export default SheetViewController;
