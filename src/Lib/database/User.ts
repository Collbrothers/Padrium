import {
  BaseEntity,
  Column,
  Entity,
  ObjectID,
  ObjectIdColumn,
  PrimaryColumn
} from "typeorm";

@Entity("User")
export class UserEntity extends BaseEntity {
  @ObjectIdColumn({ name: "_id" })
  public _id?: ObjectID;
  @PrimaryColumn("uid") public uid: string;
  @Column("eco") public eco: UserEco = {
    coins: 50,
    level: 1,
    xp: 0,
    msg: false
  };
  @Column("badges") public badges: UserBadges = {
    dev: false,
    premium: false
  };

  constructor(id: string) {
    super();
    this.uid = id;
  }
}

export interface UserBadges {
  dev: boolean;
  premium: boolean;
}

export interface UserEco {
  coins: number;
  level: number;
  xp: number;
  msg: boolean;
}
