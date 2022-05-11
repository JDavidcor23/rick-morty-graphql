export const getDateCharacter = (dateCharacter) => {
    let date5 = new Date(dateCharacter);
    let day = date5.getDate();
    let month = date5.getMonth() + 1;
    let year = date5.getFullYear();
    if (month < 10) {
      return (`${day}-0${month}-${year}`);
    } else {
      return(`${day}-${month}-${year}`);
    }
  };