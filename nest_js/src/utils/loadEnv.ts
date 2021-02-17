import dotenv from 'dotenv'
import fs from 'fs'
import { join } from 'path'

export function loadEnv (): void {
  const total = dotenv.parse(fs.readFileSync(join(process.cwd(), '.env')))
  const envFile = `.env.${process.env.NODE_ENV == 'dev' ? 'dev' : 'prod'}`
  const env = dotenv.parse(fs.readFileSync(join(process.cwd(), envFile)))
  process.env = Object.assign(process.env, total, env)
}