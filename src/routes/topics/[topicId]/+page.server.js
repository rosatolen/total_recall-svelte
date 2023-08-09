import database from '$lib/server/database'

export async function load({params}) {
  const db = await database()
  const topic = db.data.topics.find(t => t.id == params.topicId)
  return {
    topic,
  }
}
