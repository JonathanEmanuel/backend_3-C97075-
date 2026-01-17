// Desarrollar con TDD (tests manuales)z
export function login(user, password) {

    const userhard = 'coderhouse';
    const passhard = '123';

    if(!password) {
      console.log('No se paso la Contraseña');
      return false
    }

    if(!user) {
      console.log('No se paso el usuario');
      return false
    }

    if( password != passhard){
      console.log('Contaseña incorrecta');
      return false
    }

    if( user != userhard){
      console.log('Credenciales incorrecta');
      return false
    }

    console.log('logueado');
    return true;
}
