// eslint-disable-next-line consistent-return
const sortVocab = (array, value) => {
  if (value === 'term') {
    const sortedVocab = array.sort((a, b) => {
      if (a.term < b.term) {
        return -1;
      }
      if (a.term > b.term) {
        return 1;
      }
      return 0;
    });
    return sortedVocab;
  }
  if (value === 'date_submitted') {
    const sortedVocab = array.sort((a, b) => new Date(a.date_submitted) - new Date(b.date_submitted));
    return sortedVocab;
  }
};

export default sortVocab;
