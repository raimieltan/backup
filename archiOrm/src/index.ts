import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {Subject} from "./entity/Classes";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;

    const subject = new Subject();
    subject.className = "Programming101"

    // await connection.manager.save(user);
    await connection.manager.save(subject)

    // console.log("Saved a new user with id: " + user.id);
    console.log("Added new subject with id" + subject.id)

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    const subjects = await connection.manager.find(Subject)
    console.log("Loaded subjects: ", subjects);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
