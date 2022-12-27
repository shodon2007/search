let words = ['a', 'able', 'apple', 'above', 'across',
    'australia', 'against', 'apartment', 'beautiful', 'bitch',
    'business', 'become', 'between', 'breakfast',
    'building', 'cabinet', 'cafeteria', 'captain',
    'careful', 'century', 'children', 'cigarettes',
    'climbed', 'combustible', 'confidential', 'continued',
    'country', 'coupon', 'covered', 'daughter', 'decimal',
    'destination', 'developed', 'difference', 'discovered',
    'download', 'drawing', 'dress', 'each', 'edge', 'emergency',
    'english', 'employer', 'everyone', 'everything', 'experiment',
    'family', 'frontend', 'feeling', 'finished', 'firefighter', 'fuck',
    'flammable', 'flowers', 'fraction', 'gentlemen', 'girl',
    'government', 'grandparents', 'gamedev', 'ground', 'happened',
    'hardware', 'here', 'history', 'hospital', 'however', 'important',
    'information', 'instruments', 'interview', 'jumped', 'keyboard',
    'language', 'laptop', 'laundry', 'length', 'machine', 'manager',
    'message', 'middle', 'morning', 'mountain', 'northbound', 'newspapers',
    'often', 'paragraph', 'passengers', 'pedestrians', 'perishable', 'president',
    'probably', 'question', 'reached', 'receptionist', 'remember', 'reservations',
    'restaurant', 'round', 'scientist', 'sentence', 'senior', 'shodon', 'shouted',
    'skateboard', 'something', 'southbound', 'statement', 'students', 'supermarket',
    'suppose', 'surprise', 'temperature', 'themselves', 'thousand', 'together', 'training',
    'understand', 'usually', 'warning', 'website', 'whether', 'window', 'withdrawal', 'young',
];

const search = document.querySelector('.search');
const wordList = document.querySelector('.word-list');

words.forEach(word => wordList.innerHTML += `<div class='word'>${word}</div>`)
search.addEventListener('keyup', () => {
    wordList.innerHTML = '';
    words.forEach((word) => {
        let searchWord = word.indexOf(search.value);
        if (searchWord != -1) {
            wordList.innerHTML +=
                `
            <div class="word"><span> ${word.slice(0, searchWord)}</span><span style='background-color:white; color:#5182FF'>${search.value}</span><span>${word.slice(searchWord + search.value.length)}</span></div>
            `;
        } else if (search.value == '') {
            wordList.innerHTML += `<div class='word'>${word}</div>`;
        }
    });

    if (wordList.innerHTML == '') {
        wordList.innerHTML = 'Ничего не найдено :(';
    }
})


