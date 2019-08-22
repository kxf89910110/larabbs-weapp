import moment from 'moment'
// import 'moment/locale/en'

const diffForHumans = (date, format = 'YYYYMMDD H:mm:ss') => {
  moment.locale('en')
  return moment(date, format).fromNow()
}

export default {
  diffForHumans
}
