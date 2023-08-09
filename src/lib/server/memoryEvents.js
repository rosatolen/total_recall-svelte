import {incrementScoreBy} from './score'

const newMemoryEvent = async () => {
  await incrementScoreBy(1)
  console.log(`[ Info ] New memory event`)
}

const memoryUpdatedEvent = async () => {
  await incrementScoreBy(1)
  console.log(`[ Info ] Memory updated event`)
}

const forgottenMemoryFoundEvent = async () => {
  await incrementScoreBy(5)
  console.log(`[ Info ] Memory forgotten event`)
}

export {newMemoryEvent, memoryUpdatedEvent, forgottenMemoryFoundEvent}
