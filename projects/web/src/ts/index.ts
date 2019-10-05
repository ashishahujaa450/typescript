import { User } from './Models/User';

const user = new User({ id: 1 });
const user2 = new User({ name: 'ajit', age: 0 });

user2.save();
user.set({ name: 'newname', age: 1500 });
user.save();
