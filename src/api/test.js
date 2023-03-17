import http from 'utils/http'

export const getBannerList = () => {
  return http.get('/api/applet/homeNavigationList')
}

export const getChangeParams = () => {
  return http.post('/api/applet/getChangeParams', {
    goods_id: 258,
    spec_name: '到期归还/128G下单备注颜色',
  })
}
