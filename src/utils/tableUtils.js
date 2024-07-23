const getColWidth = (colLength = 5) => {
  return `${(100 / colLength).toFixed(2)}%`;
};

export { getColWidth };
