/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime'
export type TodoListCreateTodoMutationVariables = {
  title: string
  description: string
}
export type TodoListCreateTodoMutationResponse = {
  readonly createTodo: {
    readonly id: string
  }
}
export type TodoListCreateTodoMutation = {
  readonly response: TodoListCreateTodoMutationResponse
  readonly variables: TodoListCreateTodoMutationVariables
}

/*
mutation TodoListCreateTodoMutation(
  $title: String!
  $description: String!
) {
  createTodo(input: {title: $title, description: $description}) {
    id
  }
}
*/

const node: ConcreteRequest = (function () {
  var v0 = {
      defaultValue: null,
      kind: 'LocalArgument',
      name: 'description',
    },
    v1 = {
      defaultValue: null,
      kind: 'LocalArgument',
      name: 'title',
    },
    v2 = [
      {
        alias: null,
        args: [
          {
            fields: [
              {
                kind: 'Variable',
                name: 'description',
                variableName: 'description',
              },
              {
                kind: 'Variable',
                name: 'title',
                variableName: 'title',
              },
            ],
            kind: 'ObjectValue',
            name: 'input',
          },
        ],
        concreteType: 'Todo',
        kind: 'LinkedField',
        name: 'createTodo',
        plural: false,
        selections: [
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
    ]
  return {
    fragment: {
      argumentDefinitions: [v0 /*: any*/, v1 /*: any*/],
      kind: 'Fragment',
      metadata: null,
      name: 'TodoListCreateTodoMutation',
      selections: v2 /*: any*/,
      type: 'Mutation',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [v1 /*: any*/, v0 /*: any*/],
      kind: 'Operation',
      name: 'TodoListCreateTodoMutation',
      selections: v2 /*: any*/,
    },
    params: {
      cacheID: '1c7e9c26f9ec99cc9d3a52a31d28683f',
      id: null,
      metadata: {},
      name: 'TodoListCreateTodoMutation',
      operationKind: 'mutation',
      text:
        'mutation TodoListCreateTodoMutation(\n  $title: String!\n  $description: String!\n) {\n  createTodo(input: {title: $title, description: $description}) {\n    id\n  }\n}\n',
    },
  }
})()
;(node as any).hash = 'c910748cd65dbc1597d84002027e2ce2'
export default node
