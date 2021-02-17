import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { loadEnv } from '~/utils/loadEnv'

loadEnv()

console.log('NODE_ENV', process.env.NODE_ENV)
console.log('DB_HOST', process.env.DB_HOST)

async function bootstrap () {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}

bootstrap()
