import * as React from 'react'
import {
  graphql,
  useLazyLoadQuery,
  useMutation,
  useRelayEnvironment,
} from 'react-relay'
import { Todo } from './TodoRow'
import { TodoListQuery } from './__generated__/TodoListQuery.graphql'
import { TodoListCreateTodoMutation } from './__generated__/TodoListCreateTodoMutation.graphql'
import { fetchQuery } from 'relay-runtime'

export const TodoListQueryTaggedNode = graphql`
  query TodoListQuery {
    todos {
      id
      ...TodoRowFragment
    }
  }
`

export const TodoList: React.FC = () => {
  const relayEnvironment = useRelayEnvironment()
  const { todos } = useLazyLoadQuery<TodoListQuery>(TodoListQueryTaggedNode, {})

  const [createTodo] = useMutation<TodoListCreateTodoMutation>(graphql`
    mutation TodoListCreateTodoMutation(
      $title: String!
      $description: String!
    ) {
      createTodo(input: { title: $title, description: $description }) {
        id
      }
    }
  `)

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = React.useCallback(
    async (event) => {
      event.preventDefault()

      const data = new FormData(event.currentTarget)

      event.currentTarget.reset()

      createTodo({
        variables: {
          title: data.get('title').toString(),
          description: data.get('description').toString(),
        },
        async onCompleted() {
          await fetchQuery(
            relayEnvironment,
            TodoListQueryTaggedNode,
            {}
          ).toPromise()
        },
      })
    },
    [createTodo, relayEnvironment]
  )

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <div>
            <input type="text" name="title" />
          </div>
        </div>

        <div>
          <label>Description</label>
          <div>
            <textarea name="description" />
          </div>
        </div>

        <button>Create Todo</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return <Todo key={todo.id} todoRef={todo} />
        })}
      </ul>
    </>
  )
}
