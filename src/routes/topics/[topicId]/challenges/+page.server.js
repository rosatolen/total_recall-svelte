import error from '@sveltejs/kit'
import {v4 as uuidv4} from 'uuid'
import {redirect} from '@sveltejs/kit'
import database from '$lib/server/database'
import {newMemoryEvent} from '$lib/server/memoryEvents'
import {getScore} from '$lib/server/score'

export async function load({params}) {
  const db = await database()
  const topic = db.data.topics.find(t => t.id == params.topicId)
  if (!topic) throw error(404)
  return {topic, score: await getScore()}
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async event => {
    const topicId = event.params.topicId

    const formData = await event.request.formData()
    const db = await database()

    const topic = db.data.topics.find(t => t.id == topicId)
    const id = uuidv4()
    topic.challenges.push({
      id,
      prompt: formData.get('prompt'),
      answer: formData.get('answer'),
      type: 'challenge',
      topicId,
    })
    await db.write()
    console.log(`[ Success ] Created challenge id:${id} for topic:${topicId}`)
    await newMemoryEvent()
    throw redirect(303, `/topics/${topicId}/challenges`)
  },
}
