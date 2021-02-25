// ? custom hook like function to return object by 
// ? searching the id
export function findId(data, idToLookFor){
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === idToLookFor) {
      return { 
        id: data[i].id,
        img: data[i].img,
        title: data[i].title,
        info: data[i].info,
        info2: data[i].info2,
        features: data[i].features,
        technologies: data[i].technologies,
        likes: data[i].likes,
        learnedFront: data[i].learnedFront,
        learnedBack: data[i].learnedBack,
        url: data[i].url,
        repo: data[i].repo
    };
  }
}}
