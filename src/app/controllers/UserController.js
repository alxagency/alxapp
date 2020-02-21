import Queue from '../lib/Queue';

import { User } from '../models';

export default {

  async index(req, res){
    const users = await User.findAll();
    return res.json(users);
  },

  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    // Adicionar job RegistrationMail na fila
    await Queue.add('RegistrationMail', { user });

    return res.json(user);
  }
};