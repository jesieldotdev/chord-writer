function changePos(str:string, posicaoOriginal:number, novaPosicao:number) {
    // Verifica se as posições são válidas
    if (posicaoOriginal < 0 || posicaoOriginal >= str.length ||
        novaPosicao < 0 || novaPosicao >= str.length) {
      console.error('Posições inválidas.');
      return str; // Retorna a string original se as posições não forem válidas
    }
  
    // Converte a string para um array de caracteres
    const arrayDeCaracteres = str.split('');
  
    // Remove o caractere da posição original
    const caractereRemovido = arrayDeCaracteres.splice(posicaoOriginal, 1)[0];
  
    // Insere o caractere na nova posição
    arrayDeCaracteres.splice(novaPosicao, 0, caractereRemovido);
  
    // Converte o array de volta para uma string
    const novaString = arrayDeCaracteres.join('');

  
    return novaString;
  }
  

export default changePos