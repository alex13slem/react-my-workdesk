export const getPageCount = (totalCount, limit) =>
  Math.ceil(totalCount / limit);
export const getTotalCount = (response) => response.headers['x-total-count'];
