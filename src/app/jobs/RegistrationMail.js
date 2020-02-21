import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  options: {
    delay: 5000,
    max: 5,
    duration: 60000
  },
  async handle({ data }){
    const { user } = data;

    await Mail.sendMail({
      from: 'Queue Test <queue@queueteste.com.br>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá, ${user.name} bem-vindo ao sistema de filas da app alx :D`
    });
  }
};