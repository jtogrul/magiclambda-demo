import { APIGatewayProxyEvent, APIGatewayProxyEventPathParameters } from 'aws-lambda'
import { handler } from './index'

describe('handler', () => {
  test('Non-existing endpoint', () => {
    const event = {
      resource: '/hello/{name}',
      httpMethod: 'GET',
      pathParameters: {
        name: 'Foo'
      } as APIGatewayProxyEventPathParameters
    } as APIGatewayProxyEvent

    const result = handler(event)

    return expect(result).resolves.toEqual({
      statusCode: 200,
      body: JSON.stringify({
        message: 'Hello Foo'
      })
    })
  })
})