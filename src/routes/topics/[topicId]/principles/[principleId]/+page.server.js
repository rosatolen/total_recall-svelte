import error from '@sveltejs/kit'
import {redirect} from '@sveltejs/kit'
import database from '$lib/server/database'
import {memoryUpdatedEvent} from '$lib/server/memoryEvents'
import {getScore} from '$lib/server/score'

export async function load({params}) {
  const db = await database()
  const topic = db.data.topics.find(t => t.id == params.topicId)
  if (!topic) throw error(404)
  const principle = topic.principles.find(p => p.id == params.principleId)
  if (!principle) throw error(404)
  return {topic, principle, score: await getScore()}
}

export const actions = {
  default: async event => {
    const topicId = event.params.topicId
    const principleId = event.params.principleId

    const formData = await event.request.formData()
    const db = await database()

    const topic = db.data.topics.find(t => t.id == topicId)
    const principle = topic.principles.find(p => p.id == principleId)

    principle.principle = formData.get('principle')
    principle.description = formData.get('description')

    await db.write()
    console.log(
      `[ Success ] Updated principle id:${principleId} for topic:${topicId}`,
    )
    await memoryUpdatedEvent()
    throw redirect(303, `/topics/${topicId}/principles`)
  },
}
