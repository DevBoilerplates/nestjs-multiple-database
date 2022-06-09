import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class Budget {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  startDateTime: number;

  @Column()
  endDateTime: number;
}
