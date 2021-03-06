import { Module, NestModule } from '@nestjs/common'
import { ScheduleModule } from 'nest-schedule'

import * as tasks from './modules'

/**
 * Register all services under providers
 */

export function createTaskModule (): new (mock: boolean) => NestModule {
  @Module({
    providers: [],
    imports: [ ScheduleModule.register(), ...Object.values(tasks) ]
  })
  class AppTaskModule implements NestModule {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    async configure (): Promise<void> {}
  }

  return AppTaskModule
}
