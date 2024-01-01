import { RoomsEntity } from "src/rooms/entities/rooms.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity{

    // basic columns
    @PrimaryGeneratedColumn("rowid")
    userId : string

    @Column({
        unique : true
    })
    userName : string;
    @Column()
    password : string;

    // nullable 
    @Column({
        nullable : true
    })
    email : string

    // relational virtual columns 
    @OneToMany(() => RoomsEntity,(rooms : RoomsEntity) => rooms.createdBy)
    createdRooms : RoomsEntity[];


} 