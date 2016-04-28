interface IUsuario {
    nome: string;
    sobrenome?: string;                                 //opcional nao obrigado a passar
    idade: number;
    calculaIdade(): void;             // definindo uma function como obrigatoria
    toString(): string;                                 // definindo uma funcao obrigatorioa que retorna string
}

class Usuario implements IUsuario {
    nome: string;
    idade: number;
    dataNascimento: Date;
    calculaIdade(): void {
        this.idade = new Date().getFullYear() - this.dataNascimento.getFullYear();
    }
    toString(): string {
        return `nome: ${this.nome} - idade ${this.idade}`;
    }
}

let us = new Usuario();
us.nome = "Tiago";
us.dataNascimento = new Date(1987, 3, 13);
us.calculaIdade();

// -----------------

document.body.innerHTML = us.toString();
