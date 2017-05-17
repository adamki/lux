const createApi = () => {
  let _id = 0;
  const createNote = () => new Promise(resolve => setTimeout(() => {
    _id ++;
    resolve({
      id: `${_id}`
    });
  }, 500));
  return {
    createNote
  };
};

export const fakeApi = createApi();
