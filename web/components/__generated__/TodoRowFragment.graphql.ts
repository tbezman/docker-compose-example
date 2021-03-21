/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type TodoRowFragment = {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly completed: boolean
  readonly createdDate: string
  readonly ' $refType': 'TodoRowFragment'
}
export type TodoRowFragment$data = TodoRowFragment
export type TodoRowFragment$key = {
  readonly ' $data'?: TodoRowFragment$data
  readonly ' $fragmentRefs': FragmentRefs<'TodoRowFragment'>
}

const node: ReaderFragment = {
  argumentDefinitions: [],
  kind: 'Fragment',
  metadata: null,
  name: 'TodoRowFragment',
  selections: [
    {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'id',
      storageKey: null,
    },
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
  type: 'Todo',
  abstractKey: null,
}
;(node as any).hash = 'bebcf1e94b0605f751ed09cb04fcf290'
export default node
