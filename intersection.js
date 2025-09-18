function intersection(arr1, arr2) {
  let result = [];
  ///把兩個陣列串在一起
  let arr3 = arr1.concat(arr2);
  let counter = {};

  for (let i = 0; i < arr3.length; i++) {
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1;
    } else {
      counter[arr3[i]]++;
    }
  }

  for (let property in counter) {
    if (counter[property] >= 2) {
      result.push(property);
    }
  }
  console.log(result);
  return result;
}

intersection(
  [1, 2, 3, 4, 456, 6, 47, 3556, 13, 34, 5, 31],
  [5, 3, 22, 6, 7, 8, 9]
);

function counttt(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");

  if (arr1.length !== arr2.length) {
    return false;
  }

  let counter1 = {};
  let counter2 = {};

  for (let i = 0; i < str1.length; i++) {
    if (!counter1[str1[i]]) {
      counter1[str1[i]] = 1;
    } else {
      counter1[str1[i]]++;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (counter2[str2[i]]) {
      counter2[str2[i]]++;
    } else {
      counter2[str2[i]] = 1;
    }
  }

  for (let property in counter1) {
    if (!counter2[property]) {
      return false;
    }
    if (counter2[property] !== counter1[property]) {
      return false;
    }
    return true;
  }
  //   console.log(counter1, counter2);
}

console.log(counttt("abbbaa", "abbaba"));
