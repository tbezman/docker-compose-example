import * as React from 'react'
import { graphql, useFragment, useMutation } from 'react-relay'
import { TodoRowFragment$key } from './__generated__/TodoRowFragment.graphql'

type TodoProps = {
  todoRef: TodoRowFragment$key
}

export const Todo: React.FC<TodoProps> = ({ todoRef }) => {
  const { id, title, description, createdDate, completed } = useFragment(
    graphql`
      fragment TodoRowFragment on Todo {
        id
        title
        description
        completed
        createdDate
      }
    `,
    todoRef
  )

  const [completeTodo] = useMutation(graphql`
    mutation TodoRowCompleteTodoMutation($id: ID!) {
      completeTodo(id: $id) {
        completed
      }
    }
  `)

  const handleComplete = React.useCallback(() => {
    completeTodo({
      variables: {
        id,
      },
    })
  }, [completeTodo, id])

  return (
    <li>
      <div>
        <strong>Title:</strong>
        {title}
      </div>
      <div>
        <strong>Description:</strong>
        {description}
      </div>
      <div>
        <strong>Created Date:</strong>
        {createdDate}
      </div>
      <div>
        <strong>Completed</strong>
        {completed ? 'Yes' : 'No'}
      </div>

      {!completed && <button onClick={handleComplete}>Complete</button>}
    </li>
  )
}
