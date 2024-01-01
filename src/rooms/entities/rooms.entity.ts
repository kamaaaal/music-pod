import { UserEntity } from "src/users/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RoomsEntity{

    @PrimaryGeneratedColumn('increment')
    roomId : number;

    @Column()
    roomName : string;

    // @Column()
    @ManyToOne(() => UserEntity,(user : UserEntity) => user.createdRooms)
    // for now created by and admin are same
    createdBy : UserEntity;

    // @Column()

}