import { VersionGraph } from '@start9labs/start-sdk'
import { current } from './current'
import { v_6_4_4_10685_6 } from './v6.4.4.10685_6'

export const versionGraph = VersionGraph.of({
  current,
  other: [v_6_4_4_10685_6],
})
