import { UserEntity } from "src/users/users.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

// export const STATUS = {
//     PLAYING : "PLAYING",
//     PAUSED : "PAUSED"
// } as const 

@Entity()
export class RoomsEntity{

    // just encapsulating the STATUS within the entity
    static STATUS = {
        PLAYING : "PLAYING",
        PAUSED : "PAUSED"
    } as const ;

    @PrimaryGeneratedColumn('increment')
    roomId : number;

    @Column({
        unique : true
    })
    roomName : string;

    @Column({
        nullable : true,
        type : "simple-enum",
        enum : RoomsEntity.STATUS
    })
    // the type definitions extracts the values of this.Status const object.    
    status : typeof RoomsEntity.STATUS[keyof typeof RoomsEntity.STATUS];

    // @Column()
    @ManyToOne(() => UserEntity,(user : UserEntity) => user.createdRooms)
    // for now created by and admin are same
    createdBy : UserEntity;

    @OneToMany(() => UserEntity, (user : UserEntity) => user.connectedRoom)
    members : UserEntity[];
}

