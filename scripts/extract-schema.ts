import { typeDefs } from '../generated/prisma-client/prisma-schema'
import fs from 'fs'
import path from 'path'

fs.writeFileSync(path.join(__dirname, '../graphql/schema.graphql'), typeDefs)
