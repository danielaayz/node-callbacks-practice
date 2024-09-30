// Print out name function
const printName = (printAge) => {
   //console.log(`Daniela Y. Zagal`);
   setTimeout(() => {
      const data = `Hi, my name is Daniela Y. Zagal`;
      console.log(data);
      printAge();
   }, 2000);
};

// Print out age function
const printAge = (printLocation) => {
   setTimeout(() => {
      const data = `I am 42 years old`;
      console.log(data);
      printLocation();
   }, 3000);
};

// Print out place you were born and where you live now
const printLocation = (printHobbies) => {
   setTimeout(() => {
      const data = `I was born in Chile but I've lived in Sweden since I was 4 year old.`;
      console.log(data);
      printHobbies();
   }, 4000);
};

// Print out hobbies
const printHobbies = () => {
   setTimeout(() => {
      const data = `My hobbies are making pottery, yoga, gardening and watching movies.`;
      console.log(data);
   }, 5000);
};

// Call functions in a chain
printName(() => {
   printAge(() => {
      printLocation(() => {
         printHobbies();
      });
   });
});
