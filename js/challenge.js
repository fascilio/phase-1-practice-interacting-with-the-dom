
let count = 0;
let isPaused = false;
let timer = setInterval(incrementCounter, 1000);

function incrementCounter() {
  if (!isPaused) {
    count++;
    document.getElementById('counter').innerText = count;
  }
}

document.getElementById('plus').addEventListener('click', function() {
  if (!isPaused) {
    count++;
    document.getElementById('counter').innerText = count;
  }
});

document.getElementById('minus').addEventListener('click', function() {
  if (!isPaused) {
    count--;
    document.getElementById('counter').innerText = count;
  }
});

document.getElementById('heart').addEventListener('click', function() {
  if (!isPaused) {
    let likesList = document.querySelector('.likes');
    let currentItem = document.getElementById(`item-${count}`);

    if (currentItem) {
      let currentLikes = parseInt(currentItem.querySelector('.count').innerText);
      currentItem.querySelector('.count').innerText = currentLikes + 1;
    } else {
      let newListItem = document.createElement('li');
      newListItem.setAttribute('id', `item-${count}`);
      newListItem.innerHTML = `${count} has been liked <span class='count'>1</span> time`;
      likesList.appendChild(newListItem);
    }
  }
});

document.getElementById('pause').addEventListener('click', function() {
  if (isPaused) {
    isPaused = false;
    timer = setInterval(incrementCounter, 1000);
    document.getElementById('pause').innerText = 'pause';
    document.getElementById('plus').disabled = false;
    document.getElementById('minus').disabled = false;
    document.getElementById('heart').disabled = false;
  } else {
    isPaused = true;
    clearInterval(timer);
    document.getElementById('pause').innerText = 'resume';
    document.getElementById('plus').disabled = true;
    document.getElementById('minus').disabled = true;
    document.getElementById('heart').disabled = true;
  }
});

document.getElementById('restart').addEventListener('click', function() {
  count = 0;
  document.getElementById('counter').innerText = count;
  let likesList = document.querySelector('.likes');
  likesList.innerHTML = '';
});

document.getElementById('comment-form').addEventListener('submit', function(event) {
  event.preventDefault();
  let commentInput = document.getElementById('comment-input');
  let comment = commentInput.value;
  let commentsList = document.getElementById('list');
  let newComment = document.createElement('div');
  newComment.innerText = comment;
  commentsList.appendChild(newComment);
  commentInput.value = '';
});

