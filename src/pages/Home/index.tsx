import Guide from '@/components/Guide'
import { trim } from '@/utils/format'
import { PageContainer } from '@ant-design/pro-components'
import { useModel } from '@umijs/max'
import { useEffect, useState } from 'react'
import styles from './index.less'
import { WordCloud } from '@ant-design/plots';
import { WordCloudConfig } from '@ant-design/charts'
import instance from '@/request/axios'


const HomePage: React.FC<React.PropsWithChildren<unknown>> = () => {
  
  const { name } = useModel('global')
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    instance.get('/json/keywords.json').then((res) => { 
      setData(res.data)
    })
  };
  const config  = {
    data,
    wordField: 'name',
    weightField: 'value',
    colorField: 'value',
    imageMask: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*07tdTIOmvlYAAAAAAAAAAABkARQnAQ',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [8, 32],
    },
  }as WordCloudConfig

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
        <WordCloud {...config} />
      </div>
    </PageContainer>
  )
}

export default HomePage
