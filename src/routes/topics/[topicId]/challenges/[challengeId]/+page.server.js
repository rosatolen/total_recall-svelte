import error from '@sveltejs/kit'
import {redirect} from '@sveltejs/kit'
import database from '$lib/server/database'
import {memoryUpdatedEvent} from '$lib/server/memoryEvents'
import {getScore} from '$lib/server/score'

export async function load({params}) {
  const db = await database()
  const topic = db.data.topics.find(t => t.id == params.topicId)
  if (!topic) throw error(404)
  const challenge = topic.challenges.find(c => c.id == params.challengeId)
  if (!challenge) throw error(404)
  return {challenge, score: await getScore()}
}

export const actions = {
  default: async event => {
    const topicId = event.params.topicId
    const challengeId = event.params.challengeId

    const formData = await event.request.formData()
    const db = await database()

    const topic = db.data.topics.find(t => t.id == topicId)
    const challenge = topic.challenges.find(
      c => c.id == event.params.challengeId,
    )

    challenge.prompt = formData.get('prompt')
    challenge.answer = formData.get('answer')

    await db.write()
    console.log(
      `[ Success ] Updated challenge id:${challengeId} for topic:${topicId}`,
    )
    await memoryUpdatedEvent()
    throw redirect(303, `/topics/${topicId}/challenges`)
  },
}
