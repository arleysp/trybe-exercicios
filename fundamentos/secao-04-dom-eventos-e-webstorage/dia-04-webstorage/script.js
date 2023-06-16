
sessionStorage.setItem('firstname', 'Adam');
sessionStorage.setItem('lastname', 'Smith');
console.log(sessionStorage.length);
sessionStorage.removeItem('lastname');
console.log(sessionStorage.length);
sessionStorage.clear();
console.log(sessionStorage.length);
