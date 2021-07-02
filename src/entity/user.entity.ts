/* eslint-disable prettier/prettier */
import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from 'typeorm';
import { Entity } from 'typeorm';
import { Note } from './note.entity';
import { SharedNote } from './sharedNote.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @OneToMany(() => Note, (note) => note.owner)
  notes: Note[];

  @OneToMany(() => SharedNote, (sharednote) => sharednote.target)
  notesSharedWithYou: SharedNote[];

  @OneToMany(() => SharedNote, (sharednote) => sharednote.sender)
  notesSharedByYou: SharedNote[];
}
