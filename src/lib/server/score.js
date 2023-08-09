import database from './database'

const isToday = date => {
  const today = new Date()
  return (
    today.getDate() === date.getDate() &&
    today.getMonth() === date.getMonth() &&
    today.getFullYear() === date.getFullYear()
  )
}

const getScore = async () => {
  const db = await database()
  if (isToday(new Date(db.data.score.lastUpdated))) return db.data.score.today
  db.data.score = {
    today: 0,
    lastUpdated: new Date(),
  }
  await db.write()
  return db.data.score.today
}

const incrementScoreBy = async count => {
  const db = await database()
  db.data.score.today += count
  db.data.score.lastUpdated = new Date()
  await db.write()
}

export {getScore, incrementScoreBy}
