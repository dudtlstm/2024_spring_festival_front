const hasFinalConsonant= (word) =>{
  const lastChar = word[word.length - 1];
  const code = lastChar.charCodeAt(0);
  // 한글의 유니코드 범위에서 받침이 있는지 확인
  return (code - 44032) % 28 !== 0;
}

export const getCorrectPostposition=(word) =>{
  return hasFinalConsonant(word) ? "이" : "가";
}
