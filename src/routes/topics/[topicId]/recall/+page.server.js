import database from '$lib/server/database'
import {forgottenMemoryFoundEvent} from '$lib/server/memoryEvents'
import {getScore} from '$lib/server/score'

export async function load({params}) {
  const db = await database()
  const topic = db.data.topics.find(t => t.id == params.topicId)
  const memories = topic.concepts
    .concat(topic.challenges)
    .concat(topic.principles)
  return {
    memories,
    score: await getScore(),
  }
}

export const actions = {
  default: async event => {
    const formData = await event.request.formData()
    if (formData.get('memoryForgotten')) await forgottenMemoryFoundEvent()
  },
}
