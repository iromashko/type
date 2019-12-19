import { User } from './model/User';

const user = new User({ name: "testname", age: 55 });
user.on("change", () => { console.log(`change `); });
user.on("change", () => { console.log(`change `); });
user.on("trigger", () => { console.log(`trigger event`); });
user.trigger("change");
user.trigger("trigger");

