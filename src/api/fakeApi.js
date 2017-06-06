const createApi = () => {
  let id = 0;

  const createNote = () => new Promise(resolve => setTimeout(() => {
    id += 1;
    resolve({
      id: `${id}`,
    });
  }, 500));
  return {
    createNote,
  };
};

const fakeApi = createApi();
export default fakeApi;
