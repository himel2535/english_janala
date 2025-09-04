const loadLessons = () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";
  fetch(url)
    .then((res) => res.json())
    .then((json) => displayLessons(json.data));
};
loadLessons();

const loadLevelWord=(id)=>{
    const url=`https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayLevelWord(data.data))
}


// id: 162
// level: 6
// meaning: "অত্যাচারী"
// pronunciation: "নেফ্যারিয়াস"
// word: "Nefarious"

const displayLevelWord=(words)=>{
    const wordContainer=document.getElementById("word-container");
    wordContainer.innerHTML=""

    for(let word of words){
        console.log(word)
        const card=document.createElement("div")
        card.innerHTML=`
              <div class="bg-white rounded-xl shadow-sm text-center py-10 px-7 space-y-4">
        <h2 class="font-bold text-2xl">${word.word}</h2>
        <p class="font-semibold">Meaning /Pronounciation</p>
        <div class="text-2xl font-medium font-bangla">${word.meaning} /${word.pronunciation}</div>
        <div class="flex justify-between items-center ">
          <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80] "><i class="fa-solid fa-circle-info"></i></button>
          <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
        </div>
      </div>
        `;
        wordContainer.append(card)
    }
}

const displayLessons = (lessons) => {
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";

  for (let lesson of lessons) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
            <button onclick="loadLevelWord(${lesson.level_no})" href="" class="btn btn-outline btn-primary">
            <i class="fa-solid fa-book-open">
            </i>Lesson - ${lesson.level_no}</button>
        `;
    levelContainer.appendChild(btnDiv)
  }
};
