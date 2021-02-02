export default (func, ms) => {
  let timer;
  console.log("DEBOUNCE!!!");
  return (...args) => {
    console.log("SECOND - DEBOUNCE!!!");
    const later = () => {
      clearTimeout(timer);
      func(...args);
    };
    clearTimeout(timer);
    timer = setTimeout(later, ms);
  };
};
