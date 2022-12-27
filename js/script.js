let words = ['behance', 'beautiful'];

const search = document.querySelector('.search');
const wordList = document.querySelector('.word-list');
search.addEventListener('keyup', () => {
    wordList.innerHTML = '';
    words.forEach((word) => {
        let searchWord = word.indexOf(search.value);
        if (searchWord != -1) {
            wordList.innerHTML +=
                `
            <div class="word"><span> ${word.slice(0, searchWord)}</span><span style='color: red'>${search.value}</span><span>${word.slice(searchWord + search.value.length)}</span></div>
            `;
        } else if (search.value == '') {
            wordList.innerHTML += word;
        }
    })
})


