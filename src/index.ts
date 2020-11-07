import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({
    name: 'Johnny',
    age: 25
});

const root = document.getElementById('root');

const userForm = new UserForm(
    root,
    user,
);

if (root) {
    userForm.render();
} else {
    throw new Error('Root element not found');
}
