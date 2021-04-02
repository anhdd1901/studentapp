export const changePage = (targetedPage) => {
  return {
    type: 'changePage',
    payload: {
        targetedPage,
    },
  };
};
