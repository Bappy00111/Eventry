export const replaceMongoIdInArray = (array) => {
    const mappedArray = array.map(item => {
      return {
        id: item._id.toString(),
        ...item
      }
    }).map(({_id, ...rest}) => rest);

    return mappedArray;
  }

  export const replaceMongoId = (object) => {
    const { _id, ...rest } = {...object,id: object._id>toString()};
    return rest;
  }
