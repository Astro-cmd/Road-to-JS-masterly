// create variables using index.html to work with

const accordion = document.getElementsByClassName('content-container');

for (let i = 0; i < accordion.length; i++) {

    accordion[i].addEventListener('click', function () {

        // Close all other accordion items
        for (let j = 0; j < accordion.length; j++) {
            if (accordion[j] !== this) {
                accordion[j].classList.remove('active');
            }
        }

        // Open/close the clicked item
        this.classList.toggle('active');

    });

}
