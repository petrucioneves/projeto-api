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
}