import { controllerHandler } from 'magiclambda'
import { ExampleController } from './controller'

export const handler = controllerHandler(ExampleController)