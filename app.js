function findMissingNumber(array) {
    const n = array.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = array.reduce((sum, num) => sum + num, 0);
    const missingNumber = expectedSum - actualSum;
    return missingNumber;
  }
  

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20]; 
  const missingNumber = findMissingNumber(array);
  console.log("Missing number:", missingNumber);
  
  
  