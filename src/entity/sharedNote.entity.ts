/* eslint-disable prettier/prettier */
import { JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity, Entity, PrimaryColumn } from 'typeorm';
import { Note } from './note.entity';
import { User } from './user.entity';

@Entity()
export class SharedNote extends BaseEntity {
  @PrimaryColumn()
  targetId: number;
  @ManyToOne(() => User, (user) => user.notesSharedWithYou)
  @JoinColumn({ name: 'targetId' })
  target: User;

  @PrimaryColumn()
  senderId: number;
  @ManyToOne(() => User, (user) => user.notesSharedByYou)
  @JoinColumn({ name: 'senderId' })
  sender: User;

  @PrimaryColumn()
  noteId: number;
  @ManyToOne(() => Note, (note) => note.shares)
  @JoinColumn({ name: 'noteId' })
  note: Note;
}
