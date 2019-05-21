import * as React from 'react'
import { Radio } from '@duik/it'
import { DocsContentPage, ExampleTable, PageContent, ImportPath } from '../../components'

import PropTable from './PropTable'


export const ReactDocsButton = () => {

  return (
    <DocsContentPage>
      <PageContent data={[
        { id: 'basic-usage', label: 'Basic Usage' },
        { id: 'props', label: 'Prop Table' },
      ]} />
      <h1>Radio</h1>
      <ImportPath name="Radio" />
      <p>Custom Radio</p>

      <h2 id="basic-usage">Basic Usage</h2>

      <ExampleTable fixed data={[
        { content: <Radio defaultChecked /> },
        { content: <Radio label="Check me" /> },
        { content: <Radio label="Radio" description="With Description" /> },
        { content: <Radio disabled label="Radio" description="With Description" /> },
      ]} />


      <PropTable />
    </DocsContentPage>
  )
}

export default ReactDocsButton;