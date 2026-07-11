const counter = (intial) => {
  let count = intial;

  return {
    increment: () => {
      return count++;
    },

    decrement: () => {
      return count--;
    },

    get: () => {
      console.log(count);
    },
  };
};

const counter1 = counter(10);

counter1.increment(); //11
counter1.increment(); //12
counter1.decrement(); //11
counter1.get(); //11
