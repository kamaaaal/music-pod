import { RoomsEntity } from "src/rooms/entities/rooms.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class UserEntity {
  // basic columns
  @PrimaryGeneratedColumn("increment")
  userId: string;

  @Column({
    unique: true,
  })
  userName: string;

  @Column()
  password: string;

  // nullable
  @Column({
    nullable: true,
  })
  email: string;

  // currentRoom
  @ManyToOne(() => RoomsEntity, (room: RoomsEntity) => room.members)
  connectedRoom: RoomsEntity;

  // relational virtual columns
  @OneToMany(() => RoomsEntity, (rooms: RoomsEntity) => rooms.createdBy)
  createdRooms: RoomsEntity[];
}
