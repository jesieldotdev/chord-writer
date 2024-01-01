import { useEffect, useState } from "react";
import {VerseProps} from '../../../../types'

interface SheetViewControllerProps{
    verseId: string
}

const SheetViewController = ({verseId}:any) => {
    const [data, setData] = useState<VerseProps[]>([])

    console.log(verseId)

    useEffect(() => {
        fetch('http://ec2-18-231-159-123.sa-east-1.compute.amazonaws.com:5000/')
          .then((response) => {
            if (!response.ok) throw new Error("Erro na requisição");
            return response.json();
          })
          .then((data) => setData(data))
          .catch((error) => console.log(error));
       }, []);

    return {
     data   
    }
}

export default SheetViewController