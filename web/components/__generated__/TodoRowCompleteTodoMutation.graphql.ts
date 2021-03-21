/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime'
export type TodoRowCompleteTodoMutationVariables = {
  id: string
}
export type TodoRowCompleteTodoMutationResponse = {
  readonly completeTodo: {
    readonly completed: boolean
  }
}
export type TodoRowCompleteTodoMutation = {
  readonly response: TodoRowCompleteTodoMutationResponse
  readonly variables: TodoRowCompleteTodoMutationVariables
}

/*
mutation TodoRowCompleteTodoMutation(
  $id: ID!
) {
  completeTodo(id: $id) {
    completed
    id
  }
}
*/

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'id',
      },
    ],
    v1 = [
      {
        kind: 'Variable',
        name: 'id',
        variableName: 'id',
      },
    ],
    v2 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'completed',
      storageKey: null,
    }
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'TodoRowCompleteTodoMutation',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: 'Todo',
          kind: 'LinkedField',
          name: 'completeTodo',
          plural: false,
          selections: [v2 /*: any*/],
          storageKey: null,
        },
      ],
      type: 'Mutation',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'TodoRowCompleteTodoMutation',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: 'Todo',
          kind: 'LinkedField',
          name: 'completeTodo',
          plural: false,
          selections: [
            v2 /*: any*/,
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'id',
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: '1e8e6f1716beea251bbf1259ae27bf9d',
      id: null,
      metadata: {},
      name: 'TodoRowCompleteTodoMutation',
      operationKind: 'mutation',
      text:
        'mutation TodoRowCompleteTodoMutation(\n  $id: ID!\n) {\n  completeTodo(id: $id) {\n    completed\n    id\n  }\n}\n',
    },
  }
})()
;(node as any).hash = 'df88d20ef2d2dd1bb7c90fe82a3b659b'
export default node
