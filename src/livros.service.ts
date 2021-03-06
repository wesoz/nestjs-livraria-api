import { Injectable } from "@nestjs/common";
import { Livro } from "./livro.model";

@Injectable()
export class LivrosService {
    livros: Livro[] = [
        new Livro("LIV01", "Livro de TDD e BDD", 29.90),
        new Livro("LIV02", "Livro Iniciando com Flutter", 39.90),
        new Livro("LIV03", "Livro Inteligência Artificial", 29.90),
    ];

    obterTodos(): Livro[] {
        return this.livros;
    }

    obterUm(id: number): Livro {
        return this.livros[0];
    }

    criar(livro: Livro): void {
        this.livros.push(livro);
    }

    alterar(livro: Livro): Livro {
        return livro;
    }

    apagar(id: number): void {
        this.livros.pop();
    }
}