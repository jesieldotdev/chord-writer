import React, { useContext } from "react";
import * as S from './styles'
import { Context } from "../../../../global/Context";


interface EditTitleProps {
    value: string;
    // setShow: any
  }
  
  const EditTitle = ({ value }: EditTitleProps) => {
    const {theme} = useContext(Context)
    const [title, setTitle] = React.useState<string>(value);

    const handleClickEnter = (event) => {
        // Verifica se a tecla pressionada é a tecla "Enter" (código 13)
        if (event.key === 'Enter') {
          // Execute a lógica desejada quando a tecla "Enter" for pressionada
          console.log('Enter pressionado! Valor do input:', title);
        }
      };
    
      const handleChange = (event) => {
        // Atualiza o estado com o valor do input
        setTitle(event.target.value);
        // console.log()
      };
  
    console.log(title);
    return (
      <>
        <S.Input theme={theme} value={title} onKeyPress={handleClickEnter} onChange={(e) => setTitle(e.target.value)} />
      </>
    );
  };

 export default EditTitle 