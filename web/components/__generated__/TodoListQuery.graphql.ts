/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type TodoListQueryVariables = {}
export type TodoListQueryResponse = {
  readonly todos: ReadonlyArray<{
    readonly id: string
    readonly ' $fragmentRefs': FragmentRefs<'TodoRowFragment'>
  }>
}
export type TodoListQuery = {
  readonly response: TodoListQueryResponse
  readonly variables: TodoListQueryVariables
}

/*
query TodoListQuery {
  todos {
    id
    ...TodoRowFragment
  }
}

fragment TodoRowFragment on Todo {
  id
  title
  description
  completed
  createdDate
}
*/

const node: ConcreteRequest = (function () {
  var v0 = {
    alias: null,
    args: null,
    kind: 'ScalarField',
    name: 'id',
    storageKey: null,
  }
  return {
    fragment: {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'TodoListQuery',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: 'Todo',
          kind: 'LinkedField',
          name: 'todos',
          plural: true,
          selections: [
            v0 /*: any*/,
            {
              args: null,
              kind: 'FragmentSpread',
              name: 'TodoRowFragment',
            },
          ],
          storageKey: null,
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [],
      kind: 'Operation',
      name: 'TodoListQuery',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: 'Todo',
          kind: 'LinkedField',
          name: 'todos',
          plural: true,
          selections: [
            v0 /*: any*/,
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'title',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'description',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'completed',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'createdDate',
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: 'f43d9590c19cbd82632d9de6d21c0fa3',
      id: null,
      metadata: {},
      name: 'TodoListQuery',
      operationKind: 'query',
      text:
        'query TodoListQuery {\n  todos {\n    id\n    ...TodoRowFragment\n  }\n}\n\nfragment TodoRowFragment on Todo {\n  id\n  title\n  description\n  completed\n  createdDate\n}\n',
    },
  }
})()
;(node as any).hash = 'c87542573ec0511ea0bcb1f274eb8988'
export default node
