// 验证身份证
export const checkIdCard = (idCard) => {
  let reg =
    /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  return reg.test(idCard)
}

// 验证手机号
export const checkPhone = (phone) => {
  let reg = /^1[3456789]\d{9}$/
  return reg.test(phone)
}

// 验证密码 (数字或字母)
export const checkPassWord = (passWord) => {
  let reg = /^[A-Za-z0-9]{6,16}$/
  return reg.test(passWord)
}

export const checkName = (Name) => {
  let reg = /^[\u4e00-\u9fa5]{2,4}$/
  return reg.test(Name)
}
