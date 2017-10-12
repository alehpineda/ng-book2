export class Article{
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number){
    this.title = title; //agregar la equivalencia!!!!
    this.link = link; //agregar la equivalencia!!!!
    this.votes = votes || 0; //agregar la equivalencia!!!!
  }

  voteUp(): void{
    this.votes += 1
  }

  voteDown(): void{
    this.votes -= 1
  }

  //domain() es una funcion utilitaria que extrae el dominio de una URL
  domain(): string{
    try{
      const domainAndPath: string = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    } catch(err){
      return null;
    }
  }
}
//Es buena practica separar la estructura de datos del codigo del componente.
