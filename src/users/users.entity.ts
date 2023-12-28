import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity{

    @PrimaryGeneratedColumn("rowid")
    userId : string

    @Column({
        unique : true
    })
    userName : string;
    @Column()
    password : string;
    @Column({
        nullable : true
    })
    email : string
} 