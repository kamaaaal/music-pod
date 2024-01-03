import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RoomsEntity } from "./rooms.entity";

@Entity()
export class RoomsSongsEntity {
    @PrimaryGeneratedColumn('uuid')
    songsId : string;

    @Column()
    songName : string;

    @OneToOne(() => RoomsEntity, (roomsSongs :RoomsEntity) => roomsSongs.roomId)
    room : RoomsEntity;

    @Column({
        type : "integer",
        default : 1,
    })
    order : number;
}