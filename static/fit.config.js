import figlet from 'figlet'
// 花式控制台
export default function fig () {
  figlet('JDC O2 Team', function (err, data) {
    if (err) {
      console.log('Something went wrong...')
      console.dir(err)
      return
    }
    debugger
    console.log(data)
  })
}
