import {Low} from 'lowdb'
import {JSONFile} from 'lowdb/node'

const database = async () => {
  const defaultData = {topics: [], score: {today: 0}}
  const db = new Low(new JSONFile('db.json'), defaultData)
  await db.read()
  return db
}

export default database
