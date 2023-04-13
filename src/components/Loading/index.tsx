import { Spin } from 'antd'
interface Props {
  spinning: boolean;
  children?:React.ReactNode;
}
const Loading: React.FC<React.PropsWithChildren<Props>> = ({ spinning = false, children }) => {
  /* const style: React.CSSProperties = {
    width: '100%',
    height:'100%'
  } */
  return (
    <Spin tip="Loading" size="large"  spinning={spinning}>
      {children}
    </Spin>
  )
}

export default Loading
