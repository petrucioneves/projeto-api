import { Router } from 'express';
import {UsuarioController} from '../controller/UsuarioController'
import { Usuario} from '../entity/Usuario'

export const routerUsuario = Router();
const usuarioCtrl = new UsuarioController();
/*
Serviço para salvar um novo usuário
*/
routerUsuario.post('/', async (req, res) => {
    const {name, email, senha} = req.body;
    const usuario = new Usuario(name, email, senha);
    const usuarioSalvo = await usuarioCtrl.salvar(usuario);
    res.json(usuarioSalvo);
});
/*
Serviço recuperar usuarios
*/
routerUsuario.get('/', async (req, res) => {
    const usuarios = await usuarioCtrl.recuperaUsuario();
    res.json(usuarios);
});