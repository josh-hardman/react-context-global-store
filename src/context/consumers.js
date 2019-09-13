import { UsersConsumer } from './stores/Users'
import { AssessmentsConsumer } from './stores/Assessments'

// Key is used when injecting context into components
export default {
  users: UsersConsumer,
  assessments: AssessmentsConsumer
}
