import $ from 'jquery';

var words = ['Marketing Agency.', 'Talent Management.', 'Digital Marketing.'];
var part;
var i = 0;
var offset = 0;
var len = words.length;
var forwards = true;
var skip_count = 0;
var skip_delay = 5;
var speed = 100;

var wordflick = function () {
    setInterval(function () {
        if (forwards) {
            if (offset >= words[i].length) {
                ++skip_count;
                if (skip_count === skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        } else {
            if (offset === 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                    i = 0;
                }
            }
        }
        part = words[i].substr(0, offset);
        if (skip_count === 0) {
            if (forwards) {
                offset++;
            } else {
                offset--;
            }
        }
        $('.word').text(part);
    }, speed);
};

$(document).ready(function () {
    wordflick();
});


// const myObject = ['india', 'America', 'France']

// myObject.forEach((val, index, arr) => {
//     console.log(val, index, arr);
// });

// function printMe(item) {
//     console.log(item);
// }

// myObject.forEach(printMe);

const arrObject = [
    {
        name: "qaishar zaki",
        Course: "BCA",
    }, {
        name: "Meer Zaki",
        Course: "MCA",
    }, {
        name: "Shouqat Ali",
        Course: "MBA",
    },
]

arrObject.forEach((item)=>{
console.log(`Name ${item.name} Course ${item.Course}`);
})