//Es buena practica separar la estructura de datos del codigo del componente.
export class Article{
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number){
    this.title;
    this.link;
    this.votes == votes || 0;
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
