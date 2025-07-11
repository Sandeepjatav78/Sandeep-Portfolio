const span1 = document.querySelector("#iam");
const span2 = document.querySelector("h2 span");

const word = "Student";
const wordList1 = ["Sandeep Kumar", "a Student.", "a Web-Developer.", "a Coder.", "a Front-End Developer.", "a Web designer.", "a Graphic designer."]
const wordList2 = ["Dancer.", "Player.", "Rider."]

function autoType(wordList, element, time) {

    let wordIndex = 0;
    let skip = 0;
    let wordListIndex = 0;
    let reverseType = false;

    setInterval(() => {
        if (skip) {
            skip--;
            return;
        }

        if (!reverseType) {
            skip = 2
            element.textContent = element.textContent + wordList[wordListIndex][wordIndex];
            wordIndex++;
        } else {
            element.textContent = element.textContent.slice(0, element.textContent.length - 1);
            wordIndex--;
        }

        if (wordIndex === wordList[wordListIndex].length) {
            skip = 6;
            reverseType = true;
        }


        if (reverseType && element.textContent.length == 0) {
            reverseType = false;
            wordListIndex++;
        }

        if (wordListIndex === wordList.length) {
            wordListIndex = 0;
        }

    }, time)
}


autoType(wordList1, span1, 100)


 function toggleMenu() {
      const menu = document.getElementById('navLinks');
      const hamburger = document.getElementById('hamburger');
      menu.classList.toggle('open');
      hamburger.classList.toggle('open');
    }