class Usuario {

    nome: string;                   // string type
    idade: number;                  // number type
    isAdmin: boolean;               // boolean type
    preferencias: Array<String>;    // string array type
    telefone: [string, number];     // tuple[string,number]
    sexo: Sexo;                     // enum Sexo
    status: Status;                 // enum Status
    tipoDesconhecido: any           // para tipos desconhecidos se usa o any

    toString(): string {
        return `Nome: ${this.nome} <br />
                Idade: ${this.idade} <br />
                IsAdmin: ${this.isAdmin} <br />
                Preferências: ${this.preferencias} <br />
                Telefones: ${this.telefone} <br />
                Sexo: ${this.sexo} - ${Sexo[this.sexo]} <br />
                Status: ${this.status} - ${Status[this.status]}  <br />
                TipoDesconhecido.length: ${(this.tipoDesconhecido as string).length} <br />`;  //boxing
    }

    toAlert(): void {
        alert(this.toString());
    }
}

enum Sexo {
    Masculino = 1,
    Feminino = 2
}

enum Status {
    Ativo = 10,
    Inativo = 0,
    Bloqueado = 35
}

var us = new Usuario();
us.nome = 'Tiago';
us.idade = 29;
us.isAdmin = true;
us.preferencias = ['comer', 'beber', 'viajar'];
us.telefone = ['celular', 11945788545];
us.sexo = Sexo.Masculino;
us.status = Status.Bloqueado;
us.tipoDesconhecido = "abcde";

//us.toAlert();
document.body.innerHTML = us.toString();
