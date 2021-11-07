let likebtn = document.querySelector('.fa-heart');
let bookmarkbtn = document.querySelector('.fa-bookmark');
likebtn.addEventListener('click', changeLike);
bookmarkbtn.addEventListener('click', changeBookmark);

function changeLike() {
    if(likebtn.classList.contains('far')){
        likebtn.className = 'fas fa-heart'
    }
    else {
        likebtn.className = 'far fa-heart'
    }
}

function changeBookmark(e) {
    if(bookmarkbtn.classList.contains('far')){
        bookmarkbtn.className = 'fas fa-bookmark'
    }
    else {
        bookmarkbtn.className = 'far fa-bookmark'
    }
}