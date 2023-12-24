function changeLastChar(str:string, novoCaractere:string) {
    // Converte a string para um array de caracteres
    const arrayDeCaracteres = str.split("");

    // Modifica o último elemento do array
    arrayDeCaracteres[arrayDeCaracteres.length - 1] = novoCaractere;

    // Converte o array de volta para uma string
    const novaString = arrayDeCaracteres.join("");

    return novaString;
  }

  export default changeLastChar