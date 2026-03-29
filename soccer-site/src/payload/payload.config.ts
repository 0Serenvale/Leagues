import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Clubs } from './collections/Clubs'
import { Teams } from './collections/Teams'
import { Seasons } from './collections/Seasons'
import { Leagues } from './collections/Leagues'
import { Projects } from './collections/Projects'
import { ProjectTeams } from './collections/ProjectTeams'
import { Matchdays } from './collections/Matchdays'
import { Matches } from './collections/Matches'
import { Venues } from './collections/Venues'
import { Persons } from './collections/Persons'
import { TeamPlayers } from './collections/TeamPlayers'
import { MatchEvents } from './collections/MatchEvents'
import { Standings } from './collections/Standings'
import { News } from './collections/News'
import { Settings } from './globals/Settings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Media,
    Clubs,
    Teams,
    Seasons,
    Leagues,
    Projects,
    ProjectTeams,
    Matchdays,
    Matches,
    Venues,
    Persons,
    TeamPlayers,
    MatchEvents,
    Standings,
    News
  ],
  globals: [Settings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'secret',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || 'postgresql://postgres:postgres@127.0.0.1:5432/payload-soccer-site',
    },
  }),
})
