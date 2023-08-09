import error from '@sveltejs/kit'
import {redirect} from '@sveltejs/kit'
import database from '$lib/server/database'
import {memoryUpdatedEvent} from '$lib/server/memoryEvents'
import {getScore} from '$lib/server/score'

export async function load({params}) {
  const db = await database()
  const topic = db.data.topics.find(t => t.id == params.topicId)
  if (!topic) throw error(404)
  const concept = topic.concepts.find(c => c.id == params.conceptId)
  if (!concept) throw error(404)
  return {topic, concept, score: await getScore()}
}

export const actions = {
  default: async event => {
    const topicId = event.params.topicId
    const conceptId = event.params.conceptId

    const formData = await event.request.formData()
    const db = await database()

    const topic = db.data.topics.find(t => t.id == topicId)
    const concept = topic.concepts.find(c => c.id == conceptId)

    concept.keywords = formData.get('keywords')
    concept.description = formData.get('description')
    concept.differentiators = formData.get('differentiators')

    await db.write()
    console.log(
      `[ Success ] Updated concept id:${conceptId} for topic:${topicId}`,
    )
    await memoryUpdatedEvent()
    throw redirect(303, `/topics/${topicId}/concepts`)
  },
}
