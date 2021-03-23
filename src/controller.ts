import { Controller, Get, PathParam, ok, Response } from 'magiclambda'

@Controller('/hello')
export class ExampleController {

  @Get('/{name}')
  getHelloName (@PathParam('name') name: string): Response {
    return ok({
      message: `Hello ${name}`
    })
  }
  
}