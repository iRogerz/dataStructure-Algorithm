isSubsequence("hello", "hello Dear"); // true
isSubsequence("book", "brooklyn"); // true
isSubsequence("abc", "bac"); // false (order matters)
isSubsequence("", "abc"); // true

/// 我自己的寫法
function subsequence(str1, str2) {
  let pointer1 = 0;

  for (let i = 0; i < str2.length; i++) {
    if (str1[pointer1] == str2[i]) {
      pointer1++;
    }
  }
  console.log(pointer1 >= str1.length);
  return pointer1 >= str1.length;
}

function isSubsequence(str1, str2) {
  if (str1.length == 0) {
    console.log(true);
    return true;
  }

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer2 < str2.length) {
    if (str1[pointer1] == str2[pointer2]) {
      pointer1++;
    }
    if (pointer1 >= str1.length) {
      console.log(true);
      return true;
    }
    pointer2++;
  }

  console.log(false);
  return false;
}
