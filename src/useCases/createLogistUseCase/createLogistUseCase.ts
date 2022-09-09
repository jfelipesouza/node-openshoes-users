import { Logist } from '@prisma/client'
import { client } from '../../prisma/client'

export class CreateLogistUseCase {
  async execute(): Promise<Logist> {
    const logist = client.logist.create({
      data: {}
    })
    return logist
  }
}
