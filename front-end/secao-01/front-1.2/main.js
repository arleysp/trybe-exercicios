const USERS_API = 'https://dummyjson.com/users';

fetch(USERS_API)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(error => error.message);

Swal.fire({
  title: 'Custom width, padding, color, background.',
  width: 600,
  padding: '3em',
  color: '#716add',
  background: '#fff url(/images/trees.png)',
  backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `
})