const { Observable } = require('rxjs');
const breadcrumb = new Array();

const observable = Observable.create(function (observer) {
  observer.next('Filmes');
  observer.next('Aventura');
  observer.next('Espacial');
  observer.next('Star Wars');
  setTimeout(() =>{
      observer.next('aaa')
  }, 3000)
  observer.complete();
});

observable.subscribe({
  next: link => breadcrumb.push(link),
  error: err => console.error(`​Mostra se algo der errado: ${err}`),
  complete: () => console.log(breadcrumb.join("->"))
});