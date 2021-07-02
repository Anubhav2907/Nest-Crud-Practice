/* eslint-disable prettier/prettier */
import { createConnection } from 'typeorm';
import { Note } from './entity/note.entity';
import { SharedNote } from './entity/sharedNote.entity';
import { User } from './entity/user.entity';

export default createConnection()
  .then(async (conn) => {
    const ul = await User.create({ username: 'Anubhav' }).save();
    await User.update({ id: ul.id }, { username: 'Anxbhxv' });
    await User.findOne({ username: 'Anxbhxv' });
    await User.find({ where: { username: 'Anxbhxv' } });
    await User.delete({ username: 'Anxbhxv' });

    const hiren = await User.create({ username: 'Hiren' });
    const note = await Note.create({
      text: 'This is my note',
      ownerId: hiren.id,
    }).save();
    const notes = await Note.find({ ownerId: hiren.id });
    console.log(notes);

    const Vivek = await User.create({ username: 'Vivek' }).save();
    await SharedNote.create({
      senderId: Vivek.id,
      targetId: hiren.id,
      noteId: note.id,
    }).save();
    console.log('-----------------------------');
    const notesSharedWithHiren = await SharedNote.find({
      where: { targetId: hiren.id },
      relations: ['note'],
    });
    console.log(notesSharedWithHiren);

    await User.findOne(
      { id: hiren.id },
      {
        relations: [
          'notesSharedWithYou',
          'notesSharedWithYou.note',
          'notesSharedByYou',
          'notesSharedByYou.note',
        ],
      },
    );
  })
  .catch((err) => console.log(err));
