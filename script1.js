'use strict';

function LikeButton() {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return 'You liked this!';
  }


  return React.createElement(
    'button',
    {
      onClick: () => setLiked(true),
    },
    'Like'
  );
}

const div2 = document.getElementById('div2');
const root1 = ReactDOM.createRoot(div2);
root1.render(React.createElement(LikeButton));
