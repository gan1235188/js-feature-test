import { dynamicProperties } from './validators/types'
import { featureTest } from './index'
import { sendAjax, getSearchParams } from './tools'

const params = getSearchParams()

featureTest({}, { isOutput: true }, null, (testResult: dynamicProperties, isDone: boolean) => {
  isDone && saveFeatureMapToService(testResult, () => {
    params.back && (location.href = params.back)
  })
})


function saveFeatureMapToService(testResult: dynamicProperties, cb: Function) {
  sendAjax('post', location.href, testResult, (isSuccess, data) => {
    cb()
  })
}

function saveFeatureMapToCookie(testResult: dynamicProperties) {
  const expires = getExpireTime()
  setCookie('jsFeatureTest', JSON.stringify(testResult), expires, '/')
}

function getExpireTime() {
  return new Date().getTime() + 1000 * 60 * 60 * 24 * 15
}


function setCookie(name: string, value: string, expires: Date | number, path: string) {
  document.cookie = `${name}=${value};expires=${new Date(expires).getTime()};path=${path}`
}