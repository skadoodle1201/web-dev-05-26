let globalVal = 10;

const outer = () => {
  let outerVal = 30;
  function inner() {
    let innerVal = 40;
    console.log(innerVal); //Accessbile -> 40
    console.log(outerVal); //Accessible -> 30
    console.log(globalVal); //Accessible -> 10
  }

  inner();
};

outer();
