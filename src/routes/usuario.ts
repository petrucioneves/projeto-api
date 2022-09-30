import { Router } from 'express';
import {UsuarioController} from '../controller/UsuarioController'
import { Usuario} from '../entity/Usuario'

export const routerUsuario = Router();
const usuarioCtrl = new UsuarioController();
/*
Serviço para salvar um novo usuário
*/
routerUsuario.post('/criar', async (req, res) => {
    const {name, email, senha} = req.body;
    const usuario = new Usuario(name, email, senha);
    const usuarioSalvo = await usuarioCtrl.salvar(usuario);
    res.json(usuarioSalvo);
});
/*
Serviço listar usuarios
*/
routerUsuario.get('/listar', async (req, res) => {
    const usuarios = await usuarioCtrl.recuperaUsuario();
    res.json(usuarios);
});
/*
Serviço listar apenas um usuario
*/
routerUsuario.get('/buscarUsuario/:id', async (req, res) => {
    const id = Number(req.params.id);
    const user = await usuarioCtrl.verificar(id);
    if(user!=null){
        res.json(user);
    }else{
        res.send('Usuário não existe')
    }
});

/*
Serviço deletar usuario
*/
routerUsuario.delete('/delete/:id', async (req, res) => {
   const user = await usuarioCtrl.delete(Number(req.params.id));
   if(user!=null){   
        res.json(user);
    }else{
        res.send('Usuário não existe')
    }
});

/*
Serviço editar usuario
*/
routerUsuario.put('/editar/:id', async (req, res) => {
    const id = Number(req.params.id);
    const {name,email,senha } = req.body;
    const user = new Usuario(name, email,senha);
    if(usuarioCtrl.verificar(id)!=null){  
        const a = await usuarioCtrl.editar(id, user);
        res.send()
    }
 });


 routerUsuario.get('/autenticar', async (req, res) => {
    const {email,senha } = req.body;
    const user = await usuarioCtrl.autenticar(email,senha);
    if(user==null){
        res.send('Email ou Senha inválidos');
    }else{
        res.json(user);
    }
        
});