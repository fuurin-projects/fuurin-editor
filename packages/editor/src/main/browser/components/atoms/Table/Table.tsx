import React, {ChangeEvent, ChangeEventHandler} from "react";
import styles from "./Table.css"

interface InputType {
  key: string
  type: string
  name: string
  value: any
  option?: any
}

interface InputTypeText extends InputType {
  type: 'text'
  name: string
  value: string
  option?: any
}

interface InputTypeNumber extends InputType {
  type: 'number'
  name: string
  value: number
  option?: any
}

interface InputTypeBoolean extends InputType {
  type: 'boolean'
  name: string
  value: boolean
  option?: {
    trueText?: string
    falseText?: string
  }
}

type TableDataType = InputTypeText | InputTypeNumber | InputTypeBoolean

type TableData = TableDataType[]
type Props = {
  data: TableData
  onChange?: (key: string | null, event: ChangeEvent<any>) => void
}

const Table: React.FunctionComponent<Props> = ({data, onChange}) => {

  const handleChange: ChangeEventHandler = (event) => {


    if (onChange) {

      const key = event.currentTarget.getAttribute('data-key');

      onChange(key, event);
    }
  }

  const getValue = (tableData: TableDataType) => {

    if (tableData.type === 'text') {
      return <input type={'text'} value={tableData.value}/>
    }
    if (tableData.type === 'number') {
      return <input type={'number'} value={tableData.value}/>
    }
    if (tableData.type === 'boolean') {

      const {trueText = 'true', falseText = 'false'} = tableData.option!;

      return <select name="example" value={Boolean(tableData.value).toString()} onChange={handleChange} data-key={tableData.key}>
        <option value="true">{trueText}</option>
        <option value="false">{falseText}</option>
      </select>
    }

  }

  const dom = data.map(data_ => {
    return (
      <tr key={data_.key}>
        <td>{data_.name}</td>
        <td>{getValue(data_)}</td>
      </tr>
    )
  })

  return (<>
    <table className={styles.main}>
      <tbody>
      {dom}
      </tbody>
    </table>
  </>)

};

export {Table, InputType, TableData, Props}
