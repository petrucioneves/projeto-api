import { userInfo } from "os";
import { getManager } from "typeorm";
import { Usuario } from "../entity/Usuario"

export class UsuarioController{

    async salvar(usuario: Usuario){
        const usuarioSalvo =  getManager().save(usuario);
        return usuarioSalvo;
    }
    async recuperaUsuario(){
        const usuarioSalvo = await getManager().find(Usuario);
        return usuarioSalvo;
    }
    async delete(id:number){
        const user =  await getManager().delete(Usuario,id);
    }
   async editar(id:number,usuario:Usuario){
        const user = await getManager().update(Usuario,id,usuario);
    
   }

   async verificar(id:number){
        const user = await getManager().getRepository(Usuario).findOne({
            where: {
                id,
            }    
        })
        return user;
    }

    async autenticar(email:string, senha:string){
        const user = await getManager().getRepository(Usuario).findOne({
            where: {
                email,
                senha
            }    
        })
        return user;
    }
}