import { TodoList, TodoListQueryTaggedNode } from '../components/TodoList'
import {
  createRelayEnvironment,
  serializeRelayEnvironment,
} from '../utils/RelayEnvironment'
import { fetchQuery } from 'relay-runtime'

export const Home = (): JSX.Element => {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoList />
    </div>
  )
}

Home.getInitialProps = async () => {
  const environment = createRelayEnvironment({})

  await fetchQuery(environment, TodoListQueryTaggedNode, {}).toPromise()

  return {
    relayRecords: serializeRelayEnvironment(environment),
  }
}

export default Home
