import { User } from './Models/User';

const user = new User({ name: 'ashish', age: 20 });

user.on('click', () => {
  console.log('change no 1');
});
user.on('click', () => {
  console.log('oops click 2');
});
user.on('change', () => {
  console.log('orignal change');
});

user.trigger('change');

console.log(user);
