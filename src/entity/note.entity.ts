/* eslint-disable prettier/prettier */
import { JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Column } from 'typeorm';
import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { SharedNote } from './sharedNote.entity';
import { User } from './user.entity';

@Entity()
export class Note extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  text: string;
  @Column()
  ownerId: number;

  @ManyToOne(() => User, (user) => user.notes)
  @JoinColumn({ name: 'ownerId' })
  owner: User;

  @OneToMany(() => SharedNote, (sharedNote) => sharedNote.note)
  shares: SharedNote[];
}
