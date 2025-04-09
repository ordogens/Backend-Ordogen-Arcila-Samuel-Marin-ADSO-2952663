import { UserRepository } from "../repositories/userRepository";
import { userDto } from "../dto/userDTO";
const userRepository = new UserRepository();

export class UserService {
    getAll(){
        return userRepository.getUsers();
    }

    getById(id: number){
        return userRepository.getUserById(id);
    }

    create(user: userDto){
        return userRepository.createUser(user);
    }

    update(id: number, user: userDto){
        return userRepository.updateUser(id, user);
    }

    delete(id: number){
        return userRepository.deleteUser(id);
    }
}