import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription, take, tap } from 'rxjs';
import { Usuario } from 'src/app/interfaces/users.interface';
import { UserService } from 'src/app/services/userService';

@Component({
  selector: 'app-area-medica',
  templateUrl: './area-medica.component.html',
  styleUrls: ['./area-medica.component.css']
})
export class AreaMedicaComponent {

  listaUsuarios!: any[];
  subscription!: Subscription;
  dataSource!: MatTableDataSource<any>;
  termoBusca!: string;
  // displayedColumns: string[] = ['nome', 'dataNascimento', 'email', 'telefone', 'opcoes'];
  displayedColumns: string[] = ['nome', 'dataNascimento', 'email', 'telefone'];
  constructor(private userService: UserService){}

  buscarUsuarios() {
    // Verifica se há um termo de busca fornecido
    if (this.termoBusca && this.termoBusca.trim() !== '') {
      const termoLowerCase = this.termoBusca.toLowerCase();
  
      // Filtra os usuários com base no termo de busca
      const usuariosFiltrados = this.listaUsuarios.filter(usuario =>
        usuario.nomeCompleto.toLowerCase().includes(termoLowerCase)
      );
  
      // Atualiza a fonte de dados da tabela com os usuários filtrados
      this.dataSource.data = usuariosFiltrados;
    } else {
      // Se nenhum termo de busca foi fornecido, mostra todos os usuários
      this.dataSource.data = this.listaUsuarios;
    }
  }


  listarUsusarios() {
    this.subscription = this.userService.listaUsuario()
    .pipe(
      take(1),
      tap((response: any[]) => {
      //  const usuario = response.some((item) => item.email); // Encontra o usuário com o e-mail desejado
     if (response) {
      //  const { senha, ...rest } = usuario; // Desestrutura o objeto usuário, removendo a propriedade 'senha'
      //  const usuarioWithoutSenha = { ...rest }; // Cria um novo objeto de usuário sem a propriedade 'senha'
      //  this.listaUsuarios = [usuarioWithoutSenha];
       this.dataSource = new MatTableDataSource(response);
       this.listaUsuarios = this.dataSource.data;
     } else {
       console.log('Usuário não encontrado');
     }
      })
      
     ).subscribe();
  }

  ngOnInit(){
    this.listarUsusarios()
  }

  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }
}
