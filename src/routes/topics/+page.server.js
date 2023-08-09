import {redirect} from '@sveltejs/kit'
import {v4 as uuidv4} from 'uuid'
import database from '$lib/server/database'

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({request}) => {
    const data = await request.formData()
    const db = await database()
    const now = new Date()
    const id = uuidv4()
    db.data.topics.push({
      id,
      title: data.get('title'),
      createdAt: now,
      updatedAt: now,
      concepts: [],
      challenges: [],
      principles: [],
    })
    await db.write()
    console.log(`[ Success ] Topic saved id:${id}`)
    throw redirect(303, '/')
  },
}
