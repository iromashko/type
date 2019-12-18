console.log(``)
import { User } from "./model/User";

const user = new User({ name: "testname", age: 55 });
user.on("change", () => { });
user.on("change", () => { });
user.on("trigger", () => { });

console.log(user);
