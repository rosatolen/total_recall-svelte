import database from '$lib/server/database'
import {getScore} from '$lib/server/score'

export async function load() {
  const db = await database()
  return {
    topics: db.data.topics,
    score: await getScore(),
  }
}
