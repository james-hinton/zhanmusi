export const translate = async (query) => {
  // Split query into words
  const words = query.split(" ");
  // Translate each word
  const translatedWords = await Promise.all(
    words.map(async (word) => {
      console.log('Word: ', word);
      const url = `https://www.google.com/inputtools/request?ime=pinyin&ie=utf-8&oe=utf-8&app=translate&uv&text=${word}&num=10&cb=_callbacks_.loadWords&_=1658179190396`;
      const response = await fetch(url);
      // Response is NOT json
      let text = await response.text();
      let parsedText = text.split("loadWords(")[1].split(")")[0];
      let json = JSON.parse(parsedText);

      console.log(json)
      // Get the first translation
      return 
    })
  );

  console.log(translatedWords);

  return {
    chinese: "詹姆斯是最酷的人",
    english: "james is the coolest person",
    pinyin: "Zhānmǔsī shì zuì kù de rén",
    date: new Date().toLocaleString(),
    query: query,
  };
};
