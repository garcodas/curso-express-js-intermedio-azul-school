const newId = (array) => {
  const maxId = Math.max(...array.map((value) => value.id));
  return maxId + 1;
};

export default newId;
