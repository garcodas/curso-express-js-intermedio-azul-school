const newId = (array) => {
  if (array.length === 0) {
    return 1;
  }

  const maxId = Math.max(...array.map((value) => value.id));

  return maxId + 1;
};

export default newId;
