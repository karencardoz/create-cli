import { insertDB, saveDB, getDB } from './db.js'

export const newNote = async (note, tags) => {
  const newNote = {
    tags,
    content: note,
    id: Date.now(),
  }
  await insertDB(newNote)
  return newNote
}

export const getAllNotes = async () => {
  const { note } = await getDB()
  return note
}
export const findNotes = async (filter) => {
  const note = await getAllNotes()
  return note.filter((note) =>
    note.content.toLowerCase().includes(filter.toLowerCase())
  )
}

export const removeNote = async (id) => {
  const note = await getAllNotes()
  const match = note.find((note) => note.id === id)

  if (match) {
    const newNotes = note.filter((note) => note.id !== id)
    await saveDB({ note: newNotes })
    return id
  }
}

export const removeAllNotes = async () => {
  await saveDB({ note: [] })
}
